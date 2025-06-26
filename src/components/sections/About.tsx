import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { FancyButton } from "@/components/ui/FancyButton";

export default function About() {
  const handleSayHello = () => {
    window.location.href = "mailto:elise.philipsson@gmail.com";
  };

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
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

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                scale: { duration: 0.8, ease: "easeOut" },
                rotateY: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center md:justify-center"
            >
              <motion.div
                className="relative w-56 h-56 md:w-80 md:h-80"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="absolute -inset-6 bg-gradient-to-br from-[#D19EA3]/20 to-transparent rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Main image container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl"
                  initial={{ boxShadow: "0 0 0 rgba(209, 158, 163, 0)" }}
                  whileInView={{
                    boxShadow: "0 0 30px rgba(209, 158, 163, 0.3)",
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/EliseLinkedInFotoCrop.webp"
                    alt="Image of Elise Philipsson"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 224px, 320px"
                    quality={85}
                  />
                </motion.div>

                {/* Subtle shadow */}
                <motion.div
                  className="absolute inset-0 rounded-full shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-lobster text-4xl md:text-6xl font-bold text-[#D19EA3] mb-8 leading-none drop-shadow-lg">
                About me
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-roboto">
                <p>
                  Stockholm-based frontend developer focused on building
                  user-friendly and visually appealing web applications. With
                  experience working with modern JavaScript frameworks,
                  responsive design, accessibility, and AI tools, I&apos;m eager
                  to take on new challenges and put my skills to good work.
                </p>
                <p>
                  My journey in web development has given me an understanding of
                  of both technical challenges and user experience, making me
                  equipped to create solutions that not only look good but also
                  work well. I am a team player, I have high work ethics, and
                  approach tasks with a positive mindset.
                </p>
                <p>Let&apos;s grab a coffee!</p>
              </div>

              <FancyButton
                onClick={handleSayHello}
                icon={<FaEnvelope size={18} />}
                size="small"
              >
                SAY HELLO
              </FancyButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
