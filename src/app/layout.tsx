import type { Metadata } from "next";
import { Geist, Geist_Mono, Gabriela, DotGothic16, Inter } from "next/font/google";
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
    "Osama Abushama — Frontend Developer creating modern, responsive, and high-performance web experiences.",

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
    title: "Osama Abushama | Web Designer & Frontend Developer",
    description:
      "Explore my portfolio, web development projects, experience, certifications, and services.",
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
      "Explore my portfolio, web development projects, experience, certifications, and services.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="GjOBTLtHaHycblcBrWSNMNEtISZcRlGPOMOLRlyGT7I"
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
