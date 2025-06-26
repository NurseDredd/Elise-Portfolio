import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <nav className="space-y-4" aria-label="Main navigation">
                <a
                  href="#about"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
