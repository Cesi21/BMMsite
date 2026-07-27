"use client"

import { motion } from "framer-motion"

type Accent = "construction" | "mechanics" | "it"

type CTAContactProps = {
  title: string
  description: string
  buttonLabel: string
  emailLabel: string
  emailValue: string
  phoneLabel: string
  phoneValue: string
  accent: Accent
}

const accentStyles: Record<Accent, { glow: string; button: string }> = {
  construction: {
    glow: "from-[rgba(var(--amber),0.22)]",
    button: "hover:bg-[rgb(var(--amber))]"
  },
  mechanics: {
    glow: "from-[rgba(var(--blue),0.22)]",
    button: "hover:bg-[rgb(var(--blue))]"
  },
  it: {
    glow: "from-[rgba(var(--green),0.22)]",
    button: "hover:bg-[rgb(var(--green))]"
  }
}

export default function CTAContact({
  title,
  description,
  buttonLabel,
  emailLabel,
  emailValue,
  phoneLabel,
  phoneValue,
  accent
}: CTAContactProps) {
  const tone = accentStyles[accent]

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-3xl border border-[rgba(var(--border),0.12)] bg-[rgb(var(--card))] px-6 py-10 md:px-10 md:py-14"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.glow} via-transparent to-transparent`} />

      <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/72">{description}</p>

          <div className="mt-5 space-y-1 text-sm text-white/75">
            <p>
              {emailLabel}: <span className="text-white">{emailValue}</span>
            </p>
            <p>
              {phoneLabel}: <span className="text-white">{phoneValue}</span>
            </p>
          </div>
        </div>

        <motion.a
          href={`mailto:${emailValue}`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`inline-flex h-12 items-center justify-center rounded-xl border border-[rgba(var(--border),0.18)] bg-white/10 px-6 font-medium transition ${tone.button}`}
        >
          {buttonLabel}
        </motion.a>
      </div>
    </motion.section>
  )
}
