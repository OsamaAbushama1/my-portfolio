"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import "./Projects.css";

type PreviewKey = "web" | "uiux" | "landing" | "clinic";

const projects = [
  {
    id: "001",
    group: "web",
    year: "2026",
    title: "MAMA Burger",
    desc: "A modern, high-performance restaurant web application built with Next.js 16 and TypeScript. Features a fully bilingual interface with smooth Framer Motion animations, responsive design, dynamic cart management, and automated order placement via WhatsApp/SMS integration using Twilio.",
    img: "/projects-images/mamaburger/mamaBurger.webp",
    width: 1550,
    height: 778,
    tech: ["nextjs", "reactjs", "ts", "tailwind", "twilio"],
    tags: ["DEVELOPMENT", "ORDERING"],
    category: "Restaurant Web App",
    liveLink: "https://mama-burger.vercel.app/",
  },
  {
    id: "002",
    group: "uiux",
    year: "2026",
    title: "Dr. Brand",
    desc: "A premium medical marketing platform featuring a bilingual interface and cinematic visual storytelling, built to transform medical expertise into engaging digital experiences with seamless communication tools.",
    img: "/projects-images/DrbrandWebsite/DrbrandWebsite.webp",
    width: 1857,
    height: 827,
    tech: ["nextjs", "reactjs", "ts", "tailwind", "emailjs"],
    tags: ["DEVELOPMENT", "UI DESIGN"],
    category: "Medical Marketing",
    liveLink: "https://dr-brand1.vercel.app/",
  },
  {
    id: "003",
    group: "landing",
    year: "2025",
    title: "Dr Brand Landing Page",
    desc: "A professional bilingual marketing platform for dental services, built with React 19. Features include AOS animations, booking forms powered by Formik and EmailJS, responsive design using Styled Components and Bootstrap, and internationalization with i18next.",
    img: "/projects-images/drbrand/drbrand.webp",
    width: 1637,
    height: 848,
    tech: ["reactjs", "bootstrap", "emailjs"],
    tags: ["LANDING PAGE", "BOOKING"],
    category: "Dental Services",
    liveLink: "https://dr-brand.vercel.app/",
  },
  {
    id: "004",
    group: "clinic",
    year: "2025",
    title: "Zayan Beauty Clinic",
    desc: "A premium bilingual web application for an aesthetic clinic, built with React and Vite. The platform features service showcases, appointment booking integrated with Google Sheets, WhatsApp support, and polished Framer Motion animations.",
    img: "/projects-images/zayanImage/zayanImage.webp",
    width: 1836,
    height: 908,
    tech: ["reactjs", "js", "vite", "css", "emailjs"],
    tags: ["CLINIC", "ANIMATION"],
    category: "Beauty Clinic",
    liveLink: "https://zayanclinic.vercel.app/",
  },
  {
    id: "005",
    group: "web",
    year: "2026",
    title: "Mandi Alwafa",
    desc: "I have developed Mandi Alwafa as a traditional Saudi restaurant platform with a strong focus on clean interface structure, responsive layouts, smooth user interactions, and production-ready frontend implementation. The project combines Next.js, TypeScript, Tailwind, and multilingual support (RTL/LTR) to deliver a fast, polished dual-language experience that presents the brand's authentic flavor clearly and helps users explore the menu with confidence.",
    img: "/projects-images/mandialwafa/mandialwafa.png",
    width: 1550,
    height: 778,
    tech: ["nextjs", "reactjs", "ts", "tailwind"],
    tags: ["RESTAURANT", "BILINGUAL"],
    category: "Restaurant Web App",
    liveLink: "#",
  },
  {
    id: "006",
    group: "clinic",
    year: "2025",
    title: "Selfie Smile Clinic",
    desc: "A responsive dental clinic web app built with React, featuring a bilingual interface, dynamic service showcases, appointment booking integrated with EmailJS, and animated user interactions using Framer Motion.",
    img: "/projects-images/selfiesmile/selfiesmile.webp",
    width: 1782,
    height: 815,
    tech: ["reactjs", "js", "bootstrap"],
    tags: ["DENTAL", "RESPONSIVE"],
    category: "Clinic Website",
    liveLink: "https://selfiesmile.vercel.app/",
  },
  {
    id: "007",
    group: "web",
    year: "2025",
    title: "Brewhaus Cafe",
    desc: "A modern cafe web application built with React and Vite, featuring online ordering, secure user authentication, a dynamic news blog, responsive layouts, smooth AOS animations, and multi-location support.",
    img: "/projects-images/utopia/utopia.webp",
    width: 1327,
    height: 826,
    tech: ["reactjs", "js", "vite", "css"],
    tags: ["CAFE", "ORDERING"],
    category: "Cafe Platform",
    liveLink: "https://brewhaus1.vercel.app/",
  },
  {
    id: "008",
    group: "web",
    year: "2025",
    title: "Fitness",
    desc: "A dynamic fitness web application built with React and Vite. It features class booking with real-time filtering, trainer profiles, subscription plans, and fluid animations using Framer Motion and AOS.",
    img: "/projects-images/hyperfit/hyperfit.webp",
    width: 1610,
    height: 908,
    tech: ["reactjs", "js", "vite", "css"],
    tags: ["FITNESS", "BOOKING"],
    category: "Fitness Website",
    liveLink: "https://hyperfit1.vercel.app/",
  },
  {
    id: "009",
    group: "web",
    year: "2024",
    title: "My Old Portfolio",
    desc: "A classic personal portfolio built with React to showcase early web development projects. It features responsive design, smooth scroll animations, and an interactive contact form integrated with EmailJS.",
    img: "/projects-images/portfolio/portfolio.webp",
    width: 1598,
    height: 787,
    tech: ["reactjs", "js", "css"],
    tags: ["PORTFOLIO", "REACT"],
    category: "Personal Portfolio",
    liveLink: "https://myy-old-portfolio.vercel.app/",
  },
];

