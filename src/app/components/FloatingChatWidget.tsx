"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const topics = [
  {
    label: "About Osama",
    answer:
      "I'm Osama Abushama, a Web Designer and Frontend Developer focused on clean, modern, responsive websites.",
  },
  {
    label: "Services & Cost",
    answer:
      "I build landing pages, portfolio sites, dashboards, and full frontend experiences. Tell me about your project and I'll suggest the best scope.",
  },
  {
    label: "Tech Stack & Tools",
    answer:
      "My main stack is React, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, and Figma.",
  },
];

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<(typeof topics)[number] | null>(
    null
  );
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (target instanceof Node && widgetRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={widgetRef} className="fixed bottom-4 left-4 z-[300] font-inter sm:bottom-6 sm:left-6">
      <div
        className={`absolute bottom-16 left-0 flex h-[min(560px,calc(100svh-6rem))] w-[min(475px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#fffcf3]/96 shadow-[0_22px_70px_rgba(17,24,39,0.18)] backdrop-blur-xl transition duration-300 sm:bottom-[4.5rem] sm:h-[min(560px,calc(100vh-7rem))] sm:w-[min(475px,calc(100vw-1.5rem))] dark:border-white/10 dark:bg-[#0a0a0a]/96 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          <ChatMessage>
            Hello! I&apos;m Osama&apos;s portfolio assistant.
            <span className="ml-1 text-[#ff4d00]">Ask me anything.</span>
          </ChatMessage>

          <ChatMessage>
            Click any of the topics below to learn more about Osama&apos;s
            experience, services, and tools.
          </ChatMessage>

          {activeTopic ? (
            <ChatMessage>
              <span className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-[#ff4d00]">
                {activeTopic.label}
              </span>
              {activeTopic.answer}
            </ChatMessage>
          ) : null}
        </div>

        <div className="border-t border-black/10 bg-[#fffcf3]/92 px-5 py-5 dark:border-white/10 dark:bg-[#0a0a0a]/92 sm:px-6">
          <p className="mb-4 text-xs font-extrabold uppercase text-zinc-400">
            Select a topic to chat:
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {topics.map((topic) => (
              <button
                key={topic.label}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`min-h-12 rounded-full border px-3 text-xs font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-[#ff4d00] hover:text-[#ff4d00] ${
                  activeTopic?.label === topic.label
                    ? "border-[#ff4d00] bg-[#ff4d00] text-white hover:text-white"
                    : "border-zinc-300 bg-white text-zinc-700 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200"
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="group flex h-[54px] w-[54px] items-center justify-center rounded-full bg-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#ff4d00]/25 sm:h-[58px] sm:w-[58px] dark:bg-white dark:text-black"
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}

function ChatMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <Image
        src="/Profile.webp"
        alt="Osama Abushama"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full border border-[#ff4d00]/35 bg-white object-cover"
      />
      <div>
        <p className="mb-2 text-sm font-medium text-zinc-400">
          Osama&apos;s Assistant
        </p>
        <div className="max-w-[320px] rounded-br-[1.25rem] rounded-tl-sm rounded-tr-[1.25rem] rounded-bl-[1.25rem] border border-black/10 bg-white px-4 py-3 text-sm leading-6 text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-zinc-100">
          {children}
        </div>
      </div>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-9 w-9 transition duration-300 group-hover:scale-105"
      fill="none"
    >
      <path
        d="M12.5 16.5C12.5 12.9 15.4 10 19 10h10c3.6 0 6.5 2.9 6.5 6.5v8.2c0 3.6-2.9 6.5-6.5 6.5h-7.7l-8.8 5.3v-20Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M19 21.2h.1M24 21.2h.1M29 21.2h.1"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-7 w-7"
      fill="none"
    >
      <path
        d="M14 14l20 20M34 14L14 34"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
