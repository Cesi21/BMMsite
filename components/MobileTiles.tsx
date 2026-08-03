"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"

const cards = [
  {
    key: "construction",
    path: "gradbenistvo",
    tone: "construction",
  },
  {
    key: "mechanics",
    path: "mehanika",
    tone: "mechanics",
  },
  {
    key: "it",
    path: "racunalnistvo",
    tone: "it",
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
            className="mobile-branch-card group relative flex h-full min-h-0 items-center overflow-hidden rounded-3xl border px-6 py-5"
            data-tone={card.tone}
          >
            <div className="mobile-branch-orbit pointer-events-none absolute -right-10 top-1/2 size-40 -translate-y-1/2 rounded-full border" />
            <span className="relative w-full text-center text-xl font-semibold tracking-tight text-white sm:text-2xl">{t(card.key)}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
