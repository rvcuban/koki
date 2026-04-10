import type { Variants } from "framer-motion"

/* =============================================
   Shared micro-interaction tokens
   ============================================= */

export const springTransition = { type: "spring" as const, stiffness: 300, damping: 20 }
export const buttonHover = { scale: 1.04 }
export const buttonTap = { scale: 0.97 }
export const cardHover = { y: -4, transition: springTransition }
export const iconHover = { scale: 1.15, rotate: 5, transition: springTransition }

/* =============================================
   Entrance animation variants
   ============================================= */

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

// Stagger children container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

// Floating animation (for decorative elements)
export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
}
