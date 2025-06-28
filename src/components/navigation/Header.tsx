import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set initial scroll position
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (headerRef.current) {
        const currentScrollY = window.scrollY;

        // Check if user is actually scrolling (not just navigating back)
        const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
        if (scrollDelta > 5) {
          // Threshold to detect actual scrolling
          isScrollingRef.current = true;
        }

        // Only apply opacity if user is actively scrolling
        if (isScrollingRef.current) {
          const opacity = Math.max(0, 1 - currentScrollY / 300);
          headerRef.current.style.opacity = opacity.toString();
        }

        lastScrollYRef.current = currentScrollY;
      }
    };

    // Add a small delay to reset scrolling state
    const handleScrollWithDelay = () => {
      handleScroll();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    };

    window.addEventListener("scroll", handleScrollWithDelay);
    return () => {
      window.removeEventListener("scroll", handleScrollWithDelay);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Horizontal line with icons */}
          <div
            ref={headerRef}
            className="flex items-center gap-4 header-scroll-fade"
          >
            <div className="w-16 h-[2px] bg-gray-600" />
            <a
              href="mailto:elise.philipsson@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors header-hover animate-header-icon-delay-1"
              aria-label="Send email to Elise Philipsson"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://github.com/NurseDredd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors header-hover animate-header-icon-delay-2"
              aria-label="Visit Elise Philipsson's GitHub profile"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/elise-philipsson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors header-hover animate-header-icon-delay-3"
              aria-label="Visit Elise Philipsson's LinkedIn profile"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Mobile Menu - centered vertically */}
          <div className="flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
