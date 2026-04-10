"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Gift, Calendar, Bell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  float,
} from "@/lib/animations";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ============================================================
   Floating Emoji Decorations
   ============================================================ */

const floatingItems = [
  { emoji: "🎂", size: "text-4xl", top: "10%", left: "5%", delay: 0, duration: 5 },
  { emoji: "🎉", size: "text-3xl", top: "20%", right: "8%", delay: 1, duration: 4.5 },
  { emoji: "🎁", size: "text-3xl", bottom: "30%", left: "8%", delay: 0.5, duration: 5.5 },
  { emoji: "🎈", size: "text-4xl", bottom: "20%", right: "5%", delay: 1.5, duration: 4 },
];

function FloatingDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-5 hidden md:block">
      {floatingItems.map((item, i) => (
        <motion.span
          key={i}
          className={cn("absolute select-none opacity-20", item.size)}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          animate={{
            y: [-12, 12, -12],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}

/* ============================================================
   Animated Gradient Blobs Background
   ============================================================ */

function AnimatedGradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Coral blob — top-left */}
      <motion.div
        className="absolute -top-1/3 -left-1/4 h-[700px] w-[700px] rounded-full bg-coral-200/25 blur-[120px]"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />
      {/* Teal blob — bottom-right */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-teal-200/20 blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ willChange: "transform" }}
      />
      {/* Vanilla blob — center */}
      <motion.div
        className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-vanilla-200/15 blur-[100px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

/* ============================================================
   Dashboard Mockup — Upcoming Birthdays Card
   ============================================================ */

const upcomingBirthdays = [
  { name: "Sarah Johnson", date: "Apr 12", cake: "Red Velvet", avatar: "SJ" },
  { name: "Marcus Chen", date: "Apr 15", cake: "Chocolate", avatar: "MC" },
  { name: "Lisa Park", date: "Apr 19", cake: "Carrot Cake", avatar: "LP" },
];

function BirthdayCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-border/60 bg-card p-4 shadow-warm"
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="flex size-7 items-center justify-center rounded-lg bg-coral-100">
          <Calendar className="size-3.5 text-coral-600" />
        </div>
        <span className="text-sm font-semibold text-foreground">Upcoming Birthdays</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {upcomingBirthdays.map((person, i) => (
          <motion.div
            key={person.name}
            className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coral-400 to-coral-500 text-[10px] font-bold text-white">
              {person.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-foreground">{person.name}</p>
              <p className="text-[10px] text-muted-foreground">{person.cake}</p>
            </div>
            <span className="shrink-0 rounded-md bg-coral-100 px-2 py-0.5 text-[10px] font-medium text-coral-700">
              {person.date}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ============================================================
   Dashboard Mockup — Month Stats Card
   ============================================================ */

function MonthStatsCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-border/60 bg-card p-4 shadow-warm"
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="flex size-7 items-center justify-center rounded-lg bg-teal-100">
          <Gift className="size-3.5 text-teal-600" />
        </div>
        <span className="text-sm font-semibold text-foreground">This Month</span>
      </div>
      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-foreground">12</span>
        <span className="text-xs text-muted-foreground">celebrations</span>
      </div>
      {/* Progress bar */}
      <div className="mb-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-500"
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <p className="text-[10px] text-muted-foreground">9 of 12 delivered</p>

      {/* Mini stat chips */}
      <div className="mt-3 flex gap-2">
        <div className="flex-1 rounded-lg bg-muted/50 px-2.5 py-1.5 text-center">
          <p className="text-lg font-bold text-foreground">98%</p>
          <p className="text-[10px] text-muted-foreground">On time</p>
        </div>
        <div className="flex-1 rounded-lg bg-muted/50 px-2.5 py-1.5 text-center">
          <p className="text-lg font-bold text-foreground">4.9</p>
          <p className="text-[10px] text-muted-foreground">Avg rating</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   Dashboard Mockup — Notification Toast
   ============================================================ */

function NotificationToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
      className="rounded-xl border border-border/60 bg-card p-3 shadow-warm"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-vanilla-200">
          <Bell className="size-4 text-vanilla-700" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-foreground">
            🎂 Sarah&apos;s birthday cake delivered!
          </p>
          <p className="text-[10px] text-muted-foreground">Just now · Red Velvet cake</p>
        </div>
        <span className="flex size-2 shrink-0">
          <span className="absolute inline-flex size-2 animate-ping rounded-full bg-teal-400/60" />
          <span className="relative inline-flex size-2 rounded-full bg-teal-500" />
        </span>
      </div>
    </motion.div>
  );
}

/* ============================================================
   Tilt Container — Mouse-tracked 3D perspective
   ============================================================ */

function TiltContainer({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   Dashboard Mockup — Assembled
   ============================================================ */

function DashboardMockup() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative mx-auto w-full max-w-5xl"
    >
      {/* 3D perspective container */}
      <motion.div
        variants={scaleIn}
        className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-card/90 via-card/70 to-muted/50 p-4 shadow-2xl backdrop-blur-sm sm:p-6"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1200px",
        }}
      >
        <motion.div
          initial={{ rotateX: 5, rotateY: -3 }}
          animate={{ rotateX: 2, rotateY: -1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Dashboard header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-coral-400 to-coral-500">
                <span className="text-sm">🎂</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Koki Dashboard</p>
                <p className="text-[10px] text-muted-foreground">Demo Company · April 2026</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-coral-300" />
              <div className="size-2.5 rounded-full bg-vanilla-400" />
              <div className="size-2.5 rounded-full bg-teal-300" />
            </div>
          </div>

          {/* Dashboard cards grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            <BirthdayCard />
            <div className="flex flex-col gap-3">
              <MonthStatsCard />
              <NotificationToast />
            </div>
          </div>
        </motion.div>

        {/* Decorative grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(to_right,transparent_0%,transparent_49.5%,var(--border)_49.5%,var(--border)_50.5%,transparent_50.5%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49.5%,var(--border)_49.5%,var(--border)_50.5%,transparent_50.5%,transparent_100%)] bg-[size:60px_60px] opacity-[0.02]"
        />
      </motion.div>

      {/* Glow effect under dashboard */}
      <div
        aria-hidden="true"
        className="absolute -bottom-6 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full bg-coral-400/10 blur-2xl"
      />
    </motion.div>
  );
}

/* ============================================================
   Scroll Indicator
   ============================================================ */

function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div style={{ opacity }} className="mt-12 mb-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-muted-foreground/40" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   Main Hero Component
   ============================================================ */

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      {/* Animated gradient blobs */}
      <AnimatedGradientBackground />

      {/* Floating decorative emojis */}
      <FloatingDecorations />

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge — slide in from top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Launching in Barcelona — Early access open
        </motion.div>

        {/* Headline — staggered word entrance */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {["Make", "Every", "Birthday"].map((word, i) => (
            <motion.span
              key={word}
              variants={fadeInUp}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br className="sm:hidden" />
          <motion.span
            variants={fadeInUp}
            className="inline-block bg-gradient-to-r from-coral-500 via-coral-400 to-coral-300 bg-clip-text text-transparent"
          >
            Unforgettable
          </motion.span>
        </motion.h1>

        {/* Subheadline — fade in with delay */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Koki handles the whole celebration — from tracking birthdays to
          delivering the perfect cake. Your team feels valued, and you never
          miss a date again.
        </motion.p>

        {/* CTAs — scale in with delay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary CTA with pulse glow */}
          <motion.a
            href="#pricing"
            onClick={(e) => smoothScroll(e, "#pricing")}
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative h-12 gap-2 overflow-hidden px-8 text-base"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Pulse glow */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 animate-pulse rounded-lg bg-primary/20 blur-xl"
            />
            Get Early Access
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Secondary CTA with arrow animation */}
          <motion.a
            href="#how-it-works"
            onClick={(e) => smoothScroll(e, "#how-it-works")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group h-12 gap-2 px-8 text-base"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="size-4 transition-transform group-hover:scale-110" />
            See How it Works
            <ArrowRight className="size-3 -ml-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="mx-auto mt-16 w-full max-w-5xl"
      >
        <TiltContainer>
          <DashboardMockup />
        </TiltContainer>
      </motion.div>

      {/* Scroll indicator — fades out on scroll */}
      <ScrollIndicator />
    </section>
  );
}
