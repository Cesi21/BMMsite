"use client"

import { motion } from "framer-motion"
import { RevealList, RevealListItem } from "@/components/ScrollReveal"

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
      className="content-section process-section surface-panel h-full rounded-3xl border p-6 md:p-8"
      style={accent ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
    >
      <div className="section-heading flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <span className="section-signal" aria-hidden />
      </div>
      <RevealList className="process-list relative mt-6 grid gap-3">
        {steps.map((step, idx) => (
          <RevealListItem key={step} className="process-item surface-subtle relative flex items-center gap-4 rounded-2xl border px-4 py-3.5">
            <span className="process-number grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold">{String(idx + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </RevealListItem>
        ))}
      </RevealList>
    </motion.section>
  )
}
