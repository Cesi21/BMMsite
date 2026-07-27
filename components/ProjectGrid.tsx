"use client"

import { motion } from "framer-motion"

type ProjectGridProps = {
  title: string
  items: { title: string; text: string }[]
  accent?: string
}

export default function ProjectGrid({ title, items, accent }: ProjectGridProps) {
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
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.text}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
