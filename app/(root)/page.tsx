"use client";
import HeroSection from "@/components/Shared/HeroSection";
import AboutSection from "@/components/Shared/AboutSection";
import SkillsSection from "@/components/Shared/SkillsSection";
import Lenis from "lenis";
import { useEffect } from "react";
import WorkSection from "@/components/Shared/WorkSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", () => {});
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <div className="h-[2000px]"></div>
    </main>
  );
}
