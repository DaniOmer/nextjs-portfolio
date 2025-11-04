"use client";

import Header from "@/components/layouts/header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Services from "@/components/Services/Services";
import Works from "@/components/Works/Works";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background scroll-smooth">
      <div>
        <Header />
        <HeroSection />
        <Services />
        <Works />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
