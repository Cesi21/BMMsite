"use client"

import { motion } from "framer-motion"
import type { CSSProperties } from "react"

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
      className="page-hero surface-panel relative overflow-hidden rounded-[2rem] border p-8 md:min-h-[21rem] md:p-12"
      style={{ "--section-accent": accent } as CSSProperties}
    >
      <div className="page-hero-orbit" aria-hidden />
      <div className="page-hero-spectrum" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-end md:min-h-[15rem]">
        <p className="page-eyebrow soft-text text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">{title}</h1>
        <p className="muted-text mt-5 max-w-3xl text-base leading-relaxed md:text-xl">{subtitle}</p>
      </div>
    </motion.section>
  )
}
