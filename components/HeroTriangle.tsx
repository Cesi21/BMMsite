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
    <section className="home-hero relative h-full overflow-hidden rounded-[2rem] border backdrop-blur-xl">
      <div className="home-hero-glow pointer-events-none absolute inset-0" />
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="hero-spectrum-line" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="hero-intro absolute left-8 top-8 z-20 max-w-sm xl:left-12 xl:top-10 xl:max-w-lg">
        <p className="soft-text text-xs font-medium uppercase tracking-[0.24em]">{t("eyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--text-primary)] xl:text-[3.35rem]">{t("title")}</h1>
        <p className="muted-text mt-4 max-w-md text-sm leading-relaxed xl:text-base">{t("subtitle")}</p>
      </div>

      <div className="active-preview surface-panel absolute right-8 top-8 z-20 hidden w-80 overflow-hidden rounded-2xl border p-5 backdrop-blur-xl xl:block" data-tone={activeData.key}>
        <div className="active-preview-mark" aria-hidden />
        <p className="soft-text relative text-[10px] font-medium uppercase tracking-[0.22em]">{t("activeLabel")}</p>
        <p className={`mt-2 text-xl font-semibold ${activeData.textClass}`}>{t(activeData.key)}</p>
        <p className="muted-text mt-2 text-sm leading-relaxed">{t(`descriptions.${activeData.key}`)}</p>
        <Link
          href={`/${locale}/${activeData.path}`}
          className="header-nav-link mt-4 block rounded-xl border px-3 py-2 text-center text-xs font-medium uppercase tracking-[0.14em]"
        >
          {t("explore")}
        </Link>
      </div>

      <div className="hero-diagram">
        <svg
          viewBox="0 0 1200 720"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
          role="group"
          aria-label={t("title")}
        >
          <title>{t("title")}</title>
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
                <a
                  key={segment.key}
                  href={`/${locale}/${segment.path}`}
                  aria-label={t(segment.key)}
                  onMouseEnter={() => setActiveSegment(segment.key)}
                  onFocus={() => setActiveSegment(segment.key)}
                >
                  <motion.polygon
                    points={segment.polygon}
                    fill={active ? segment.activeFill : segment.fill}
                    stroke={active ? segment.accent : "rgba(186,230,253,0.24)"}
                    strokeWidth={active ? 3.2 : 1.5}
                    initial={{ opacity: 0.82 }}
                    animate={{ opacity: active ? 1 : 0.82 }}
                    transition={{ duration: 0.2 }}
                    style={{ filter: active ? "url(#soft-glow)" : "none" }}
                    className="cursor-pointer"
                  />
                </a>
              )
            })}
          </g>

          <circle cx="600" cy="370" r="8" fill="rgba(240,249,255,0.95)" />
          <circle cx="600" cy="370" r="18" fill="none" stroke="rgba(186,230,253,0.32)" />
        </svg>
      {segments.map((segment) => {
        const active = segment.key === activeSegment

        return (
          <Link
            key={segment.key}
            href={`/${locale}/${segment.path}`}
            onMouseEnter={() => setActiveSegment(segment.key)}
            onFocus={() => setActiveSegment(segment.key)}
            className={`home-link-card absolute z-30 w-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-4 py-3 text-center shadow-[0_16px_45px_rgba(3,7,18,0.2)] backdrop-blur-xl transition-colors duration-200 xl:w-56 ${segment.linkPosition}`}
            data-active={active}
            data-tone={segment.key}
            style={{
              borderColor: active ? segment.accent : "var(--line)"
            }}
          >
            <span className={`font-semibold tracking-tight ${active ? segment.textClass : ""}`}>{t(segment.key)}</span>
          </Link>
        )
      })}
      </div>
    </section>
  )
}
