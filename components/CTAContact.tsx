"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type CTAContactProps = {
  title: string
  text: string
  button: string
  href: string
}

export default function CTAContact({ title, text, button, href }: CTAContactProps) {
  const external = href.startsWith("mailto:") || href.startsWith("http")

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="surface-panel rounded-3xl border p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="muted-text mt-3 max-w-2xl">{text}</p>
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="header-nav-link mt-5 inline-flex rounded-xl border px-5 py-2.5 text-sm font-medium transition"
      >
        {button}
      </Link>
    </motion.section>
  )
}
