"use client";
import HeroSection from "@/components/Shared/HeroSection";
import AboutSection from "@/components/Shared/AboutSection";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", () => {});
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <section className="h-screen">test</section>
    </>
  );
}
