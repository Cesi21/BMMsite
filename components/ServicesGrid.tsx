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
      className="surface-panel rounded-3xl border p-6 md:p-8"
      style={accent ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="surface-subtle rounded-xl border px-4 py-3">
            {item}
          </article>
        ))}
      </div>
    </motion.section>
  )
}
