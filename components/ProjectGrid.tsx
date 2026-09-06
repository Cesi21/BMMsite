"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { RevealCard, RevealGroup } from "@/components/ScrollReveal"

export type ProjectItem = {
  title: string
  text: string
  image?: string
  alt?: string
  meta: string
  result: string
  credit?: string
  creditUrl?: string
  visual?: string[]
}

type ProjectGridProps = {
  title: string
  sampleLabel: string
  resultLabel: string
  items: ProjectItem[]
  accent?: string
}

export default function ProjectGrid({ title, sampleLabel, resultLabel, items, accent }: ProjectGridProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="content-section projects-section surface-panel rounded-3xl border p-6 md:p-8"
      style={accent ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
    >
      <div className="section-heading flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <span className="section-signal" aria-hidden />
      </div>
      <RevealGroup className="mt-6 grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <RevealCard key={item.title} className="project-item surface-subtle group relative flex overflow-hidden rounded-2xl border">
            <div className="flex min-h-full w-full flex-col">
              <div className="project-media relative overflow-hidden">
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="project-image object-cover"
                    />
                    <div className="project-image-shade" aria-hidden />
                  </>
                ) : (
                  <div className="project-workflow-visual" aria-hidden>
                    {item.visual?.map((step, stepIndex) => (
                      <div key={step} className="project-workflow-unit">
                        <span className="project-workflow-node">{step}</span>
                        {stepIndex < (item.visual?.length ?? 0) - 1 ? <span className="project-workflow-connector" /> : null}
                      </div>
                    ))}
                  </div>
                )}
                <span className="project-sample-label absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
                  {sampleLabel}
                </span>
                {item.credit && item.creditUrl ? (
                  <a
                    href={item.creditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-credit absolute bottom-3 right-3 rounded-full px-2.5 py-1 text-[9px] font-medium"
                  >
                    {item.credit}
                  </a>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="project-meta text-[10px] font-semibold uppercase tracking-[0.14em]">{item.meta}</span>
                  <span className="project-index soft-text text-xs font-semibold tracking-[0.16em]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="muted-text mt-3 text-sm leading-relaxed">{item.text}</p>
                <div className="project-result mt-5 border-t pt-4">
                  <span className="soft-text block text-[9px] font-semibold uppercase tracking-[0.16em]">{resultLabel}</span>
                  <p className="mt-1 text-sm font-semibold leading-snug">{item.result}</p>
                </div>
              </div>
            </div>
            <span className="project-glow" aria-hidden />
          </RevealCard>
        ))}
      </RevealGroup>
    </motion.section>
  )
}
