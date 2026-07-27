import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

export const runtime = "nodejs"

const CONTACT_WINDOW_MS = 10 * 60 * 1000
const CONTACT_LIMIT = 5
const MAX_BODY_BYTES = 20_000

const contactSchema = z.object({
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(50),
  area: z.enum(["general", "construction", "mechanics", "it"]),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(20).max(5_000),
  consent: z.literal(true),
  website: z.string().max(200),
  locale: z.enum(["sl", "en", "hr", "de"]),
})

type RateLimitEntry = {
  count: number
  resetAt: number
}

const rateLimits = new Map<string, RateLimitEntry>()
let lastRateLimitCleanup = Date.now()

const areaLabels = {
  general: "Splošno / General",
  construction: "Gradbeništvo / Construction",
  mechanics: "Tuning & mehanika / Mechanics",
  it: "Računalništvo / IT",
} as const

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  )
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

function checkRateLimit(clientIp: string) {
  const now = Date.now()

  if (now - lastRateLimitCleanup >= CONTACT_WINDOW_MS) {
    for (const [key, entry] of rateLimits) {
      if (entry.resetAt <= now) {
        rateLimits.delete(key)
      }
    }

    lastRateLimitCleanup = now
  }

  const current = rateLimits.get(clientIp)

  if (!current || current.resetAt <= now) {
    rateLimits.set(clientIp, {
      count: 1,
      resetAt: now + CONTACT_WINDOW_MS,
    })

    return { allowed: true, retryAfter: 0 }
  }

  if (current.count >= CONTACT_LIMIT) {
    return {
      allowed: false,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    }
  }

  current.count += 1
  return { allowed: true, retryAfter: 0 }
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin")
  const host = request.headers.get("host")

  if (!origin || !host) {
    return true
  }

  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "invalid_origin" }, { status: 403 })
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0")

  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 })
  }

  let rawBody: string

  try {
    rawBody = await request.text()
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 })
  }

  let body: unknown

  try {
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "invalid_request",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  // Silently accept honeypot submissions so bots do not learn how they were detected.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true })
  }

  const rateLimit = checkRateLimit(getClientIp(request))

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfter) },
      },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_TO_EMAIL
  const sender = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form email delivery is not configured.")
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 })
  }

  const { email, phone, area, subject, message, locale } = parsed.data
  const safeSubject = subject.replace(/[\r\n]+/g, " ")
  const areaLabel = areaLabels[area]
  const resend = new Resend(apiKey)

  const text = [
    `Novo povpraševanje: ${safeSubject}`,
    "",
    `Področje: ${areaLabel}`,
    `Jezik strani: ${locale.toUpperCase()}`,
    `E-pošta: ${email}`,
    `Telefon: ${phone || "Ni naveden"}`,
    "",
    "Sporočilo:",
    message,
  ].join("\n")

  const html = `
    <h1>Novo povpraševanje</h1>
    <p><strong>Zadeva:</strong> ${escapeHtml(safeSubject)}</p>
    <p><strong>Področje:</strong> ${escapeHtml(areaLabel)}</p>
    <p><strong>Jezik strani:</strong> ${escapeHtml(locale.toUpperCase())}</p>
    <p><strong>E-pošta:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || "Ni naveden")}</p>
    <hr />
    <p><strong>Sporočilo:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `[BMM Cesar] ${areaLabel}: ${safeSubject}`,
      text,
      html,
    })

    if (error) {
      console.error("Contact form email delivery failed:", error.name)
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 })
    }
  } catch {
    console.error("Contact form email provider could not be reached.")
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
