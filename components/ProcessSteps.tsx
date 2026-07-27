"use client"

import { motion } from "framer-motion"

type Accent = "construction" | "mechanics" | "it"

type Step = {
  title: string
  description: string
}

type ProcessStepsProps = {
  title: string
  steps: Step[]
  accent: Accent
}

const accentDot: Record<Accent, string> = {
  construction: "bg-[rgb(var(--amber))]",
  mechanics: "bg-[rgb(var(--blue))]",
  it: "bg-[rgb(var(--green))]"
}

export default function ProcessSteps({ title, steps, accent }: ProcessStepsProps) {
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

      <div className="relative mt-8 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
        <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-[rgba(var(--border),0.18)] md:block" />

        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="relative rounded-2xl border border-[rgba(var(--border),0.12)] bg-[rgb(var(--card))] p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${accentDot[accent]}`} />
              <span className="text-sm font-medium text-white/65">0{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm text-white/70">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
