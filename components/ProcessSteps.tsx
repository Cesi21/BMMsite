"use client"

import { motion } from "framer-motion"

type ProcessStepsProps = {
  title: string
  steps: string[]
  accent?: string
}

export default function ProcessSteps({ title, steps, accent }: ProcessStepsProps) {
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
      <ol className="mt-4 grid gap-3 md:grid-cols-2">
        {steps.map((step, idx) => (
          <li key={step} className="surface-subtle rounded-xl border px-4 py-3">
            <span className="soft-text mr-2">{String(idx + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
    </motion.section>
  )
}
