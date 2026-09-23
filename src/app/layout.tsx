import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Gabriela,
  DotGothic16,
  Inter,
} from "next/font/google";
import "./globals.css";

import FloatingChatWidget from "./components/FloatingChatWidget";

const themeInitScript = `(function(){try{var theme=localStorage.getItem("theme");if(theme==="dark"||(!theme&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch{}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gabriela = Gabriela({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gabriela",
});

const dotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dotgothic",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osamaabushama.tech"),

  title: "Osama Abushama | Frontend Developer",

  description:
    "Frontend Developer specializing in React and Next.js, building modern, responsive, and high-performance websites. Explore my real-world projects, experience, certifications, and web development services.",

  keywords: [
    "Osama Abushama",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Osama Abushama" }],
  creator: "Osama Abushama",

  openGraph: {
    title: "Osama Abushama | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js, building modern, responsive, and high-performance websites. Explore my real-world projects, experience, certifications, and web development services.",
    url: "https://osamaabushama.tech",
    siteName: "Osama Abushama",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Osama Abushama - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Osama Abushama | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js, building modern, responsive, and high-performance websites. Explore my real-world projects, experience, certifications, and web development services.",
    images: ["/banner.png"],
  },

  alternates: {
    canonical: "https://osamaabushama.tech",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://osamaabushama.tech/#person",

    name: "Osama Abushama",

    url: "https://osamaabushama.tech",

    jobTitle: "Frontend Developer",

    description:
      "Frontend Developer specializing in React and Next.js, building modern, responsive, and high-performance web applications.",

    sameAs: [
      "https://github.com/OsamaAbushama1",
      "https://www.linkedin.com/in/osama-abushama-59021921a/",
    ],

    knowsAbout: [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="google-site-verification"
          content="GjOBTLtHaHycblcBrWSNMNEtISZcRlGPOMOLRlyGT7I"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gabriela.variable} ${dotGothic.variable} ${inter.variable} font-inter antialiased`}
      >
        {children}

        <FloatingChatWidget />
      </body>
    </html>
  );
}