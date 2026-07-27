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
      className="surface-panel rounded-3xl border p-6 md:p-8"
      style={accent ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="surface-subtle rounded-xl border p-4">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="muted-text mt-2 text-sm">{item.text}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
