"use client"

import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Segment = "construction" | "mechanics" | "it"

type SegmentConfig = {
  key: Segment
  path: string
  polygon: string
  accent: string
  tint: string
  labelPosition: string
}

const viewWidth = 1000
const viewHeight = 1000
const topX = 500
const topY = 0
const centerX = 500
const centerY = 470
const leftX = 0
const leftY = 1000
const rightX = 1000
const rightY = 1000

const segments: SegmentConfig[] = [
  {
    key: "construction",
    path: "gradbenistvo",
    polygon: `${topX},${topY} ${centerX},${centerY} ${leftX},${leftY}`,
    accent: "rgb(245,158,11)",
    tint: "rgba(245,158,11,0.26)",
    labelPosition: "left-[15%] top-[34%]"
  },
  {
    key: "mechanics",
    path: "mehanika",
    polygon: `${topX},${topY} ${centerX},${centerY} ${rightX},${rightY}`,
    accent: "rgb(59,130,246)",
    tint: "rgba(59,130,246,0.26)",
    labelPosition: "right-[15%] top-[34%]"
  },
  {
    key: "it",
    path: "racunalnistvo",
    polygon: `${leftX},${leftY} ${centerX},${centerY} ${rightX},${rightY}`,
    accent: "rgb(16,185,129)",
    tint: "rgba(16,185,129,0.24)",
    labelPosition: "bottom-[16%] left-1/2 -translate-x-1/2"
  }
]

export default function HeroTriangle() {
  const t = useTranslations("home")
  const locale = useLocale()
  const router = useRouter()
  const [hovered, setHovered] = useState<Segment | null>(null)

  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.08),rgba(255,255,255,0)_42%)]" />
      <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <filter id="hover-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {segments.map((segment) => {
          const active = hovered === segment.key
          return (
            <motion.polygon
              key={segment.key}
              points={segment.polygon}
              fill={active ? segment.tint : "rgba(255,255,255,0.03)"}
              stroke={active ? segment.accent : "rgba(255,255,255,0.08)"}
              strokeWidth={active ? 2.6 : 1}
              animate={{ opacity: active ? 1 : hovered ? 0.82 : 0.95 }}
              transition={{ duration: 0.22 }}
              onMouseEnter={() => setHovered(segment.key)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => router.push(`/${locale}/${segment.path}`)}
              className="cursor-pointer"
              style={{ filter: active ? "url(#hover-glow)" : "none" }}
            />
          )
        })}

        <line x1={topX} y1={topY} x2={centerX} y2={centerY} stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
        <line x1={centerX} y1={centerY} x2={leftX} y2={leftY} stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
        <line x1={centerX} y1={centerY} x2={rightX} y2={rightY} stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
        <circle cx={centerX} cy={centerY} r="4" fill="rgba(235,238,245,0.8)" />
      </svg>

      <div className="absolute inset-0">
        {segments.map((segment) => {
          const active = hovered === segment.key
          return (
            <motion.button
              key={segment.key}
              type="button"
              onMouseEnter={() => setHovered(segment.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(segment.key)}
              onBlur={() => setHovered(null)}
              onClick={() => router.push(`/${locale}/${segment.path}`)}
              className={`absolute ${segment.labelPosition} rounded-xl border border-white/10 bg-[rgba(18,22,30,0.58)] px-6 py-3 text-left backdrop-blur-md`}
              animate={{ y: active ? -3 : 0, scale: active ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
              style={{ borderColor: active ? segment.accent : "rgba(255,255,255,0.12)" }}
            >
              <span className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">{t(segment.key)}</span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
