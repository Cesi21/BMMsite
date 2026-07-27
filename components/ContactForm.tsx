"use client"

import { FormEvent, useState } from "react"

type ContactFormProps = {
  locale: string
  title: string
  intro: string
  labels: {
    email: string
    emailPlaceholder: string
    phone: string
    phonePlaceholder: string
    area: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    consent: string
    submit: string
    sending: string
    success: string
    error: string
  }
  areas: {
    general: string
    construction: string
    mechanics: string
    it: string
  }
}

type SubmissionState = "idle" | "sending" | "success" | "error"

const fieldClassName =
  "surface-subtle w-full rounded-xl border px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-soft)] focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"

export default function ContactForm({
  locale,
  title,
  intro,
  labels,
  areas,
}: ContactFormProps) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmissionState("sending")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          area: String(formData.get("area") ?? ""),
          subject: String(formData.get("subject") ?? ""),
          message: String(formData.get("message") ?? ""),
          consent: formData.get("consent") === "on",
          website: String(formData.get("website") ?? ""),
          locale,
        }),
      })

      if (!response.ok) {
        throw new Error("Contact form request failed")
      }

      form.reset()
      setSubmissionState("success")
    } catch {
      setSubmissionState("error")
    }
  }

  return (
    <section className="surface-panel rounded-3xl border p-6 md:p-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="muted-text mt-3">{intro}</p>
      </div>

      <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
        <input
          className="hidden"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            {labels.email}
            <input
              className={fieldClassName}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={labels.emailPlaceholder}
              maxLength={254}
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium">
            {labels.phone}
            <input
              className={fieldClassName}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={labels.phonePlaceholder}
              maxLength={50}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            {labels.area}
            <select
              className={fieldClassName}
              name="area"
              defaultValue="general"
              required
            >
              <option value="general">{areas.general}</option>
              <option value="construction">{areas.construction}</option>
              <option value="mechanics">{areas.mechanics}</option>
              <option value="it">{areas.it}</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium">
            {labels.subject}
            <input
              className={fieldClassName}
              name="subject"
              type="text"
              placeholder={labels.subjectPlaceholder}
              minLength={3}
              maxLength={120}
              required
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium">
          {labels.message}
          <textarea
            className={`${fieldClassName} min-h-40 resize-y`}
            name="message"
            placeholder={labels.messagePlaceholder}
            minLength={20}
            maxLength={5_000}
            required
          />
        </label>

        <label className="muted-text flex max-w-3xl items-start gap-3 text-sm leading-6">
          <input
            className="mt-1 size-4 shrink-0 accent-blue-600"
            name="consent"
            type="checkbox"
            required
          />
          <span>{labels.consent}</span>
        </label>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            className="inline-flex min-w-48 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-wait disabled:opacity-65"
            type="submit"
            disabled={submissionState === "sending"}
          >
            {submissionState === "sending" ? labels.sending : labels.submit}
          </button>

          <p
            className={
              submissionState === "error"
                ? "text-sm text-red-500"
                : "text-sm text-emerald-500"
            }
            aria-live="polite"
            role="status"
          >
            {submissionState === "success" && labels.success}
            {submissionState === "error" && labels.error}
          </p>
        </div>
      </form>
    </section>
  )
}
