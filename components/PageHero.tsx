"use client"

import { motion } from "framer-motion"

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  accent: string
}

export default function PageHero({ eyebrow, title, subtitle, accent }: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="surface-panel relative overflow-hidden rounded-3xl border p-8 md:p-12"
      style={{ boxShadow: `inset 0 0 0 1px ${accent}` }}
    >
      <p className="soft-text text-xs uppercase tracking-[0.16em]">{eyebrow}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
      <p className="muted-text mt-4 max-w-3xl md:text-lg">{subtitle}</p>
    </motion.section>
  )
}
