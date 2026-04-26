"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"

const cards = [
  { key: "construction", path: "gradbenistvo", accent: "rgba(245,158,11,0.6)", tint: "rgba(245,158,11,0.16)" },
  { key: "mechanics", path: "mehanika", accent: "rgba(59,130,246,0.6)", tint: "rgba(59,130,246,0.16)" },
  { key: "it", path: "racunalnistvo", accent: "rgba(16,185,129,0.6)", tint: "rgba(16,185,129,0.16)" }
] as const

export default function MobileTiles() {
  const t = useTranslations("home")
  const locale = useLocale()

  return (
    <div className="grid gap-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
        >
          <Link
            href={`/${locale}/${card.path}`}
            className="block rounded-2xl border px-5 py-4"
            style={{
              borderColor: card.accent,
              background: `linear-gradient(140deg, ${card.tint}, rgba(18,22,30,0.84))`
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-tight text-foreground">{t(card.key)}</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/65">{t("explore")}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
