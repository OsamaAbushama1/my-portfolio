import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import Projects from "../components/projects/Projects";

export const metadata: Metadata = {
  title: "Portfolio & Selected Work | Osama Abushama",
  description: "Explore selected work by Osama Abushama, including frontend development, React and Next.js websites, data analysis dashboards, and real-world web projects.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Portfolio & Selected Work | Osama Abushama",
    description:
      "Explore frontend development, React and Next.js websites, data analysis dashboards, and selected projects by Osama Abushama.",
    url: "/work",
    siteName: "Osama Abushama",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/work-banner.png",
        width: 1200,
        height: 630,
        alt: "Portfolio and Selected Work by Osama Abushama",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Selected Work | Osama Abushama",
    description:
      "Explore frontend development, web applications, and data analysis projects by Osama Abushama.",
    creator: "@OsamaAbushama",
    images: ["/work-banner.png"],
  },
};

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <Projects showAllProjects kicker={null} title="All Works" />
    </main>
  );
}
