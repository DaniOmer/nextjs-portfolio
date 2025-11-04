"use client";

import HeroSection from "@/components/homepage/HeroSection";
import Services from "@/components/Services/Services";
import Works from "@/components/Works/Works";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background scroll-smooth">
      <div className="mt-[70px]">
        <HeroSection />
        <Services />
        <Works />
        <Contact />
      </div>
    </main>
  );
}
