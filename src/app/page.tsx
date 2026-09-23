import type { Metadata } from "next";
import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";
import Preloader from "./components/Preloader";


export const metadata: Metadata = {
  metadataBase: new URL("https://osama-abushama.vercel.app"),
  title: "Osama Abushama | Web Developer & Data Analyst",
  description:
    "Portfolio of Osama Abushama - Creative Web Developer and Data Analyst specializing in Next.js, React, Tailwind CSS, and Power BI. Discover my projects, skills, and services.",
  keywords: [
    "Osama Abushama",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Data Analyst",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Osama Abushama" }],
  robots: "index, follow",
  openGraph: {
    title: "Osama Abushama | Portfolio",
    description:
      "Portfolio of Osama Abushama - Creative Web Developer and Data Analyst specializing in Next.js, React, Tailwind CSS, and Power BI.",
    url: "https://osama-abushama.vercel.app/",
    siteName: "Osama Abushama",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Osama Abushama Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Abushama | Portfolio",
    description:
      "Explore my portfolio showcasing web development, projects, and services.",
    creator: "@OsamaAbushama",
    images: ["/banner.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Preloader />
      <section className="sr-only">
        Osama Abushama - Web Developer specialized in React, Next.js,
        Tailwind. Explore my projects, services, education, and contact
        details.
      </section>
      <Hero />
      <HomeSections />
    </main>
  );
}
