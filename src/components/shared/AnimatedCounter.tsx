"use client"

import { useInView, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) =>
        setDisplayValue(
          decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()
        ),
    })

    return controls.stop
  }, [isInView, target, duration, decimals])

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
