import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 300);
        headerRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
