"use client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto">
        <NavBar />
        <HeroSection />
      </div>
    </main>
  );
}
