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
      className="rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.55)] p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 leading-relaxed text-white/75">{text}</p>
    </motion.section>
  )
}
