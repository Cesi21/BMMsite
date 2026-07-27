"use client"

import { motion } from "framer-motion"

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
      className="rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.55)] p-6 md:p-8"
      style={accent ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white/85">
            {item}
          </article>
        ))}
      </div>
    </motion.section>
  )
}
