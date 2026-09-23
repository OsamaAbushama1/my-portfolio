"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  FaBrain,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa6";

type JourneyIcon = "education" | "code" | "ai" | "award";

type JourneyPosition = {
  id: string;
  title: string;
  period: string;
  type: string;
  icon: JourneyIcon;
  description: string;
  skills: string[];
  isExpanded?: boolean;
};

type JourneyGroup = {
  id: string;
  name: string;
  isCurrent?: boolean;
  positions: JourneyPosition[];
};

const iconMap = {
  education: FaGraduationCap,
  code: FaCode,
  ai: FaBrain,
  award: FaTrophy,
};

const journey: JourneyGroup[] = [
  {
    id: "eru",
    name: "Egyptian Russian University",
    positions: [
      {
        id: "eru-ai",
        title: "Bachelor of Artificial Intelligence",
        period: "2020 — 2024",
        type: "Education",
        icon: "education",
        description: "Studied Artificial Intelligence with a focus on Data Science foundations, statistics, programming, and applied machine learning concepts.",
        skills: ["Artificial Intelligence", "Data Science", "Python", "Statistics"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "iti",
    name: "Information Technology Institute",
    positions: [
      {
        id: "iti-frontend",
        title: "Front-End Development Intern",
        period: "Aug 2023",
        type: "Internship",
        icon: "code",
        description: "Developed 5 responsive portfolio pages using HTML, CSS, and Bootstrap, while strengthening JavaScript, React.js, and Angular for interactive interfaces.",
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Angular"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "nti",
    name: "National Telecommunication Institute",
    positions: [
      {
        id: "nti-ml",
        title: "Machine Learning Intern",
        period: "Oct 2023 — Dec 2023",
        type: "Internship",
        icon: "ai",
        description: "Built predictive models with Python, NumPy, and Pandas, reaching 90% accuracy through practical data preparation, analysis, and model evaluation.",
        skills: ["Machine Learning", "Python", "NumPy", "Pandas", "Data Analysis"],
      },
    ],
  },
  {
    id: "innovators",
    name: "Innovators and Talents Fund",
    positions: [
      {
        id: "innovators-third-place",
        title: "Third Place Award",
        period: "Achievement",
        type: "Competition",
        icon: "award",
        description: "Achieved third place in the Fund for the Care of Innovators and Talents, recognizing practical problem solving and project execution.",
        skills: ["Problem Solving", "Presentation", "Innovation"],
      },
    ],
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const PositionItem = ({ position }: { position: JourneyPosition }) => {
  const [isOpen, setIsOpen] = useState(Boolean(position.isExpanded));
  const Icon = iconMap[position.icon];

  return (
    <div className="relative">
      <button
        type="button"
        className="group/experience block w-full select-none text-left"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <div className="relative z-[1] mb-1 flex items-center gap-3 bg-transparent">
          <span
            className="flex size-6 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-500 transition-colors group-hover/experience:border-[#ff4d00]/40 group-hover/experience:text-[#ff4d00] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
            aria-hidden="true"
          >
            <Icon className="size-3" />
          </span>
          <h4
            className="flex-1 text-balance text-base font-medium leading-snug text-zinc-950 transition-colors group-hover/experience:text-[#ff4d00] dark:text-white"
            style={{ fontFamily: '"whyte","whyte Fallback"' }}
          >
            {position.title}
          </h4>
          <span className="shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden="true">
            {isOpen ? <FaChevronUp className="size-4" /> : <FaChevronDown className="size-4" />}
          </span>
        </div>

        <div className="flex items-center gap-2 pl-9 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          <span>{position.type}</span>
          <span className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
          <span>{position.period}</span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-2 pl-9 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              {position.description}
            </p>

            <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
              {position.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-100/70 px-2 py-0.5 font-mono text-xs leading-5 text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JourneyCompany = ({ group }: { group: JourneyGroup }) => (
  <motion.article className="space-y-4 py-4" variants={itemVariants}>
    <div className="flex items-center gap-3">
      <span
        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800"
        aria-hidden="true"
      >
        <span className="flex size-2 rounded-full bg-[#ff4d00]" />
      </span>
      <h3
        className="text-lg font-medium leading-snug text-[#ff4d00]"
        style={{ fontFamily: '"whyte","whyte Fallback"' }}
      >
        {group.name}
      </h3>
      {group.isCurrent && (
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex size-3 animate-ping rounded-full bg-[#ff4d00] opacity-40" />
          <span className="relative inline-flex size-2 rounded-full bg-[#ff4d00]" />
          <span className="sr-only">Current</span>
        </span>
      )}
    </div>

    <div className="relative space-y-4 before:absolute before:bottom-9 before:left-3 before:top-3 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
      {group.positions.map((position) => (
        <PositionItem key={position.id} position={position} />
      ))}
    </div>
  </motion.article>
);

const Education: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-grid-pattern relative w-full scroll-mt-20 overflow-hidden px-4 py-12 text-[#171b25] dark:text-white sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-[5%]"
      aria-labelledby="experience-heading"
      role="region"
    >
      <div className="absolute inset-0 bg-[#fffcf3]/80 dark:bg-[#0a0a0a]" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-[90rem]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div className="mb-10 text-center md:mb-16" variants={itemVariants}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff4d00]">
            My Journey
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-4xl font-black leading-none tracking-normal text-black dark:text-white md:text-5xl"
            style={{ fontFamily: '"whyte","whyte Fallback"' }}
          >
            Experience
          </h2>
        </motion.div>

        <motion.div className="w-full" variants={sectionVariants}>
          {journey.map((group) => (
            <JourneyCompany key={group.id} group={group} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(Education);
