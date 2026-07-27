"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"

const cards = [
  {
    key: "construction",
    path: "gradbenistvo",
    number: "01",
    accent: "rgba(251,191,36,0.72)",
    background: "linear-gradient(135deg, rgba(245,158,11,0.34), rgba(59,130,246,0.16) 70%, rgba(15,23,42,0.78))"
  },
  {
    key: "mechanics",
    path: "mehanika",
    number: "02",
    accent: "rgba(96,165,250,0.78)",
    background: "linear-gradient(135deg, rgba(37,99,235,0.4), rgba(139,92,246,0.2) 68%, rgba(15,23,42,0.78))"
  },
  {
    key: "it",
    path: "racunalnistvo",
    number: "03",
    accent: "rgba(52,211,153,0.72)",
    background: "linear-gradient(135deg, rgba(16,185,129,0.34), rgba(14,165,233,0.2) 68%, rgba(15,23,42,0.78))"
  }
] as const

export default function MobileTiles() {
  const t = useTranslations("home")
  const locale = useLocale()

  return (
    <div className="grid h-full grid-rows-3 gap-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
        >
          <Link
            href={`/${locale}/${card.path}`}
            className="mobile-branch-card group relative flex h-full min-h-0 items-center overflow-hidden rounded-3xl border px-6 py-5 shadow-[0_20px_50px_rgba(3,7,18,0.24)]"
            style={{
              borderColor: card.accent,
              background: card.background
            }}
          >
            <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex w-full items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold tracking-[0.22em] text-white/55">{card.number}</span>
                <span className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{t(card.key)}</span>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-lg text-white transition group-active:scale-95">
                ↗
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
