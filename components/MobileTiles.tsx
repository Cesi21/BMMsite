"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"

const cards = [
  { key: "construction", path: "gradbenistvo", accent: "rgba(245,158,11,0.45)" },
  { key: "mechanics", path: "mehanika", accent: "rgba(59,130,246,0.45)" },
  { key: "it", path: "racunalnistvo", accent: "rgba(16,185,129,0.45)" }
] as const

export default function MobileTiles() {
  const t = useTranslations("home")
  const locale = useLocale()

  return (
    <div className="grid h-full content-center gap-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
        >
          <Link
            href={`/${locale}/${card.path}`}
            className="block rounded-2xl border border-white/10 bg-[rgba(18,22,30,0.72)] px-5 py-6 text-xl font-semibold tracking-tight text-foreground"
            style={{ boxShadow: `inset 0 0 0 1px ${card.accent}` }}
          >
            {t(card.key)}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
