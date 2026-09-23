import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const projects = [
  {
    id: "1",
    title: "Power BI Dashboard",
    category: "Power BI · Data Visualization",
    image: "/projects-images/ai-data/powerbi.webp",
    width: 1920,
    height: 1080,
    description:
      "An interactive Power BI dashboard designed to track key performance indicators and provide actionable business insights.",
    brief: "The objective was to design a highly interactive Power BI dashboard that consolidates raw data from multiple sources into a single, cohesive view, enabling stakeholders to monitor Key Performance Indicators (KPIs) in real-time.",
    challenges: [
      "Integrating multiple datasets into a structured and logical data model.",
      "Writing complex DAX measures to calculate custom metrics dynamically.",
      "Designing a clean UI that doesn't overwhelm the user with too much data at once.",
    ],
    solutions: [
      "Built a robust star-schema data model using Power Query to ensure smooth performance.",
      "Utilized advanced DAX functions to implement time-intelligence and dynamic filtering.",
      "Applied best practices in data visualization to create an intuitive layout with clear slicers and drill-through capabilities.",
    ],
    impact: "The dashboard eliminated the need for manual reporting, saving hours of work each week and providing decision-makers with a reliable tool to analyze trends instantly.",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    id: "2",
    title: "Excel Dashboard",
    category: "Excel · Data Visualization",
    image: "/projects-images/ai-data/dataanalysis.webp",
    width: 1920,
    height: 1080,
    description:
      "A comprehensive Excel dashboard visualizing key metrics and trends. Click to view the full case study and insights.",
    brief: "The goal was to take raw data and transform it into a clear, interactive Excel dashboard that helps stakeholders quickly understand business performance and key metrics without diving into complex sheets.",
    challenges: [
      "Cleaning and formatting messy, inconsistent raw data.",
      "Designing a dashboard that is both visually appealing and highly functional within Excel's limitations.",
      "Creating dynamic charts that update automatically based on user-selected filters (slicers).",
    ],
    solutions: [
      "Used Power Query to clean, transform, and load the raw data into a structured format.",
      "Utilized Pivot Tables and Pivot Charts to create dynamic aggregations.",
      "Designed a clean layout with consistent colors, aligned charts, and clear typography.",
    ],
    impact: "The final dashboard reduced reporting time significantly. Stakeholders can now filter data by date, region, or category in seconds, leading to faster and more data-driven decision making.",
    tech: ["Excel", "Power Query", "Pivot Tables", "Data Visualization"],
  },
];

const contactLinks = [
  {
    label: "X",
    href: "https://x.com/OsamaAbushama",
    Icon: FaXTwitter
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/osama-abushama-59021921a/",
    Icon: FaLinkedinIn
  },
  {
    label: "GitHub",
    href: "https://github.com/OsamaAbushama1",
    Icon: FaGithub
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201021730424",
    Icon: FaWhatsapp
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Osama Abushama",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  const projectUrl = `https://osamaabushama.tech/ai-data/${project.id}`;
  const projectTitle =
    project.id === "1"
      ? "Power BI Dashboard | Data Analysis Project | Osama Abushama"
      : "Excel Dashboard | Data Analysis Project | Osama Abushama";


  return {
    title: projectTitle,
    description: project.description,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: projectTitle,
      description: project.description,
      url: projectUrl,
      siteName: "Osama Abushama",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: project.image,
          width: project.width,
          height: project.height,
          alt: `${project.title} data analysis project by Osama Abushama`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: projectTitle,
      description: project.description,
      creator: "@OsamaAbushama",
      images: [project.image],
    },
  };
}

