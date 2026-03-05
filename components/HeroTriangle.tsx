"use client"

import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Segment = "construction" | "mechanics" | "it"

type SegmentConfig = {
  key: Segment
  path: string
  points: string
  idleFill: string
  activeFill: string
  accent: string
  labelClass: string
}

const viewWidth = 1000
const viewHeight = 620
const centerX = 500
const centerY = 260

const segments: SegmentConfig[] = [
  {
    key: "mechanics",
    path: "mehanika",
    points: `0,0 ${centerX},0 ${centerX},${centerY} 0,${viewHeight}`,
    idleFill: "rgba(255,255,255,0.055)",
    activeFill: "rgba(59,130,246,0.32)",
    accent: "rgb(59,130,246)",
    labelClass: "left-[12%] top-[29%]"
  },
  {
    key: "construction",
    path: "gradbenistvo",
    points: `${centerX},0 ${viewWidth},0 ${viewWidth},${viewHeight} ${centerX},${centerY}`,
    idleFill: "rgba(255,255,255,0.055)",
    activeFill: "rgba(245,158,11,0.32)",
    accent: "rgb(245,158,11)",
    labelClass: "right-[12%] top-[29%]"
  },
  {
    key: "it",
    path: "racunalnistvo",
    points: `0,${viewHeight} ${centerX},${centerY} ${viewWidth},${viewHeight}`,
    idleFill: "rgba(255,255,255,0.055)",
    activeFill: "rgba(16,185,129,0.32)",
    accent: "rgb(16,185,129)",
    labelClass: "left-1/2 bottom-[14%] -translate-x-1/2"
  }
]

const labelTone: Record<Segment, string> = {
  construction: "group-hover:text-[rgb(245,158,11)] group-focus-visible:text-[rgb(245,158,11)]",
  mechanics: "group-hover:text-[rgb(59,130,246)] group-focus-visible:text-[rgb(59,130,246)]",
  it: "group-hover:text-[rgb(16,185,129)] group-focus-visible:text-[rgb(16,185,129)]"
}

export default function HeroTriangle() {
  const t = useTranslations("home")
  const locale = useLocale()
  const router = useRouter()
  const [hovered, setHovered] = useState<Segment | null>(null)

  const goTo = (path: string) => {
    router.push(`/${locale}/${path}`)
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[rgb(10,12,16)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.12),rgba(255,255,255,0)_56%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.02),rgba(255,255,255,0)_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(0,0,0,0),rgba(0,0,0,0.62)_88%)]" />

      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <filter id="segmentGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width={viewWidth} height={viewHeight} fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.8" />

        {segments.map((segment) => {
          const isActive = hovered === segment.key

          return (
            <motion.polygon
              key={segment.key}
              points={segment.points}
              fill={isActive ? segment.activeFill : segment.idleFill}
              className="cursor-pointer"
              initial={false}
              animate={{ filter: isActive ? "url(#segmentGlow)" : "none" }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHovered(segment.key)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => goTo(segment.path)}
            />
          )
        })}

        <line x1={centerX} y1="0" x2={centerX} y2={centerY} stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
        <line x1={centerX} y1={centerY} x2="0" y2={viewHeight} stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
        <line x1={centerX} y1={centerY} x2={viewWidth} y2={viewHeight} stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />

        {segments.map((segment) => {
          if (hovered !== segment.key) {
            return null
          }

          return (
            <polygon
              key={`${segment.key}-accent`}
              points={segment.points}
              fill="none"
              strokeWidth="4"
              stroke={segment.accent}
              filter="url(#segmentGlow)"
            />
          )
        })}
      </svg>

      <div className="absolute left-6 top-5 text-sm tracking-wide text-white/65">{t("heroHint")}</div>

      <div className="absolute inset-0">
        {segments.map((segment) => {
          const isActive = hovered === segment.key

          return (
            <motion.button
              key={segment.key}
              type="button"
              className={`group absolute rounded-2xl border border-white/15 bg-[rgba(255,255,255,0.06)] px-6 py-4 backdrop-blur-md transition-colors ${segment.labelClass}`}
              onMouseEnter={() => setHovered(segment.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(segment.key)}
              onBlur={() => setHovered(null)}
              onClick={() => goTo(segment.path)}
              animate={{ scale: isActive ? 1.04 : 1, y: isActive ? -2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className={`text-2xl font-semibold tracking-tight text-white transition-colors md:text-4xl ${labelTone[segment.key]}`}
              >
                {t(segment.key)}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
