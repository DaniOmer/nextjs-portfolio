"use client";

import HeroSection from "@/components/homepage/HeroSection";
import Services from "@/components/homepage/Services";
import Works from "@/components/homepage/Works";
import Contact from "@/components/homepage/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background scroll-smooth">
      <div className="mt-[70px] flex flex-col gap-10 md:gap-20">
        <HeroSection />
        <Services />
        <Works />
        <Contact />
      </div>
    </main>
  );
}
