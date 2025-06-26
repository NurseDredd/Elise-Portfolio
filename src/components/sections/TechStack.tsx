"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiJest,
  SiFramer,
  SiOpenai,
} from "react-icons/si";
import { FaRobot, FaTheaterMasks } from "react-icons/fa";
import { BsCursor, BsGrid3X3Gap } from "react-icons/bs";

interface TechCategory {
  name: string;
  items: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      { name: "shadcn/ui", icon: <BsGrid3X3Gap className="text-[#000000]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    ],
  },
  {
    name: "Tools & Platforms",
    items: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-black" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      {
        name: "Playwright",
        icon: <FaTheaterMasks className="text-[#2EAD33]" />,
      },
      { name: "Jest", icon: <SiJest className="text-[#C21325]" /> },
      { name: "GitHub Copilot", icon: <FaRobot className="text-[#2EA043]" /> },
      { name: "Cursor", icon: <BsCursor className="text-[#00A8E8]" /> },
      { name: "ChatGPT", icon: <SiOpenai className="text-[#10A37F]" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-lobster text-4xl md:text-6xl font-bold text-[#39496b] mb-6 leading-none drop-shadow-lg">
              Technologies
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-roboto">
              Technologies and tools I use in my work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-roboto">
                  {category.name}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-200 tech-icon-hover ${
                        techIndex === 0
                          ? "animate-tech-icon"
                          : techIndex === 1
                          ? "animate-tech-icon-delay-1"
                          : techIndex === 2
                          ? "animate-tech-icon-delay-2"
                          : techIndex === 3
                          ? "animate-tech-icon-delay-3"
                          : techIndex === 4
                          ? "animate-tech-icon-delay-4"
                          : techIndex === 5
                          ? "animate-tech-icon-delay-5"
                          : techIndex === 6
                          ? "animate-tech-icon-delay-6"
                          : techIndex === 7
                          ? "animate-tech-icon-delay-7"
                          : "animate-tech-icon-delay-8"
                      }`}
                    >
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <span className="font-medium text-gray-900 text-sm text-center font-roboto">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
