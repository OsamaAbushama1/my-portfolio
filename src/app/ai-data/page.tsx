import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  },
];

const contactLinks = [
  { label: "X", href: "https://x.com/OsamaAbushama", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/osama-abushama-59021921a/", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/OsamaAbushama1", Icon: FaGithub },
  { label: "WhatsApp", href: "https://wa.me/201021730424", Icon: FaWhatsapp },
];

export const metadata: Metadata = {
  title: "AI & Data Analysis | Osama Abushama",
  description:
    "Explore my AI and Data Analysis projects including interactive Power BI and Excel dashboards designed to track key performance indicators.",
  openGraph: {
    title: "AI & Data Analysis | Osama Abushama",
    description:
      "Explore my AI and Data Analysis projects including interactive Power BI and Excel dashboards designed to track key performance indicators.",
    url: "https://osama-abushama.vercel.app/ai-data",
    siteName: "Osama Abushama",
    images: ["/banner.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Data Analysis | Osama Abushama",
    description:
      "Explore my AI and Data Analysis projects including interactive dashboards.",
    creator: "@OsamaAbushama",
    images: ["/banner.png"],
  },
};

export default function AiDataPage() {
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
                  {projects.map((project) => (
                    <li key={project.id}>
                      <Link
                        href={`/ai-data/${project.id}`}
                        className="text-left text-gray-500 transition hover:text-[#ff4d00] dark:text-zinc-500"
                      >
                        {project.title}
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
                href="/#expertise"
                className="inline-flex items-center gap-3 text-lg font-black text-black transition hover:text-[#ff4d00] dark:text-white"
              >
                <FaArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </div>
          </div>
        </aside>

        <section className="grid gap-3 md:grid-cols-2 lg:pt-6" aria-label="AI & Data Analysis projects">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/ai-data/${project.id}`}
              className="group relative min-h-[20rem] w-full cursor-pointer overflow-hidden bg-[#e7e3db] text-left outline-none transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#ff4d00] sm:min-h-[22rem] lg:min-h-[23rem]"
              aria-label={`Open ${project.title} case study`}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={project.width}
                height={project.height}
                priority={index < 2}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw, 40vw"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/78" />

              <div className="absolute left-8 top-8 max-w-[31rem] translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#ff4d00]">
                  {project.category}
                </span>
                <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-base font-medium leading-7 text-white md:text-lg">
                  {project.description}
                </p>
              </div>

              <span className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl text-white transition duration-300 group-hover:bg-[#ff4d00]">
                <FaArrowUpRightFromSquare className="h-6 w-6" />
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
