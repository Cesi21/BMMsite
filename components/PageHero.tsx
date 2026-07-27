"use client"

import { motion } from "framer-motion"

type Accent = "construction" | "mechanics" | "it"

type PageHeroProps = {
  title: string
  subtitle: string
  accent: Accent
}

const accentGlow: Record<Accent, string> = {
  construction: "from-[rgba(var(--amber),0.24)]",
  mechanics: "from-[rgba(var(--blue),0.24)]",
  it: "from-[rgba(var(--green),0.24)]"
}

export default function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-[rgba(var(--border),0.12)] bg-[rgb(var(--card))] px-6 py-14 md:px-10 md:py-20"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentGlow[accent]} via-transparent to-transparent`} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),rgba(255,255,255,0)_45%)]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.22em] text-white/55">BMM Cesar</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base text-white/72 md:text-xl">{subtitle}</p>
      </div>
    </motion.section>
  )
}
