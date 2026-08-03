"use client"

import { motion } from "framer-motion"

type InfoSectionProps = {
  title: string
  text: string
  tone?: "construction" | "mechanics" | "it" | "mixed"
}

export default function InfoSection({ title, text, tone = "mixed" }: InfoSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="info-section surface-panel relative overflow-hidden rounded-3xl border p-6 md:p-8"
      data-tone={tone}
    >
      <span className="info-marker" aria-hidden />
      <h2 className="relative text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <p className="muted-text relative mt-4 max-w-3xl leading-relaxed">{text}</p>
    </motion.section>
  )
}