const previewData: Record<PreviewKey, { image: string; title: string; subtitle: string }> = {
  web: {
    image: "/projects-images/mamaburger/mamaBurger.webp",
    title: "Web Development",
    subtitle: "Fast, responsive websites and production-ready web apps",
  },
  uiux: {
    image: "/projects-images/DrbrandWebsite/DrbrandWebsite.webp",
    title: "UI/UX Design",
    subtitle: "Clean interfaces, polished flows, and user-centered layouts",
  },
  landing: {
    image: "/projects-images/drbrand/drbrand.webp",
    title: "Landing Pages",
    subtitle: "Focused marketing pages built for clarity and conversion",
  },
  clinic: {
    image: "/projects-images/zayanImage/zayanImage.webp",
    title: "Clinic Platforms",
    subtitle: "Bilingual booking experiences for medical and beauty brands",
  },
};

const previewLinks: Array<{ key: PreviewKey; label: string }> = [
  { key: "web", label: "Web Development" },
  { key: "uiux", label: "User-Centered UI/UX Design" },
  { key: "landing", label: "Landing Pages" },
  { key: "clinic", label: "Clinic Websites" },
];

const cardColors = ["#e3e1d5", "#ff5f5f", "#7ec4cf", "#b7a2cd", "#e8dff5", "#ffdcb5"];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const techNameMap: Record<string, string> = {
  nextjs: "Next.JS",
  reactjs: "React.JS",
  ts: "TypeScript",
  tailwind: "Tailwind CSS",
  twilio: "Twilio",
  vite: "Vite",
  css: "CSS",
  bootstrap: "Bootstrap",
  emailjs: "EmailJS",
  js: "JavaScript",
};

const formatTechName = (tech: string) => techNameMap[tech] ?? tech;

type ProjectsProps = {
  showAllProjects?: boolean;
  kicker?: string | null;
  title?: string;
};

