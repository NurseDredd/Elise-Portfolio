"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { FaDownload } from "react-icons/fa";
import { FancyButton } from "@/components/ui/FancyButton";

export default function Hero() {
  const ref = useRef(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [enableTyping, setEnableTyping] = useState(false);

  // Typing effect (delayed for performance)
  const phrases = useMemo(
    () => [
      "AI generation",
      "Creative code",
      "Accessibility focused",
      "Also a registered nurse",
    ],
    []
  );

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5; // Parallax speed
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setEnableTyping(true));
    } else {
      setTimeout(() => setEnableTyping(true), 1500);
    }
  }, []);

  useEffect(() => {
    if (!enableTyping) return;

    let currentChar = 0;
    let typing: NodeJS.Timeout;
    let erasing: NodeJS.Timeout;

    const type = () => {
      if (currentChar <= phrases[phraseIndex].length) {
        setText(phrases[phraseIndex].slice(0, currentChar));
        currentChar++;
        typing = setTimeout(type, 80);
      } else {
        setTimeout(() => erase(), 1500);
      }
    };

    const erase = () => {
      if (currentChar >= 0) {
        setText(phrases[phraseIndex].slice(0, currentChar));
        currentChar--;
        erasing = setTimeout(erase, 40);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timeout = setTimeout(type, 1000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(typing);
      clearTimeout(erasing);
    };
  }, [phraseIndex, phrases, enableTyping]);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/cv/Frontend.ElisePhilipsson.CV.pdf";
    link.download = "Elise_Philipsson_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handlePortfolioClick = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden" ref={ref}>
      {/* Background pattern from TechStack */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-repeat opacity-80 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e7c9d0' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          height: "200%",
          top: "-50%",
        }}
      />

      {/* Gradient overlays (optional for visual softness) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/0 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent z-10" />

      {/* ✅ Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 font-roboto tracking-tight animate-slide-in-right hero-h1">
          Hi, I&apos;m Elise
        </h1>

        <h2 className="font-lobster font-bold text-[#D19EA3] hero-h2-responsive hero-title-shadow">
          frontend developer
        </h2>

        <p className="mt-6 text-xl md:text-2xl text-gray-700 hidden md:block animate-fade-in-up-delay-2">
          {text}
          <span className="inline-block w-1 h-1 rounded-full bg-[#D19EA3] ml-1 animate-blink" />
        </p>

        {/* ✅ Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 animate-fade-in-up-delay-3">
          <FancyButton onClick={handlePortfolioClick}>PORTFOLIO</FancyButton>
          <FancyButton
            onClick={handleDownloadCV}
            icon={<FaDownload size={18} />}
            variant="secondary"
          >
            DOWNLOAD RESUMÉ
          </FancyButton>
        </div>
      </div>
    </section>
  );
}
