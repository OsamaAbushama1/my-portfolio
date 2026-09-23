import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const projects = [
  {
    id: "1",
    title: "MAMA Burger",
    year: "2026",
    category: "Restaurant Web App",
    image: "/projects-images/mamaburger/mamaBurger.webp",
    width: 1550,
    height: 778,
    gallery: [
      "/projects-images/mamaburger/mamaBurger.webp",
      "/projects-images/mamaburger/mamaburger1.webp",
      "/projects-images/mamaburger/mamaburger2.webp",
      "/projects-images/mamaburger/mamaburger3.webp",
      "/projects-images/mamaburger/mamaburger4.png",
    ],
    liveLink: "https://mama-burger.vercel.app/",
    description:
      "A modern, high-performance restaurant web application built with Next.js 16 and TypeScript. Features a bilingual interface, smooth animations, responsive design, cart management, and automated ordering via WhatsApp/SMS.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Twilio"],
  },
  {
    id: "2",
    title: "Dr. Brand",
    year: "2026",
    category: "Medical Marketing",
    image: "/projects-images/DrbrandWebsite/DrbrandWebsite.webp",
    width: 1857,
    height: 827,
    gallery: [
      "/projects-images/DrbrandWebsite/DrbrandWebsite.webp",
      "/projects-images/DrbrandWebsite/DrbrandWebsite1.png",
      "/projects-images/DrbrandWebsite/DrbrandWebsite2.webp",
      "/projects-images/DrbrandWebsite/DrbrandWebsite3.webp",
      "/projects-images/DrbrandWebsite/DrbrandWebsite4.webp",
      "/projects-images/DrbrandWebsite/DrbrandWebsite5.webp",
      "/projects-images/DrbrandWebsite/DrbrandWebsite6.webp",
      "/projects-images/DrbrandWebsite/DrbrandWebsite7.png",
    ],
    liveLink: "https://dr-brand1.vercel.app/",
    description:
      "A premium medical marketing platform with bilingual content, cinematic presentation, and clear communication flows for medical services.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "EmailJS"],
  },
  {
    id: "3",
    title: "Dr Brand Landing Page",
    year: "2025",
    category: "Dental Services",
    image: "/projects-images/drbrand/drbrand.webp",
    width: 1637,
    height: 848,
    gallery: [
      "/projects-images/drbrand/drbrand.webp",
      "/projects-images/drbrand/drbrand1.webp",
      "/projects-images/drbrand/drbrand2.webp",
      "/projects-images/drbrand/drbrand3.png",
      "/projects-images/drbrand/drbrand4.png",
      "/projects-images/drbrand/drbrand5.webp",
    ],
    liveLink: "https://dr-brand.vercel.app/",
    description:
      "A professional bilingual dental landing page with booking forms, responsive sections, animation, and internationalization support.",
    tech: ["React", "Bootstrap", "EmailJS"],
  },
  {
    id: "4",
    title: "Zayan Beauty Clinic",
    year: "2025",
    category: "Beauty Clinic",
    image: "/projects-images/zayanImage/zayanImage.webp",
    width: 1836,
    height: 908,
    gallery: [
      "/projects-images/zayanImage/zayanImage.webp",
      "/projects-images/zayanImage/zayanImage1.webp",
      "/projects-images/zayanImage/zayanImage2.webp",
      "/projects-images/zayanImage/zayanImage3.webp",
      "/projects-images/zayanImage/zayanImage4.png",
    ],
    liveLink: "https://zayanclinic.vercel.app/",
    description:
      "A bilingual clinic website with service showcases, appointment booking, Google Sheets integration, WhatsApp support, and polished animations.",
    tech: ["React", "JavaScript", "Vite", "CSS", "EmailJS"],
  },
  {
    id: "5",
    title: "Mandi Alwafa",
    year: "2026",
    category: "Restaurant Web App",
    image: "/projects-images/mandialwafa/mandialwafa.png",
    width: 1550,
    height: 778,
    gallery: [
      "/projects-images/mandialwafa/mandialwafa.png",
      "/projects-images/mandialwafa/mandialwafa1.png",
      "/projects-images/mandialwafa/mandialwafa2.png",
      "/projects-images/mandialwafa/mandialwafa3.png",
      "/projects-images/mandialwafa/mandialwafa4.png",
      "/projects-images/mandialwafa/mandialwafa5.png",
      "/projects-images/mandialwafa/mandialwafa6.png",
    ],
    liveLink: "#",
    description:
      "I have developed Mandi Alwafa as a traditional Saudi restaurant platform with a strong focus on clean interface structure, responsive layouts, smooth user interactions, and production-ready frontend implementation. The project combines Next.js, TypeScript, Tailwind, and multilingual support (RTL/LTR) to deliver a fast, polished dual-language experience that presents the brand's authentic flavor clearly and helps users explore the menu with confidence.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "RTL/LTR"],
  },
  {
    id: "6",
    title: "Selfie Smile Clinic",
    year: "2025",
    category: "Clinic Website",
    image: "/projects-images/selfiesmile/selfiesmile.webp",
    width: 1782,
    height: 815,
    gallery: [
      "/projects-images/selfiesmile/selfiesmile.webp",
      "/projects-images/selfiesmile/selfiesmile1.webp",
      "/projects-images/selfiesmile/selfiesmile2.webp",
      "/projects-images/selfiesmile/selfiesmile3.webp",
      "/projects-images/selfiesmile/selfiesmile4.webp",
      "/projects-images/selfiesmile/selfiesmile5.webp",
    ],
    liveLink: "https://selfiesmile.vercel.app/",
    description:
      "A responsive dental clinic web app with bilingual content, dynamic service showcases, EmailJS booking, and animated interactions.",
    tech: ["React", "JavaScript", "Bootstrap"],
  },
  {
    id: "7",
    title: "Brewhaus Cafe",
    year: "2025",
    category: "Cafe Platform",
    image: "/projects-images/utopia/utopia.webp",
    width: 1327,
    height: 826,
    gallery: [
      "/projects-images/utopia/utopia.webp",
      "/projects-images/utopia/utopia1.webp",
      "/projects-images/utopia/utopia2.webp",
      "/projects-images/utopia/utopia3.webp",
      "/projects-images/utopia/utopia4.webp",
      "/projects-images/utopia/utopia5.webp",
    ],
    liveLink: "https://brewhaus1.vercel.app/",
    description:
      "A modern cafe platform with online ordering, authentication, news content, responsive layouts, and multi-location support.",
    tech: ["React", "Vite", "CSS"],
  },
  {
    id: "8",
    title: "Fitness",
    year: "2025",
    category: "Fitness Website",
    image: "/projects-images/hyperfit/hyperfit.webp",
    width: 1610,
    height: 908,
    gallery: [
      "/projects-images/hyperfit/hyperfit.webp",
      "/projects-images/hyperfit/hyperfit1.webp",
      "/projects-images/hyperfit/hyperfit2.webp",
      "/projects-images/hyperfit/hyperfit3.webp",
      "/projects-images/hyperfit/hyperfit4.webp",
      "/projects-images/hyperfit/hyperfit5.webp",
    ],
    liveLink: "https://hyperfit1.vercel.app/",
    description:
      "A fitness web application with class booking, live filtering, trainer profiles, subscription plans, and fluid animations.",
    tech: ["React", "Vite", "CSS"],
  },
  {
    id: "9",
    title: "My Old Portfolio",
    year: "2024",
    category: "Personal Portfolio",
    image: "/projects-images/portfolio/portfolio.webp",
    width: 1598,
    height: 787,
    gallery: [
      "/projects-images/portfolio/portfolio.webp",
      "/projects-images/portfolio/portfolio1.webp",
      "/projects-images/portfolio/portfolio2.webp",
      "/projects-images/portfolio/portfolio3.webp",
      "/projects-images/portfolio/portfolio4.webp",
      "/projects-images/portfolio/portfolio5.png",
    ],
    liveLink: "https://myy-old-portfolio.vercel.app/",
    description:
      "An earlier personal portfolio built with React, smooth scrolling, responsive layout, and an EmailJS contact form.",
    tech: ["React", "CSS"],
  },
];

