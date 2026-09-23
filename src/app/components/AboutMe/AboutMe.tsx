"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaFingerprint,
  FaGlobe,
  FaPenNib,
  FaRegHandPeace,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const tools = [
  { name: "React", icon: "/exp/reactjs.png" },
  { name: "Next.js", icon: "/exp/nextjs.png" },
  { name: "TypeScript", icon: "/exp/ts.png" },
  { name: "JavaScript", icon: "/exp/js.webp" },
  { name: "Node.js", icon: "/exp/nodejs.png", imageClass: "scale-[1.75]" },
  { name: "Tailwind CSS", icon: "/exp/tailwind.png" },
  { name: "HTML", icon: "/exp/html.png" },
  { name: "CSS", icon: "/exp/css.png" },
  { name: "GitHub", icon: "/exp/github.png" },
  { name: "Twilio", icon: "/exp/twilio.png" },
  { name: "Git", icon: "/exp/git.webp" },
  { name: "Bootstrap", icon: "/exp/bootstrap.png" },
];

const inlineIconClass =
  "mx-2 inline-flex h-[0.9em] w-[0.9em] translate-y-[0.08em] items-center justify-center text-[#111827] dark:text-white sm:mx-3";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-grid-pattern relative overflow-hidden px-4 py-12 text-[#171b25] dark:text-white sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-[5%]"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-[#fffcf3]/80 dark:bg-[#0a0a0a]" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-[90rem]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff4d00] sm:text-sm">
            Who I Am
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-4xl font-black leading-none tracking-normal text-black dark:text-white md:text-5xl"
            style={{ fontFamily: '"whyte","whyte Fallback"' }}
          >
            About
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-[58rem] text-center text-[clamp(1.2rem,2.35vw,2.75rem)] font-black leading-[1.28] tracking-normal text-[#17202c] dark:text-white"
          variants={itemVariants}
          style={{ fontFamily: '"whyte","whyte Fallback"' }}
        >
          Hi, <span className="text-[#ff4d00]">I am</span>{" "}
          <span className="mx-3 inline-flex h-[1.85em] w-[1.85em] translate-y-[0.34em] items-center justify-center overflow-hidden rounded-full border border-[#ff4d00]/45 bg-white shadow-[0_10px_28px_rgba(255,77,0,0.16)] dark:bg-white sm:mx-4">
            <Image
              src="/Profile_nobg.webp"
              alt="Osama Abushama"
              width={120}
              height={120}
              className="h-full w-full translate-y-[8%] scale-[1.18] object-contain"
              priority={false}
            />
          </span>{" "}
          <span className="text-[#ff4d00]">Osama Abushama</span>
          <FaRegHandPeace className={inlineIconClass} aria-hidden="true" />
          , specializing in Web Design and Frontend Development since{" "}
          <span className="inline-flex translate-y-[-0.08em] items-center rounded-full border border-[#17202c]/70 px-[0.42em] py-[0.08em] text-[0.55em] font-semibold leading-none dark:border-white/60">
            2023
          </span>{" "}
          focused on designing{" "}
          <FaPenNib className={inlineIconClass} aria-hidden="true" />
          and developing modern websites{" "}
          <FaGlobe className={inlineIconClass} aria-hidden="true" />
          digital products, brands{" "}
          <FaFingerprint className={inlineIconClass} aria-hidden="true" />
          and experiences{" "}
          <FaWandMagicSparkles className={inlineIconClass} aria-hidden="true" />.
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-4xl text-center"
          variants={itemVariants}
        >
          <p
            className="text-sm font-black text-[#253044] dark:text-white sm:text-base"
            style={{ fontFamily: '"whyte","whyte Fallback"' }}
          >
            Expertise in Tools
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#9aa4b5] bg-[#fffcf3]/80 shadow-[0_8px_20px_rgba(17,24,39,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#ff4d00]/70 hover:bg-white dark:border-white/50 dark:bg-[#0a0a0a] dark:shadow-none dark:hover:bg-[#fffcf3]/5 sm:h-[4.5rem] sm:w-[4.5rem]"
                title={tool.name}
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={42}
                  height={42}
                  className={`h-8 w-8 object-contain sm:h-9 sm:w-9 ${tool.imageClass ?? ""}`}
                />
              </div>
            ))}


          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(AboutMe);
