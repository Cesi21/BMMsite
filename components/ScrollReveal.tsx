"use client"

import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.09,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.985,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const viewport = { once: true, amount: 0.16 } as const

export function RevealGroup(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={groupVariants}
    />
  )
}

export function RevealList(props: HTMLMotionProps<"ol">) {
  return (
    <motion.ol
      {...props}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={groupVariants}
    />
  )
}

export function RevealCard(props: HTMLMotionProps<"article">) {
  return <motion.article {...props} data-scroll-reveal-item variants={itemVariants} />
}

export function RevealItem(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} data-scroll-reveal-item variants={itemVariants} />
}

export function RevealListItem(props: HTMLMotionProps<"li">) {
  return <motion.li {...props} data-scroll-reveal-item variants={itemVariants} />
}

export function RevealSectionItem(props: HTMLMotionProps<"section">) {
  return <motion.section {...props} data-scroll-reveal-item variants={itemVariants} />
}
