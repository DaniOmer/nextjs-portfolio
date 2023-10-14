"use client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <div className="container w-11/12 mx-auto">
        <NavBar />
        <HeroSection />
        <Services />
      </div>
    </main>
  );
}
