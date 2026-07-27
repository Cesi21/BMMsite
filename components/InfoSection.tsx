"use client"

import { motion } from "framer-motion"

type InfoSectionProps = {
  title: string
  text: string
}

export default function InfoSection({ title, text }: InfoSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="surface-panel rounded-3xl border p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="muted-text mt-4 leading-relaxed">{text}</p>
    </motion.section>
  )
}
