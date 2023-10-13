import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
    </main>
  );
}