export default async function AiDataCaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  const liveLink =
    "liveLink" in project && typeof project.liveLink === "string"
      ? project.liveLink
      : null;

  return (
    <main className="bg-grid-pattern relative isolate min-h-screen overflow-x-hidden bg-[#fffcf3] px-5 py-10 text-[#101014] dark:bg-[#0a0a0a] dark:text-white sm:px-8 lg:px-[4%]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#fffcf3]/80 dark:bg-[#0a0a0a]" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.4] mix-blend-multiply dark:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-[110rem] gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_minmax(0,1fr)]">
        <Link
          href="/"
          className="mx-auto inline-flex items-end text-center text-4xl font-black tracking-[-0.05em] text-[#171b25] transition hover:text-[#ff4d00] dark:text-white lg:hidden"
          aria-label="Back to homepage"
        >
          Osam<span className="text-[#ff4d00]">a</span>
        </Link>

        <aside className="hidden lg:sticky lg:top-10 lg:block lg:h-[calc(100vh-5rem)]">
          <div className="flex h-full flex-col gap-8">
            <div>
              <Link
                href="/"
                className="inline-flex items-end text-4xl font-black tracking-[-0.05em] text-[#171b25] transition hover:text-[#ff4d00] dark:text-white"
                aria-label="Back to homepage"
              >
                Osam<span className="text-[#ff4d00]">a</span>
              </Link>

              <nav className="mt-10" aria-label="AI & Data work">
                <Link
                  href="/ai-data"
                  className="mb-3 block text-lg font-extrabold text-[#ff4d00] transition hover:text-black dark:hover:text-white"
                >
                  AI & Data Analysis
                </Link>
                <ul className="space-y-2 text-base leading-tight text-black dark:text-zinc-300">
                  {projects.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/ai-data/${p.id}`}
                        className={`transition hover:text-[#ff4d00] ${p.id === id ? "text-[#ff4d00]" : ""
                          }`}
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="space-y-8 pb-2">
              <div>
                <p className="mb-3 text-lg font-extrabold text-black dark:text-white">Contact</p>
                <div className="flex items-center gap-5">
                  {contactLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-2xl text-black transition hover:-translate-y-1 hover:text-[#ff4d00] dark:text-white dark:hover:text-[#ff4d00]"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              <Link
                href="/ai-data"
                className="inline-flex items-center gap-3 text-lg font-black text-black transition hover:text-[#ff4d00] dark:text-white"
              >
                <FaArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </div>
          </div>
        </aside>

        <section className="min-w-0 pb-20 pt-2 lg:pt-6">
          <div className="mb-10 lg:mb-16">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-[#ff4d00]">
              {project.category}
            </span>
            <h1 className="text-4xl font-black leading-none tracking-[-0.04em] text-[#171b25] dark:text-white md:text-5xl lg:text-7xl">
              {project.title}
            </h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
            {/* Main Content */}
            <div className="space-y-16">
              <section>
                <h2 className="mb-6 text-2xl font-black tracking-[-0.02em] text-[#171b25] dark:text-white md:text-3xl">
                  Project Brief
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <p>{project.brief}</p>
                </div>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-black tracking-[-0.02em] text-[#171b25] dark:text-white md:text-3xl">
                  Challenges
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#ff4d00]">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-black tracking-[-0.02em] text-[#171b25] dark:text-white md:text-3xl">
                  Solutions
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <ul className="space-y-3">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#ff4d00]">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="mb-6 text-2xl font-black tracking-[-0.02em] text-[#171b25] dark:text-white md:text-3xl">
                  Impact
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <p>{project.impact}</p>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar */}
            <div className="space-y-10 lg:sticky lg:top-10 lg:h-fit">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#ff4d00]">
                  Technologies Used
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Only show live link if we have one (usually not for certificates, but just in case) */}
              {liveLink && (
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#ff4d00]">
                    Links
                  </h3>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-lg font-bold text-[#171b25] transition hover:text-[#ff4d00] dark:text-white"
                  >
                    View Live Project
                    <FaArrowUpRightFromSquare className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Hero Image Moved to Bottom */}
          <div className="relative mt-16 overflow-hidden bg-[#e7e3db] dark:bg-[#1a1a1a]">
            <Image
              src={project.image}
              alt={project.title}
              width={project.width}
              height={project.height}
              priority
              className="w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
