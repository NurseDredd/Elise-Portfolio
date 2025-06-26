"use client";

import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Footer from "@/components/sections/Footer";
import { VerticalNav } from "@/components/navigation/VerticalNav";
import { Header } from "@/components/navigation/Header";
import BackToTopBtn from "@/components/ui/BackToTopBtn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Footer />
      <VerticalNav />
      <BackToTopBtn />
    </main>
  );
}
