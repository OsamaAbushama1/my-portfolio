"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroHeader from "./HeroHeader";

const WORDS = ["DESIGNER", "DEVELOPER"];

const partnerLogos = [
  { name: "Dr. Brand", icon: "/partner/Dr-Brand.png", width: 100, height: 100 },
  { name: "Sara", icon: "/partner/sara.jpeg", width: 690, height: 673 },
  { name: "Saro", icon: "/partner/saro.webp", width: 571, height: 233 },
  { name: "Zayan", icon: "/partner/zayan.webp", width: 500, height: 500 },
  { name: "Mandi Alwafa", icon: "/partner/mandialwafa.webp", width: 500, height: 500 },
];

const marqueePartners = Array.from({ length: 12 }, (_, index) => {
  const partner = partnerLogos[index % partnerLogos.length];
  return { ...partner, key: `${partner.name}-${index}` };
});

const DottedHeroArrow = ({ className = "" }: { className?: string }) => (
  <Image
    src="/Vector.svg"
    alt=""
    width={456}
    height={205}
    className={className}
    aria-hidden="true"
  />
);

const MorphingText: React.FC<{
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}> = ({ texts, morphTime = 1.5, cooldownTime = 3, className = "" }) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let textIndex = 0;
    let time = new Date();
    let currentMorphTime = 0;
    let currentCooldownTime = cooldownTime;

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
      text1Ref.current.style.opacity = "1";
      text1Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "0";
      text2Ref.current.style.filter = "";
    }

    let animationFrameId: number;

    const animate = () => {
      const now = new Date();
      const dt = (now.getTime() - time.getTime()) / 1000;
      time = now;

      if (currentCooldownTime > 0) {
        currentCooldownTime -= dt;
      } else {
        currentMorphTime += dt;
        let fraction = currentMorphTime / morphTime;

        if (fraction > 1) {
          currentCooldownTime = cooldownTime;
          currentMorphTime = 0;
          fraction = 0;
          textIndex++;

          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
            text1Ref.current.style.opacity = "1";
            text1Ref.current.style.filter = "";
            text2Ref.current.style.opacity = "0";
            text2Ref.current.style.filter = "";
          }
        } else {
          if (text1Ref.current && text2Ref.current) {
            const f2 = fraction;
            text2Ref.current.style.filter = `blur(${Math.min(8 / f2 - 8, 100)}px)`;
            text2Ref.current.style.opacity = `${Math.pow(f2, 0.4) * 100}%`;

            const f1 = 1 - fraction;
            text1Ref.current.style.filter = `blur(${Math.min(8 / f1 - 8, 100)}px)`;
            text1Ref.current.style.opacity = `${Math.pow(f1, 0.4) * 100}%`;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={`relative ${className}`}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex items-center justify-start" style={{ filter: "url(#threshold)" }}>
        <span
          ref={text1Ref}
          className="hero-morph-word absolute inline-block select-none text-left text-[16vw] xs:text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[9vw] xl:text-[11rem] leading-[0.85] font-bold tracking-tighter text-black dark:text-white uppercase"
        />
        <span
          ref={text2Ref}
          className="hero-morph-word absolute inline-block select-none text-left text-[16vw] xs:text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[9vw] xl:text-[11rem] leading-[0.85] font-bold tracking-tighter text-black dark:text-white uppercase"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
};

const ProfileImageReveal: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className = "", style }) => {
  const [reveal, setReveal] = useState({ x: 50, y: 50, active: false });

  const updateReveal = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setReveal({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      active: true,
    });
  };

  return (
    <div
      className={`relative select-none overflow-hidden rounded-full bg-white cursor-pointer ${className}`}
      style={style}
      onPointerEnter={updateReveal}
      onPointerMove={updateReveal}
      onPointerLeave={() => setReveal((current) => ({ ...current, active: false }))}
    >
      <Image
        alt="Osama Abushama"
        width={388}
        height={415}
        sizes="112px"
        draggable="false"
        priority
        className="absolute inset-0 z-10 h-full w-full translate-y-[4%] scale-[0.9] object-contain"
        src="/Profile_nobg.webp"
      />
      <Image
        alt=""
        width={1187}
        height={1203}
        sizes="112px"
        aria-hidden="true"
        draggable="false"
        className="absolute inset-0 z-20 h-full w-full object-contain"
        src="/Aadi - Bat.webp"
        style={{
          clipPath: reveal.active
            ? `circle(38% at ${reveal.x}% ${reveal.y}%)`
            : `circle(0% at ${reveal.x}% ${reveal.y}%)`,
          transition: reveal.active ? "clip-path 90ms ease-out" : "clip-path 220ms ease",
        }}
      />
    </div>
  );
};