const contactLinks = [
  { label: "X", href: "https://x.com/OsamaAbushama", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/osama-abushama-59021921a/", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/OsamaAbushama1", Icon: FaGithub },
  { label: "WhatsApp", href: "https://wa.me/201021730424", Icon: FaWhatsapp },
];

const buildProjectBrief = (project: (typeof projects)[number]) =>
  `I have developed ${project.title} as a ${project.category.toLowerCase()} with a strong focus on clean interface structure, responsive layouts, smooth user interactions, and production-ready frontend implementation. The project combines ${project.tech.join(
    ", "
  )} to deliver a fast, polished experience that presents the brand clearly and helps users move through the website with confidence.`;

const getProjectGallery = (project: (typeof projects)[number]) => {
  const images =
    "gallery" in project && Array.isArray(project.gallery)
      ? project.gallery
      : [project.image];

  return images.map((image, index) => ({
    src: image,
    alt: `${project.title} preview ${index + 1}`,
  }));
};

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
    };
  }

  return {
    title: `${project.title} | Osama Abushama`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Osama Abushama`,
      description: project.description,
      url: `https://osama-abushama.vercel.app/web-dev/${id}`,
      siteName: "Osama Abushama",
      images: [
        {
          url: project.image,
          width: project.width,
          height: project.height,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Osama Abushama`,
      description: project.description,
      creator: "@OsamaAbushama",
      images: [project.image],
    },
  };
}

export default async function WebDevCaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  const gallery = getProjectGallery(project);

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

              <nav className="mt-10" aria-label="Web development works">
                <Link
                  href="/web-dev"
                  className="mb-3 block text-lg font-extrabold text-black transition hover:text-[#ff4d00] dark:text-white"
                >
                  Web Development Work
                </Link>
                <ul className="space-y-2 text-base leading-tight text-black dark:text-zinc-300">
                  {projects.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/web-dev/${item.id}`}
                        className={`transition hover:text-[#ff4d00] ${item.id === project.id ? "font-black text-[#ff4d00]" : ""
                          }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="pb-2">
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
          </div>
        </aside>

        <section className="pt-1 lg:pt-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <h1 className="text-4xl font-black tracking-[-0.055em] text-black dark:text-white sm:text-5xl lg:text-5xl">
              Project Brief
            </h1>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#292929] px-4 py-2.5 text-sm font-black text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-[#ff4d00]"
            >
              Go to project
              <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
            </a>
          </div>

          <p className="mt-8 max-w-[82rem] text-[1.15rem] leading-[1.55] tracking-[-0.025em] text-black dark:text-zinc-200 md:text-[1.3rem]">
            {buildProjectBrief(project)}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {gallery.map((image, index) => (
              <article
                key={`${image.src}-${index}`}
                className="overflow-hidden rounded-[0.55rem] bg-[#dfdbd2] p-8 shadow-[0_20px_50px_rgba(23,27,37,0.08)] dark:bg-white/10 sm:p-10"
              >
                <div className="relative aspect-[1.58/1] w-full overflow-hidden bg-[#eeeae1] shadow-sm dark:bg-black/20">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={project.width}
                    height={project.height}
                    priority={index === 0}
                    className="h-full w-full object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw, 40vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
