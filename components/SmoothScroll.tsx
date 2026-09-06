"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { ReactLenis, type LenisRef } from "lenis/react"
import { cancelFrame, frame } from "framer-motion"

type SmoothScrollProps = {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        anchors: true,
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  )
}
