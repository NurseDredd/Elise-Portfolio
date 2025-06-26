"use client";

import { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    let ticking = false;

    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const throttledScroll = handleScroll();
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      className={`fixed z-50 bottom-6 right-6 bg-gray-600 text-white rounded-full shadow-lg p-3 transition-all duration-300 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Tillbaka till topp"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
