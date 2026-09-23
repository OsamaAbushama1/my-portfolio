"use client";

import React from "react";
import { animate, motion, Variants } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaGaugeHigh,
  FaLaptopCode,
  FaPenNib,
} from "react-icons/fa6";

const services = [
  {
    title: "Frontend Development",
    desc: "Building fast, polished web interfaces using React, Next.js, TypeScript, and Tailwind CSS — from pixel-perfect UI to full responsive layouts.",
    href: "/web-dev",
    Icon: FaLaptopCode,
    className: "xl:col-span-8",
  },
  {
    title: "AI & Data Analysis",
    desc: "Using Python, Pandas, and ML tools to turn raw data into clear insights and smart features.",
    href: "/ai-data",
    Icon: FaGaugeHigh,
    className: "xl:col-span-4",
  },
  {
    title: "Web Design",
    desc: "Clean, modern interfaces with a strong eye for layout, typography, and user flow.",
    href: null,
    Icon: FaPenNib,
    className: "xl:col-span-4",
  },
  {
    title: "SEO & Performance",
    desc: "Optimizing for speed, accessibility, and search engines — clean HTML structure, fast load times, and better rankings.",
    href: null,
    Icon: FaCode,
    className: "xl:col-span-8",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type GlowState = {
  animation?: { stop: () => void };
};

const glowStates = new WeakMap<HTMLElement, GlowState>();

const getGlowAngle = (event: React.PointerEvent<HTMLElement>, rect: DOMRect) => {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    (Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180) /
      Math.PI +
    90
  );
};

const animateBorderGlow = (card: HTMLElement, targetAngle: number) => {
  const state = glowStates.get(card) ?? {};
  const currentAngle = Number.parseFloat(card.style.getPropertyValue("--start")) || 0;
  const delta = ((((targetAngle - currentAngle) % 360) + 540) % 360) - 180;

  state.animation?.stop();
  state.animation = animate(currentAngle, currentAngle + delta, {
    duration: 1.35,
    ease: [0.16, 1, 0.3, 1],
    onUpdate: (value) => {
      card.style.setProperty("--start", String(value));
    },
  });

  glowStates.set(card, state);
};

const Services: React.FC = () => {
  const updateGlow = (event: React.PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (card.classList.contains("has-explore")) {
      document.body.classList.add("is-expertise-hovering");
    }
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
    card.style.setProperty("--active", "1");
    animateBorderGlow(card, getGlowAngle(event, rect));
  };

  const hideGlow = (event: React.PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const state = glowStates.get(card);

    state?.animation?.stop();
    card.style.setProperty("--active", "0");
    if (card.classList.contains("has-explore")) {
      document.body.classList.remove("is-expertise-hovering");
    }
  };

  return (
    <section
      id="expertise"
      className="bg-grid-pattern relative w-full scroll-mt-20 overflow-hidden px-4 py-12 text-[#171b25] dark:text-white sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-[5%]"
      aria-labelledby="services-heading"
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
        <motion.div className="mb-12 text-center sm:mb-16" variants={itemVariants}>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff4d00]">
            What I Offer
          </span>
          <h2
            id="services-heading"
            className="mt-3 text-4xl font-black leading-none tracking-normal text-black dark:text-white md:text-5xl"
            style={{ fontFamily: '"whyte","whyte Fallback"' }}
          >
            Expertise
          </h2>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-6 xl:max-h-[34rem]"
          variants={sectionVariants}
        >
          {services.map(({ title, desc, href, Icon, className }) => {
            const innerContent = (
              <article
                className={`expertise-card-shell relative h-full rounded-[1.25rem] border border-gray-200 p-2 transition duration-300 dark:border-white/10 md:rounded-[1.5rem] md:p-3 ${href ? 'has-explore' : ''}`}
                onPointerEnter={updateGlow}
                onPointerMove={updateGlow}
                onPointerLeave={hideGlow}
                onPointerCancel={hideGlow}
              >
                <div className="expertise-glowing-effect" aria-hidden="true">
                  <div className="expertise-glow" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#fffcf3] p-6 shadow-sm transition duration-300 group-hover:border-[#ff4d00]/50 dark:border-white/10 dark:bg-[#121212] dark:shadow-[0_0_27px_rgba(45,45,45,0.3)] md:p-7">
                  {href && (
                    <span className="expertise-explore-bubble pointer-events-none absolute z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff4d00] text-sm font-black uppercase text-white shadow-[0_18px_38px_rgba(255,77,0,0.28)] md:h-32 md:w-32">
                      Explore
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 text-[#ff4d00] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#ff4d00]/60 dark:border-white/15 dark:bg-[#fffcf3]/5">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {href && (
                      <FaArrowUpRightFromSquare
                        className="h-5 w-5 text-gray-400 transition-colors group-hover:text-[#ff4d00]"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="mt-10 space-y-3">
                    <h3
                      className="text-balance text-xl font-semibold leading-tight tracking-normal text-gray-900 transition-colors group-hover:text-[#ff4d00] dark:text-white md:text-2xl"
                      style={{ fontFamily: '"whyte","whyte Fallback"' }}
                    >
                      {title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400 md:text-base">
                      {desc}
                    </p>
                  </div>
                </div>
              </article>
            );

            return (
              <motion.li
                key={title}
                className={`min-h-[14rem] list-none md:col-span-6 ${className}`}
                variants={itemVariants}
              >
                {href ? (
                  <a href={href} className="expertise-card-link group block h-full">
                    {innerContent}
                  </a>
                ) : (
                  <div className="group block h-full cursor-default">
                    {innerContent}
                  </div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default React.memo(Services);
