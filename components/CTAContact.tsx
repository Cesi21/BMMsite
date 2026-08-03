"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type CTAContactProps = {
  title: string
  text: string
  button: string
  href: string
}

export default function CTAContact({ title, text, button, href }: CTAContactProps) {
  const external = href.startsWith("mailto:") || href.startsWith("http")

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="contact-cta surface-panel relative overflow-hidden rounded-3xl border p-6 md:p-9"
    >
      <div className="contact-cta-glow" aria-hidden />
      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          <p className="muted-text mt-3 max-w-2xl leading-relaxed">{text}</p>
        </div>
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="accent-button inline-flex shrink-0 items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition"
      >
          {button}
          <span aria-hidden>↗</span>
      </Link>
      </div>
    </motion.section>
  )
}
