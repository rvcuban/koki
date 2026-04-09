import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />

        {/* Section anchors for smooth scrolling */}
        <section id="how-it-works" className="px-4 py-24">
          {/* HowItWorks section — coming soon */}
        </section>

        <section id="features" className="px-4 py-24">
          {/* Features section — coming soon */}
        </section>

        {/* Testimonials + Client logos — coming soon */}

        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
