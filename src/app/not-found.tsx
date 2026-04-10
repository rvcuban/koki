"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Floating bouncing cake */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-8xl sm:text-9xl" role="img" aria-label="Tarta">
          🎂
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          ¡Ups! Esta página se la comieron
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 max-w-md text-lg text-muted-foreground"
      >
        Parece que alguien celebró de más. La página que buscás no
        existe — pero la tarta estaba deliciosa.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 flex items-center gap-2 text-sm text-muted-foreground/60"
      >
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🍰
        </motion.span>
        <span>Error 404</span>
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🍰
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          href="/"
          className={cn(buttonVariants({ size: "lg" }), "mt-8")}
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
