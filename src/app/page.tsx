import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />

        {/* Section anchors for smooth scrolling */}
        <section id="how-it-works" className="min-h-screen px-4 py-24">
          {/* How It Works section — coming soon */}
        </section>

        <section id="features" className="min-h-screen px-4 py-24">
          {/* Features section — coming soon */}
        </section>

        <section id="pricing" className="min-h-screen px-4 py-24">
          {/* Pricing section — coming soon */}
        </section>

        <section id="about" className="min-h-screen px-4 py-24">
          {/* About section — coming soon */}
        </section>
      </main>
    </>
  );
}
