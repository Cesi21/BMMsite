"use client"

import { motion } from "framer-motion"

type Accent = "construction" | "mechanics" | "it"

type ServicesGridProps = {
  title: string
  services: string[]
  accent: Accent
}

const accentStyles: Record<Accent, { border: string; glow: string }> = {
  construction: {
    border: "border-[rgba(var(--amber),0.35)]",
    glow: "from-[rgba(var(--amber),0.14)]"
  },
  mechanics: {
    border: "border-[rgba(var(--blue),0.35)]",
    glow: "from-[rgba(var(--blue),0.14)]"
  },
  it: {
    border: "border-[rgba(var(--green),0.35)]",
    glow: "from-[rgba(var(--green),0.14)]"
  }
}

export default function ServicesGrid({ title, services, accent }: ServicesGridProps) {
  const tone = accentStyles[accent]

  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -4 }}
            className={`relative overflow-hidden rounded-2xl border border-[rgba(var(--border),0.12)] bg-[rgb(var(--card))] p-5 transition-colors ${tone.border}`}
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.glow} via-transparent to-transparent`} />
            <p className="relative text-base text-white/85">{service}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