const Hero: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).hasPreloaderFinished) {
        setPreloaderDone(true);
      } else {
        const handlePreloader = () => setPreloaderDone(true);
        window.addEventListener("preloaderFinished", handlePreloader);
        return () => window.removeEventListener("preloaderFinished", handlePreloader);
      }
    }
  }, []);

  return (
    <div className="bg-grid-pattern dark:bg-[#0a0a0a] text-black dark:text-white antialiased overflow-x-hidden">

      {/* Noise texture overlay - light mode only */}
      <div
        className="fixed inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply dark:hidden -z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Top orange progress bar */}
      <div className="fixed inset-x-0 top-0 z-[9999] h-0.5 origin-left bg-gradient-to-r from-[#ff8c42] via-[#ff6a00] to-[#ff4d00]" style={{ transform: "scaleX(1)" }} />

      {/* ─── NAVBAR ─── */}
      <HeroHeader />

      {/* ─── HERO SECTION ─── */}
      <section id="home" className="relative w-full min-h-[92svh] max-[639px]:min-h-[620px] max-[360px]:min-h-[600px] overflow-hidden flex flex-col justify-start sm:justify-center px-4 sm:px-8 md:px-12 lg:px-[5%] pt-20 sm:pt-28 md:pt-16 lg:pt-32 pb-8 sm:pb-2 md:pb-2">
        <div className="absolute inset-0 bg-[#fffcf3]/80 dark:bg-[#0a0a0a]" aria-hidden="true" />
        <h1 className="sr-only">Portfolio Hero Section</h1>

        {/* Project milestone badge */}
        <div
          className="absolute top-[5.25rem] right-2 z-20 h-[108px] w-[108px] rotate-[6deg] max-[420px]:h-[96px] max-[420px]:w-[96px] max-[360px]:h-[86px] max-[360px]:w-[86px] sm:top-28 sm:right-12 sm:h-[154px] sm:w-[154px] md:top-32 md:right-16 md:h-[178px] md:w-[178px] lg:right-36 xl:top-[10.25rem] xl:right-[12rem] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-[3deg] motion-safe:hover:scale-[1.04]"
          role="img"
          aria-label="20 plus projects completed since 2023. Excellence in delivery."
        >
          <div className="relative h-full w-full">
            <svg
              viewBox="0 0 200 200"
              className="h-full w-full"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <filter id="badge-paper-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#111827" floodOpacity="0.16" />
                  <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.95" />
                </filter>
                <path id="badge-text-path-1" d="M 36,76 A 74,74 0 0,1 164,76" />
                <path id="badge-text-path-2" d="M 38,132 A 76,76 0 0,0 162,132" />
              </defs>
              <path
                d="M 100.00 2.00 L 113.45 15.06 L 130.28 6.80 L 139.04 23.37 L 157.60 20.72 L 160.81 39.19 L 179.28 42.40 L 176.63 60.96 L 193.20 69.72 L 184.94 86.55 L 198.00 100.00 L 184.94 113.45 L 193.20 130.28 L 176.63 139.04 L 179.28 157.60 L 160.81 160.81 L 157.60 179.28 L 139.04 176.63 L 130.28 193.20 L 113.45 184.94 L 100.00 198.00 L 86.55 184.94 L 69.72 193.20 L 60.96 176.63 L 42.40 179.28 L 39.19 160.81 L 20.72 157.60 L 23.37 139.04 L 6.80 130.28 L 15.06 113.45 L 2.00 100.00 L 15.06 86.55 L 6.80 69.72 L 23.37 60.96 L 20.72 42.40 L 39.19 39.19 L 42.40 20.72 L 60.96 23.37 L 69.72 6.80 L 86.55 15.06 Z"
                fill="#fffcf3"
                stroke="#e8e3d8"
                strokeWidth="1.5"
                filter="url(#badge-paper-shadow)"
                className="dark:fill-[#111111] dark:stroke-white/10"
              />
              <circle
                cx="100"
                cy="100"
                r="73"
                fill="none"
                stroke="#ded8cc"
                strokeWidth="0.75"
                strokeDasharray="2.5 4.5"
                className="opacity-60 dark:stroke-white/15"
              />

              <text
                fontSize="12.5"
                fontWeight="900"
                letterSpacing="2.55"
                className="hidden font-inter uppercase sm:block"
              >
                <textPath href="#badge-text-path-1" startOffset="50%" textAnchor="middle">
                  <tspan fill="#ff4d00">20+</tspan>
                  <tspan dx="4" className="fill-[#141414] dark:fill-white">PROJECTS</tspan>
                </textPath>
              </text>
              <text
                fontSize="7.7"
                fontWeight="800"
                fill="#66645f"
                letterSpacing="1.55"
                className="hidden font-inter uppercase dark:fill-gray-400 sm:block"
              >
                <textPath href="#badge-text-path-2" startOffset="50%" textAnchor="middle">EXCELLENCE IN DELIVERY</textPath>
              </text>
              <text
                x="100"
                y="43"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="900"
                letterSpacing="1.45"
                className="hidden font-inter uppercase"
              >
                <tspan fill="#ff4d00">20+</tspan>
                <tspan dx="4" className="fill-[#141414] dark:fill-white">PROJECTS</tspan>
              </text>
            </svg>
            <div className="absolute inset-0 flex -translate-y-2 flex-col items-center justify-center sm:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 fill-[#ff4d00] text-[#ff4d00] sm:h-8 sm:w-8 md:h-9 md:w-9" aria-hidden="true">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l4.913 1.51a.528.528 0 0 1 .3.935l-3.653 3.545a2.12 2.12 0 0 0-.635 1.875l.86 4.843a.528.528 0 0 1-.77.56l-4.396-2.318a2.122 2.122 0 0 0-1.974 0L5.627 21.41a.527.527 0 0 1-.77-.56l.86-4.843a2.12 2.12 0 0 0-.634-1.875L1.43 10.578a.528.528 0 0 1 .3-.935l4.913-1.51a2.123 2.123 0 0 0 1.596-1.16z" />
              </svg>
              <span className="mt-0.5 text-[6.5px] font-black leading-none tracking-[0.12em] text-[#ff4d00] sm:hidden">
                20+ PROJECTS
              </span>
              <span className="mt-0.5 text-[9px] font-black leading-none tracking-[0.08em] text-[#ff4d00] sm:mt-1 sm:text-[14px] md:text-[16px]">
                COMPLETED
              </span>
              <span className="mt-0.5 text-[7px] font-semibold italic leading-none text-[#595751] sm:mt-1 sm:text-[10px] md:text-[11px] dark:text-gray-400">
                Since 2023
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col justify-center h-full">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={preloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative top-[18px] text-[8.5vw] xs:text-[7.5vw] sm:top-[30px] sm:text-[6vw] md:text-[3.8vw] lg:text-[3.2vw] xl:text-[3.8rem] leading-[0.9em] mb-1 sm:mb-0 md:-mb-2 ml-0.5 sm:ml-2 md:ml-3 text-[rgb(3,3,9)] dark:text-white uppercase tracking-wider"
            style={{
              fontFamily: '"array", "array Fallback"',
            }}
          >
            CREATIVE
          </motion.p>

          <div className="relative top-[16px] flex flex-col select-none -mt-0.5 sm:top-[27px] sm:-mt-1.5 md:-mt-2">

            {/* WEB + Toggle Image row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8 lg:gap-16">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={preloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[21vw] xs:text-[18vw] sm:text-[13vw] md:text-[10vw] lg:text-[9vw] xl:text-[11rem] leading-[0.85] font-bold tracking-tighter text-[#ff4d00]"
                style={{ fontFamily: '"whyte","whyte Fallback"' }}
              >
                WEB
              </motion.span>

              {/* Toggle switch image from original site */}
              <motion.a
                href="/Osama_FrontEnd_Developer.pdf"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={preloaderDone ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative -ml-2 sm:-ml-3 md:-ml-6 lg:-ml-8 group cursor-pointer"
                aria-label="View Osama Abushama resume"
              >
                <Image
                  alt="View Resume"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 640px) 28vw, (max-width: 768px) 24vw, (max-width: 1024px) 20vw, (max-width: 1280px) 14vw, 16rem"
                  draggable="false"
                  className="w-[30vw] max-w-[7.5rem] xs:w-[26vw] sm:max-w-none sm:w-[24vw] md:w-[20vw] lg:w-[14vw] xl:w-[16rem] h-auto select-none transition-transform duration-300 group-hover:scale-95"
                  src="/on.webp"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/70 backdrop-blur-sm text-[#ff4d00] px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap z-10">
                  View Resume
                </div>
              </motion.a>
            </div>

            {/* DESIGNER / DEVELOPER — MorphingText component exact implementation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={preloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-morph-wrap relative h-[15vw] xs:h-[13vw] sm:h-[7.5vw] md:h-[6vw] mt-4 sm:mt-9 lg:h-[7vw] xl:h-[9rem]"
            >
              <MorphingText
                texts={WORDS}
                morphTime={1.5}
                cooldownTime={3}
                className="font-bold w-full h-full"
              />
            </motion.div>
          </div>

          {/* Design Engineer & Full Stack Developer */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={preloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-subtitle text-[11px] xs:text-xs sm:text-sm md:text-lg font-medium text-gray-800 dark:text-gray-300 mt-4 sm:mt-4 md:mt-6 lg:-mt-8 ml-0.5 sm:ml-2 md:ml-4"
            style={{ fontFamily: '"whyte","whyte Fallback"' }}
          >
            <span className="text-[#ff4d00] font-semibold">Web Designer</span> &amp;{" "}
            <span className="text-[#ff4d00] font-semibold">Frontend Developer</span>.
          </motion.p>

          {/* Bottom section: Marquee + Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={preloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 sm:mt-7 md:mt-8 -ml-0.5 sm:ml-2 md:ml-4 flex flex-col lg:flex-row lg:items-center lg:justify-between"
          >
            {/* Left: Partnering text + Marquee */}
            <div className="w-full lg:w-2/3">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-3 sm:mb-4">
                <span
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff4d00] flex-shrink-0" />
                  <span>
                    Partnering as a{" "}
                    <span
                      className="font-semibold text-gray-800 dark:text-gray-200"
                      style={{ fontFamily: '"whyte","whyte Fallback"' }}
                    >
                      Web Designer &amp; Frontend Developer
                    </span>{" "}
                    with teams at:
                  </span>
                </span>
              </div>

              {/* Marquee */}
              <div className="group flex overflow-hidden p-2 flex-row w-full" style={{ gap: "1.5rem" }}>
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 justify-around flex-row group-hover:[animation-play-state:paused]"
                    style={{
                      gap: "1.5rem",
                      animation: "marquee 20s linear infinite",
                    }}
                  >
                    {marqueePartners.map((partner) => (
                      <div
                        key={partner.key}
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white/75 opacity-100 transition-all duration-300 hover:bg-white hover:shadow-[0_10px_26px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/10 sm:h-14 sm:w-14 md:h-16 md:w-16"
                        title={partner.name}
                      >
                        <Image
                          src={partner.icon}
                          alt={partner.name}
                          width={partner.width}
                          height={partner.height}
                          sizes="52px"
                          draggable="false"
                          className="max-h-10 max-w-10 object-contain sm:max-h-12 sm:max-w-12 md:max-h-14 md:max-w-14"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 lg:mt-0 flex justify-center lg:justify-start">
              <div className="flex lg:hidden items-center gap-3 sm:gap-4 relative">
                <div className="relative rotate-[8deg] [filter:drop-shadow(0_2px_8px_rgba(255,77,0,0.25))]">
                  <ProfileImageReveal className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <div className="flex flex-col">
                  <p
                    className="text-base sm:text-xl text-[#1a2332] dark:text-gray-300 whitespace-nowrap font-bold"
                    style={{ fontFamily: '"whyte","whyte Fallback"' }}
                  >
                    Hi! I Am
                  </p>
                  <div className="relative">
                    <span
                      className="whitespace-nowrap text-xl sm:text-2xl font-bold leading-none text-[#ff4d00]"
                      style={{ fontFamily: '"whyte","whyte Fallback"' }}
                    >
                      Osama Abushama.
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop version - exact from site */}
              <div className="hidden lg:flex items-center gap-6 relative" style={{ position: "relative", top: "-42px", left: "6px" }}>
                <div className="flex flex-col items-start space-y-2">
                  <p
                    className="text-lg lg:text-xl text-[#1a2332] dark:text-gray-300 whitespace-nowrap font-bold"
                    style={{
                      position: "relative",
                      left: "12px",
                      top: "-13px",
                      fontFamily: '"whyte","whyte Fallback"',
                    }}
                  >
                    Hi! I Am
                  </p>
                  <div style={{ position: "relative", left: "10px", top: "-17px" }}>
                    <div className="relative">
                      <span
                        className="whitespace-nowrap text-2xl lg:text-3xl font-bold leading-none text-[#ff4d00]"
                        style={{ fontFamily: '"whyte","whyte Fallback"' }}
                      >
                        Osama Abushama.
                      </span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <DottedHeroArrow className="pointer-events-none relative left-[132px] top-[-30px] w-[150px] select-none opacity-70 dark:invert" />
                  </div>
                </div>

                {/* Profile photo - tilted, with batman hover */}
                <div
                  className="relative rotate-[12deg] [filter:drop-shadow(0_4px_12px_rgba(255,77,0,0.25))]"
                  style={{ left: "67px", top: "29px" }}
                >
                  <ProfileImageReveal
                    className="w-20 h-20 lg:w-28 lg:h-28"
                    style={{ position: "relative", left: "-103px", top: "29px" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default React.memo(Hero);
