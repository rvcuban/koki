"use client"

import { useInView, useReducedMotion, animate } from "framer-motion"
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
  const shouldReduceMotion = useReducedMotion()

  const formatValue = (v: number) =>
    decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()

  const [displayValue, setDisplayValue] = useState(() =>
    shouldReduceMotion ? formatValue(target) : "0"
  )

  useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      setDisplayValue(formatValue(target))
      return
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut" as const,
      onUpdate: (v) => setDisplayValue(formatValue(v)),
    })

    return controls.stop
  }, [isInView, target, duration, decimals, shouldReduceMotion])

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
