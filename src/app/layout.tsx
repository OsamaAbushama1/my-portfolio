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
  title: "Osama Abushama",
  description: "Osama Abushama | Frontend Developer",
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
