"use client"

import { motion } from "framer-motion"
import { RevealCard, RevealGroup } from "@/components/ScrollReveal"

type ServicesGridProps = {
  title: string
  items: string[]
  accent?: string
}

export default function ServicesGrid({ title, items, accent }: ServicesGridProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="content-section services-section surface-panel h-full rounded-3xl border p-6 md:p-8"
      style={accent ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
    >
      <div className="section-heading flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <span className="section-signal" aria-hidden />
      </div>
      <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <RevealCard key={item} className="service-item surface-subtle group flex items-center gap-3 rounded-2xl border px-4 py-4">
            <span className="service-dot" aria-hidden />
            <span>{item}</span>
            <span className="soft-text ml-auto text-[10px] font-semibold tracking-[0.14em]">{String(index + 1).padStart(2, "0")}</span>
          </RevealCard>
        ))}
      </RevealGroup>
    </motion.section>
  )
}
