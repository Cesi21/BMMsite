"use client"

import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useMemo, useState } from "react"

type Segment = "construction" | "mechanics" | "it"

type SegmentConfig = {
  key: Segment
  path: string
  polygon: string
  accent: string
  tint: string
  textClass: string
}

const segments: SegmentConfig[] = [
  {
    key: "construction",
    path: "gradbenistvo",
    polygon: "500,40 500,500 70,920",
    accent: "rgb(245,158,11)",
    tint: "rgba(245,158,11,0.22)",
    textClass: "text-[rgb(245,158,11)]"
  },
  {
    key: "mechanics",
    path: "mehanika",
    polygon: "500,40 930,920 500,500",
    accent: "rgb(59,130,246)",
    tint: "rgba(59,130,246,0.22)",
    textClass: "text-[rgb(59,130,246)]"
  },
  {
    key: "it",
    path: "racunalnistvo",
    polygon: "70,920 500,500 930,920",
    accent: "rgb(16,185,129)",
    tint: "rgba(16,185,129,0.22)",
    textClass: "text-[rgb(16,185,129)]"
  }
]

export default function HeroTriangle() {
  const t = useTranslations("home")
  const locale = useLocale()

  const [activeSegment, setActiveSegment] = useState<Segment>("construction")

  const activeData = useMemo(() => segments.find((segment) => segment.key === activeSegment) ?? segments[0], [activeSegment])

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div className="space-y-5 rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.72)] p-6 backdrop-blur-xl md:p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-white/55">{t("eyebrow")}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">{t("title")}</h1>
          <p className="max-w-xl text-sm text-white/75 md:text-base">{t("subtitle")}</p>
        </div>

        <div className="grid gap-2">
          {segments.map((segment) => {
            const active = segment.key === activeSegment

            return (
              <Link
                key={segment.key}
                href={`/${locale}/${segment.path}`}
                onMouseEnter={() => setActiveSegment(segment.key)}
                onFocus={() => setActiveSegment(segment.key)}
                className="group flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-200"
                style={{
                  borderColor: active ? segment.accent : "rgba(255,255,255,0.12)",
                  background: active ? segment.tint : "rgba(255,255,255,0.02)"
                }}
              >
                <span className={`text-base font-medium ${active ? segment.textClass : "text-white/85"}`}>{t(segment.key)}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/50 transition group-hover:text-white/80">{t("explore")}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="relative hidden overflow-hidden rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.58)] p-4 backdrop-blur-xl lg:block">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.09),transparent_48%)]" />

        <svg viewBox="0 0 1000 960" className="relative h-[540px] w-full" aria-hidden>
          <defs>
            <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {segments.map((segment) => {
            const active = segment.key === activeSegment

            return (
              <motion.polygon
                key={segment.key}
                points={segment.polygon}
                fill={active ? segment.tint : "rgba(255,255,255,0.04)"}
                stroke={active ? segment.accent : "rgba(255,255,255,0.14)"}
                strokeWidth={active ? 2.6 : 1.1}
                animate={{ opacity: active ? 1 : 0.9 }}
                transition={{ duration: 0.18 }}
                style={{ filter: active ? "url(#soft-glow)" : "none" }}
                onMouseEnter={() => setActiveSegment(segment.key)}
              />
            )
          })}

          <circle cx="500" cy="500" r="6" fill="rgba(235,238,245,0.9)" />
        </svg>

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[rgba(10,12,16,0.72)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">{t("activeLabel")}</p>
          <p className={`mt-1 text-xl font-semibold ${activeData.textClass}`}>{t(activeData.key)}</p>
        </div>
      </div>
    </div>
  )
}
