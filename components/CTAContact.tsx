"use client"

import { motion } from "framer-motion"

type CTAContactProps = {
  title: string
  text: string
  button: string
}

export default function CTAContact({ title, text, button }: CTAContactProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.65)] p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 max-w-2xl text-white/75">{text}</p>
      <button type="button" className="mt-5 rounded-xl border border-white/20 bg-[rgba(255,255,255,0.05)] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40">
        {button}
      </button>
    </motion.section>
  )
}
