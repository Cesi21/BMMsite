"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"

type Tile = {
  key: "construction" | "mechanics" | "it"
  path: string
  accent: string
  border: string
}

const tiles: Tile[] = [
  {
    key: "construction",
    path: "gradbenistvo",
    accent: "from-[rgba(245,158,11,0.28)]",
    border: "hover:border-[rgba(245,158,11,0.62)]"
  },
  {
    key: "mechanics",
    path: "mehanika",
    accent: "from-[rgba(59,130,246,0.28)]",
    border: "hover:border-[rgba(59,130,246,0.62)]"
  },
  {
    key: "it",
    path: "racunalnistvo",
    accent: "from-[rgba(16,185,129,0.28)]",
    border: "hover:border-[rgba(16,185,129,0.62)]"
  }
]

export default function MobileTiles() {
  const t = useTranslations("home")
  const locale = useLocale()

  return (
    <div className="flex h-full flex-col justify-center">
      <p className="mb-4 text-sm tracking-wide text-white/65">{t("heroHint")}</p>
      <div className="space-y-3">
        {tiles.map((tile, index) => (
          <motion.div
            key={tile.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: index * 0.08 }}
          >
            <Link href={`/${locale}/${tile.path}`} className="block">
              <motion.article
                whileTap={{ scale: 0.985 }}
                className={`relative overflow-hidden rounded-2xl border border-white/15 bg-[rgba(255,255,255,0.05)] px-4 py-5 transition ${tile.border}`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${tile.accent} to-transparent`} />
                <h2 className="relative text-xl font-semibold tracking-tight text-white">{t(tile.key)}</h2>
              </motion.article>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
