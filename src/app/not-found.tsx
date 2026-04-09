import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="text-7xl" role="img" aria-label="Cake">
        🎂
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        This page got eaten
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Looks like someone celebrated a little too hard. The page you&apos;re
        looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-8")}
      >
        Back to Home
      </Link>
    </div>
  );
}
