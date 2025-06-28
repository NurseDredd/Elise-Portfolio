"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  code?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This fully responsive portfolio website is built with Next.js, TypeScript, and Tailwind CSS. I used the project as an opportunity to experiment with features like parallax effects and animations.",
    image: "/projects/portfolio.webp",
    link: "https://elise-portfolio-jet.vercel.app/",
    code: "https://github.com/nursedredd/elise-portfolio",
  },
  {
    title: "Family Daycare Website",
    description:
      "Designed and built a live website for Ramona's family daycare — my first professional project. Built with Next.js, TypeScript, and Tailwind CSS. Fully responsive, accessibility-compliant, and SEO-optimized.",
    image: "/projects/ramonasfamiljedaghem.webp",
    link: "https://www.ramonasfamiljedaghem.se/",
    code: "https://github.com/nursedredd/ramonas-familjedaghem-v-2",
  },
  {
    title: "Figma Webshop Prototype",
    description:
      "A Figma prototype of a fictional webshop, created as part of a school project. The focus was on component-based design, variables, layout structure, and thoughtful choices in typography and color.",
    image: "/projects/figmaprototype (1).webp",
    link: "https://www.figma.com/design/Muv5suySuDCyPDNm0OQ2Ky/ElisePhilipsson-Grafik-FEND23?node-id=0-1&t=T61ch83cXqy6i65C-1",
  },
  {
    title: "Momento - Productivity App",
    description:
      "A collaborative school project - A productivity tool featuring user authentication, calendar, to-do list, Pomodoro-style timer, and motivational quotes fetched from an external API. Built using vanilla JavaScript and CSS. Team: Danno Tharmarajah & Minna Nordlund.",
    image: "/projects/momento.webp",
    link: "https://dieseldanno.github.io/momento/",
    code: "https://github.com/dieseldanno/momento",
  },
  {
    title: "CashNinjas E-wallet",
    description:
      "School project - CashNinjas is a web application that allows users to manage their debit cards. It features three theme options and is built with Vite, React, Redux Toolkit, and CSS Modules.",
    image: "/projects/cashninjas.webp",
    link: "https://e-wallet-blond.vercel.app/",
    code: "https://github.com/NurseDredd/E-Wallet",
  },
  {
    title: "Pokemon Battle Arena",
    description:
      "Interactive web game created as a school project to explore game mechanics and external API integration. Uses the Pokémon API to fetch real-time character data. Built with vanilla JavaScript and CSS and looks best on bigger screens.",
    image: "/projects/pokemonbattle.webp",
    link: "https://nursedredd.github.io/Pokemon-Battle/",
    code: "https://github.com/nursedredd/Pokemon-Battle",
  },
];

export default function Projects() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.3]);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-repeat opacity-100"
        style={{
          y,
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          height: "200%",
          top: "-50%",
        }}
      />

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-lobster text-4xl md:text-6xl font-bold text-[#39496b] mb-12 text-center leading-none drop-shadow-lg">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-[225px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                      project.title === "Portfolio Website"
                        ? "object-left scale-110"
                        : "object-center"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                </div>
                <div className="p-6 font-roboto flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Enhanced Button Layout */}
                  <div className="flex flex-col gap-3 mt-auto">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full bg-[#39496b] hover:bg-[#2d3748] text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <FaEye className="text-sm" />
                        <span>View Project</span>
                        <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    )}
                    {project.code ? (
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 border border-gray-200"
                      >
                        <FaGithub className="text-sm" />
                        <span>View Code</span>
                        <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    ) : (
                      <div className="h-[44px]"></div> // Spacer to align with other cards
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
