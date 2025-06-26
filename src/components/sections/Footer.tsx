"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/nursedredd",
      icon: <FaGithub className="text-xl" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elise-philipsson/",
      icon: <FaLinkedin className="text-xl" />,
    },
    {
      name: "Email",
      url: "mailto:elise.philipsson@gmail.com",
      icon: <SiGmail className="text-xl" />,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-bold text-[#D19EA3] mb-4">
                Elise Philipsson
              </h3>
              <p className="text-gray-300 font-roboto leading-relaxed">
                Stockholm-based frontend developer passionate about creating
                beautiful, accessible, and user-friendly web experiences.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-xl font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 font-roboto">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-[#D19EA3] transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-[#D19EA3] transition-colors duration-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-300 hover:text-[#D19EA3] transition-colors duration-200"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="/cv/Frontend.ElisePhilipsson.CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#D19EA3] transition-colors duration-200"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-xl font-semibold mb-4 text-white">
                Get in Touch
              </h4>
              <div className="space-y-3 font-roboto">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaEnvelope className="text-[#D19EA3]" />
                  <a
                    href="mailto:elise.philipsson@gmail.com"
                    className="text-gray-300 hover:text-[#D19EA3] transition-colors duration-200"
                  >
                    elise.philipsson@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-4 h-4 bg-[#D19EA3] rounded-full" />
                  <span className="text-gray-300">Stockholm, Sweden</span>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-white">
                  Follow Me
                </h5>
                <div className="flex justify-center md:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700 hover:bg-[#D19EA3] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg social-icon-animation"
                      style={{
                        animationDelay: `${0.3 + index * 0.1}s`,
                      }}
                      aria-label={`Visit Elise Philipsson's ${social.name} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8" />

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center"
          >
            <p className="text-gray-400 font-roboto">
              © {currentYear} Elise Philipsson. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 font-roboto">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>in Stockholm</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
