"use client"

import { motion } from "framer-motion"

type Accent = "construction" | "mechanics" | "it"

type Project = {
  title: string
  description: string
}

type ProjectGridProps = {
  title: string
  projects: Project[]
  accent: Accent
}

const accentStyles: Record<Accent, { edge: string; glow: string }> = {
  construction: {
    edge: "group-hover:border-[rgba(var(--amber),0.45)]",
    glow: "from-[rgba(var(--amber),0.22)]"
  },
  mechanics: {
    edge: "group-hover:border-[rgba(var(--blue),0.45)]",
    glow: "from-[rgba(var(--blue),0.22)]"
  },
  it: {
    edge: "group-hover:border-[rgba(var(--green),0.45)]",
    glow: "from-[rgba(var(--green),0.22)]"
  }
}

export default function ProjectGrid({ title, projects, accent }: ProjectGridProps) {
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

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className={`group overflow-hidden rounded-2xl border border-[rgba(var(--border),0.14)] bg-[rgb(var(--card))] transition-colors ${tone.edge}`}
          >
            <div className={`h-44 bg-gradient-to-br ${tone.glow} via-[rgba(255,255,255,0.05)] to-transparent`} />
            <div className="p-5">
              <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm text-white/70">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