export default React.memo(function Projects({
  showAllProjects = false,
  kicker = "My portfolio",
  title = "Featured Works",
}: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<PreviewKey | "all">("all");
  const [preview, setPreview] = useState<(typeof previewData)[PreviewKey] | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  useEffect(() => {
    Object.values(previewData).forEach((item) => {
      const img = new window.Image();
      img.src = item.image;
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.group === activeCategory);
  }, [activeCategory]);

  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  const updatePreviewPosition = useCallback((event: React.MouseEvent<HTMLElement>) => {
    let x = event.clientX - 150;
    let y = event.clientY - 270;

    if (x + 300 > window.innerWidth - 20) x = window.innerWidth - 320;
    if (x < 20) x = 20;
    if (y < 20) y = event.clientY + 20;

    setPreviewPosition({ x, y });
  }, []);

  const handlePreviewStart = useCallback(
    (key: PreviewKey, event: React.MouseEvent<HTMLElement>) => {
      setPreview(previewData[key]);
      setIsPreviewVisible(true);
      updatePreviewPosition(event);
    },
    [updatePreviewPosition]
  );

  const handlePreviewMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (isPreviewVisible) updatePreviewPosition(event);
    },
    [isPreviewVisible, updatePreviewPosition]
  );

  const handlePreviewEnd = useCallback(() => {
    setIsPreviewVisible(false);
  }, []);

  const handleCategoryClick = useCallback((key: PreviewKey) => {
    setActiveCategory((current) => (current === key ? "all" : key));
  }, []);

  return (
    <section
      id="work"
      className={`projects-section ${showAllProjects ? "is-work-page" : ""}`}
      aria-labelledby="projects-heading"
      role="region"
    >
      <span id="projects" className="projects-anchor" aria-hidden="true" />

      <motion.div
        className="projects-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        {kicker && (
          <motion.p className="projects-kicker" variants={itemVariants}>
            {kicker}
          </motion.p>
        )}
        <motion.h2 id="projects-heading" className="projects-title" variants={itemVariants}>
          {title}
        </motion.h2>
        <motion.div className="projects-intro" variants={itemVariants}>
          <span>
            Welcome to a portfolio of{" "}
            {previewLinks.map((link, index) => (
              <React.Fragment key={link.key}>
                <button
                  type="button"
                  className={`hover-link-preview ${activeCategory === link.key ? "is-active" : ""
                    }`}
                  onMouseEnter={(event) => handlePreviewStart(link.key, event)}
                  onMouseMove={handlePreviewMove}
                  onMouseLeave={handlePreviewEnd}
                  onClick={() => handleCategoryClick(link.key)}
                >
                  {link.label}
                </button>
                {index === previewLinks.length - 2
                  ? ", and "
                  : index < previewLinks.length - 1
                    ? ", "
                    : " "}
              </React.Fragment>
            ))}
            projects.
          </span>

          {preview && (
            <div
              className={`preview-card ${isPreviewVisible ? "visible" : ""}`}
              style={{ left: `${previewPosition.x}px`, top: `${previewPosition.y}px` }}
              aria-hidden="true"
            >
              <div className="preview-card-inner">
                <Image src={preview.image} alt="" width={280} height={160} />
                <div className="preview-card-title">{preview.title}</div>
                <div className="preview-card-subtitle">{preview.subtitle}</div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div className="projects-grid" variants={sectionVariants}>
          {visibleProjects.map((project, index) => {
            const color = cardColors[index % cardColors.length];
            const isDarkCard = color === "#ff5f5f" || color === "#b7a2cd";

            return (
              <motion.article
                key={project.id}
                className={`featured-project-card ${index % 3 === 1 ? "is-lowered" : ""}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{ backgroundColor: color }}
                aria-label={`${project.title} project`}
              >
                <span className="project-thread" aria-hidden="true">
                  <span />
                </span>

                <div className={`featured-project-content ${isDarkCard ? "is-dark-card" : ""}`}>
                  <div className="featured-project-topline">
                    <span className="featured-project-rule" />
                    <span className="featured-project-year">{project.year}</span>
                  </div>

                  <div className="featured-project-copy">
                    <p className="featured-project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="featured-project-desc">Case Study</p>
                  </div>

                  <div className="featured-project-preview">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={project.width}
                      height={project.height}
                      className="featured-project-image"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />

                    <div className="featured-project-tags" aria-label="Project actions">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live project`}
                      >
                        View Project
                      </a>
                      <Link
                        href={`/web-dev/${Number(project.id)}`}
                        aria-label={`Open ${project.title} development case study`}
                      >
                        Development
                      </Link>
                    </div>
                  </div>

                  <ul
                    className="featured-project-tech"
                    style={
                      {
                        "--tech-count": project.tech.length,
                        "--tech-mobile-count": Math.min(project.tech.length, 2),
                      } as React.CSSProperties
                    }
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{formatTechName(tech)}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {!showAllProjects && filteredProjects.length > 3 && (
          <motion.div className="projects-more-wrap" variants={itemVariants}>
            <Link
              href="/work"
              className="projects-more-btn"
            >
              Show more
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
});
