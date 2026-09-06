"use client"

import { useRef, useState } from "react"
import { useLocale } from "next-intl"
import { RevealGroup, RevealItem } from "@/components/ScrollReveal"

type ContactDetailsProps = {
  title: string
  intro: string
  emailLabel: string
  phoneLabel: string
  locationLabel: string
  email: string
  phone: string
  location: string
  hours: string
}

export default function ContactDetails(props: ContactDetailsProps) {
  const locale = useLocale()
  const [copied, setCopied] = useState<"email" | "phone" | "location" | null>(null)
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const labels = {
    sl: { hint: "Dvoklik za kopiranje", copied: "Kopirano" },
    en: { hint: "Double-click to copy", copied: "Copied" },
    hr: { hint: "Dvoklik za kopiranje", copied: "Kopirano" },
    de: { hint: "Doppelklick zum Kopieren", copied: "Kopiert" },
  } as const

  const copyText = async (key: "email" | "phone" | "location", value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)

      if (feedbackTimer.current) {
        clearTimeout(feedbackTimer.current)
      }

      feedbackTimer.current = setTimeout(() => setCopied(null), 1600)
    } catch {
      // The content remains selectable if clipboard access is unavailable.
    }
  }

  const copyLabel = labels[locale as keyof typeof labels] ?? labels.en

  return (
    <section className="contact-details surface-panel relative overflow-hidden rounded-3xl border p-6 md:p-8">
      <div className="contact-details-spectrum" aria-hidden />
      <div className="relative">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{props.title}</h2>
        <p className="muted-text mt-3 max-w-3xl">{props.intro}</p>
      </div>
      <RevealGroup className="relative mt-6 grid gap-3 md:grid-cols-3">
        <RevealItem
          className="contact-detail-item surface-subtle relative rounded-2xl border p-4"
          onDoubleClick={() => copyText("email", props.email)}
          title={copyLabel.hint}
        >
          <span className="soft-text block text-[10px] font-semibold uppercase tracking-[0.16em]">{props.emailLabel}</span>
          <span className="mt-2 block font-semibold">{props.email}</span>
          <span
            className="contact-copy-status text-[10px] font-semibold uppercase tracking-[0.14em]"
            data-visible={copied === "email"}
            aria-live="polite"
          >
            {copied === "email" ? copyLabel.copied : copyLabel.hint}
          </span>
        </RevealItem>
        <RevealItem
          className="contact-detail-item surface-subtle relative rounded-2xl border p-4"
          onDoubleClick={() => copyText("phone", props.phone)}
          title={copyLabel.hint}
        >
          <span className="soft-text block text-[10px] font-semibold uppercase tracking-[0.16em]">{props.phoneLabel}</span>
          <span className="mt-2 block font-semibold">{props.phone}</span>
          <span
            className="contact-copy-status text-[10px] font-semibold uppercase tracking-[0.14em]"
            data-visible={copied === "phone"}
            aria-live="polite"
          >
            {copied === "phone" ? copyLabel.copied : copyLabel.hint}
          </span>
        </RevealItem>
        <RevealItem
          className="contact-detail-item surface-subtle relative rounded-2xl border p-4"
          onDoubleClick={() => copyText("location", props.location)}
          title={copyLabel.hint}
        >
          <span className="soft-text block text-[10px] font-semibold uppercase tracking-[0.16em]">{props.locationLabel}</span>
          <span className="mt-2 block font-semibold">{props.location}</span>
          <span className="soft-text mt-1 block text-xs">{props.hours}</span>
          <span
            className="contact-copy-status text-[10px] font-semibold uppercase tracking-[0.14em]"
            data-visible={copied === "location"}
            aria-live="polite"
          >
            {copied === "location" ? copyLabel.copied : copyLabel.hint}
          </span>
        </RevealItem>
      </RevealGroup>
    </section>
  )
}
