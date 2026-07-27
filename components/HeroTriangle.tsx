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
  fill: string
  activeFill: string
  textClass: string
  linkPosition: string
}

const segments: SegmentConfig[] = [
  {
    key: "construction",
    path: "gradbenistvo",
    polygon: "600,80 600,370 60,660",
    accent: "rgb(251,191,36)",
    fill: "rgba(245,158,11,0.26)",
    activeFill: "rgba(245,158,11,0.48)",
    textClass: "text-amber-300",
    linkPosition: "left-[28%] top-[61%]"
  },
  {
    key: "mechanics",
    path: "mehanika",
    polygon: "600,80 1140,660 600,370",
    accent: "rgb(96,165,250)",
    fill: "rgba(37,99,235,0.3)",
    activeFill: "rgba(37,99,235,0.54)",
    textClass: "text-blue-300",
    linkPosition: "left-[72%] top-[61%]"
  },
  {
    key: "it",
    path: "racunalnistvo",
    polygon: "60,660 600,370 1140,660",
    accent: "rgb(52,211,153)",
    fill: "rgba(16,185,129,0.27)",
    activeFill: "rgba(16,185,129,0.5)",
    textClass: "text-emerald-300",
    linkPosition: "left-1/2 top-[81%]"
  }
]

export default function HeroTriangle() {
  const t = useTranslations("home")
  const locale = useLocale()
  const [activeSegment, setActiveSegment] = useState<Segment>("construction")

  const activeData = useMemo(
    () => segments.find((segment) => segment.key === activeSegment) ?? segments[0],
    [activeSegment]
  )

  return (
    <section className="home-hero relative h-full overflow-hidden rounded-[2rem] border shadow-[0_32px_90px_rgba(3,7,18,0.28)] backdrop-blur-xl">
      <div className="home-hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(96,165,250,0.18),transparent_30%),radial-gradient(circle_at_16%_76%,rgba(245,158,11,0.13),transparent_32%),radial-gradient(circle_at_84%_76%,rgba(16,185,129,0.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent" />

      <div className="absolute left-8 top-8 z-20 max-w-sm xl:left-12 xl:top-10 xl:max-w-md">
        <p className="soft-text text-xs font-medium uppercase tracking-[0.24em]">{t("eyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--text-primary)] xl:text-5xl">{t("title")}</h1>
        <p className="muted-text mt-4 max-w-md text-sm leading-relaxed xl:text-base">{t("subtitle")}</p>
      </div>

      <div className="surface-panel absolute right-8 top-8 z-20 hidden w-72 rounded-2xl border p-4 backdrop-blur-xl xl:block">
        <p className="soft-text text-[10px] font-medium uppercase tracking-[0.22em]">{t("activeLabel")}</p>
        <p className={`mt-1 text-lg font-semibold ${activeData.textClass}`}>{t(activeData.key)}</p>
        <p className="muted-text mt-1.5 text-sm leading-relaxed">{t(`descriptions.${activeData.key}`)}</p>
      </div>

      <div className="absolute inset-x-[1%] bottom-[-2%] top-[1%]">
        <svg viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid meet" className="h-full w-full" aria-hidden>
          <defs>
            <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="triangle-shadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#020617" floodOpacity="0.45" />
            </filter>
          </defs>

          <g filter="url(#triangle-shadow)">
            {segments.map((segment) => {
              const active = segment.key === activeSegment

              return (
                <motion.polygon
                  key={segment.key}
                  points={segment.polygon}
                  fill={active ? segment.activeFill : segment.fill}
                  stroke={active ? segment.accent : "rgba(186,230,253,0.24)"}
                  strokeWidth={active ? 3.2 : 1.5}
                  animate={{ opacity: active ? 1 : 0.82 }}
                  transition={{ duration: 0.2 }}
                  style={{ filter: active ? "url(#soft-glow)" : "none" }}
                  onMouseEnter={() => setActiveSegment(segment.key)}
                />
              )
            })}
          </g>

          <circle cx="600" cy="370" r="8" fill="rgba(240,249,255,0.95)" />
          <circle cx="600" cy="370" r="18" fill="none" stroke="rgba(186,230,253,0.32)" />
        </svg>
      </div>

      {segments.map((segment) => {
        const active = segment.key === activeSegment

        return (
          <Link
            key={segment.key}
            href={`/${locale}/${segment.path}`}
            onMouseEnter={() => setActiveSegment(segment.key)}
            onFocus={() => setActiveSegment(segment.key)}
            className={`home-link-card group absolute z-30 w-56 -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-4 text-left shadow-[0_16px_45px_rgba(3,7,18,0.2)] backdrop-blur-xl transition duration-200 hover:-translate-y-[54%] xl:w-64 ${segment.linkPosition}`}
            data-active={active}
            style={{
              borderColor: active ? segment.accent : "var(--line)"
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`text-lg font-semibold tracking-tight ${active ? segment.textClass : ""}`}>{t(segment.key)}</span>
              <span className="surface-subtle grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm transition group-hover:rotate-45">
                ↗
              </span>
            </div>
            <p className="muted-text mt-2 hidden text-xs leading-relaxed xl:block">{t(`descriptions.${segment.key}`)}</p>
          </Link>
        )
      })}
    </section>
  )
}
