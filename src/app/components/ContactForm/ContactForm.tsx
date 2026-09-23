"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaXmark,
} from "react-icons/fa6";

const contactEmail = "usamaabushama@gmail.com";
const emailServiceId = "service_nhyrfcq";
const emailTemplateId = "template_gikc1v8";
const emailPublicKey = "-El8fUqgJhTLojRTy";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedinIn },
  { label: "Resume", href: "/Osama_FrontEnd_Developer.pdf", Icon: FaArrowUpRightFromSquare, target: "_blank" },
];

export default React.memo(function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  }, []);

  const submitInquiry = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setFormStatus("sending");

    try {
      const { send } = await import("emailjs-com");

      await send(
        emailServiceId,
        emailTemplateId,
        {
          name,
          contact,
          message,
          subject_text: "New Project Inquiry",
          intro_text: "Someone submitted a new message from your portfolio contact form.",
        },
        emailPublicKey
      );

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fdfaf6] px-4 py-12 text-[#171b25] sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-[5%] dark:bg-[#0a0a0a] dark:text-white"
      aria-labelledby="contact-heading"
      role="region"
    >
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(232,229,223,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,229,223,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#fffcf3]/82 dark:bg-[#0a0a0a]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem]">
        <div className="relative top-12 mb-8 text-center sm:top-24 sm:mb-12">
          <div className="relative inline-flex flex-col items-center text-center">
            <span className="mb-3 inline-flex h-11 w-11 items-center justify-center sm:h-[3.25rem] sm:w-[3.25rem] md:h-16 md:w-16 lg:h-20 lg:w-20">
              <Image
                src="/svgs/pen.svg"
                alt="Pen icon"
                width={64}
                height={64}
                className="h-full w-full pointer-events-none"
              />
            </span>

            <h2
              id="contact-heading"
              className="mb-2 text-center text-3xl font-bold uppercase leading-[0.9em] tracking-normal text-black sm:text-5xl md:text-6xl lg:text-[90px] dark:text-white"
              style={{ fontFamily: "Satoshi, var(--font-inter), sans-serif" }}
            >
              Interested in
            </h2>
            <h2
              className="mb-8 text-center text-3xl font-bold uppercase leading-[0.9em] tracking-normal text-black sm:text-5xl md:text-6xl lg:text-[90px] dark:text-white"
              style={{ fontFamily: "Satoshi, var(--font-inter), sans-serif" }}
            >
              Working <span className="text-[#ff4d00]">Together?</span>
            </h2>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setFormStatus("idle");
                setIsModalOpen(true);
              }}
              className="group relative flex h-[44px] min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black/10 bg-[#fffcf3] px-6 p-2 text-center font-semibold text-black shadow-[0_10px_30px_rgba(17,24,39,0.08)] transition-all duration-300 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white"
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="absolute left-1/2 top-1/2 z-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black opacity-0 transition-all delay-200 duration-300 group-hover:scale-[100] group-hover:opacity-100 dark:bg-[#fffcf3]" />
                <div className="relative z-10 flex w-full items-center justify-center gap-3 transition-all delay-200 duration-300 group-hover:-translate-x-8 group-hover:opacity-0">
                  <div className="h-2 w-2 rounded-full bg-black transition-all duration-300 dark:bg-[#fffcf3]" />
                  <span className="relative z-10 inline-block">Get in Touch</span>
                </div>
                <div className="absolute inset-0 z-20 flex translate-x-8 items-center justify-center gap-2 text-white opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black">
                  <span className="flex w-full items-center justify-center gap-2">
                    Get in Touch
                    <FaArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <footer className="mt-32 px-0 sm:mt-48 sm:px-4">
          <div className="text-center">
            <Link href="/" className="mx-auto mb-2 flex w-max items-center justify-center gap-3">
              <span
                className="text-2xl font-black text-black dark:text-white sm:text-3xl"
                style={{ fontFamily: '"whyte","whyte Fallback"' }}
              >
                Osama
              </span>
            </Link>

            <button
              type="button"
              onClick={copyEmail}
              className="group relative mx-auto flex max-w-full cursor-pointer flex-wrap items-center justify-center gap-2 text-sm transition-opacity hover:opacity-80 sm:w-max sm:text-base md:text-lg"
              aria-live="polite"
            >
              <FaEnvelope className="h-5 w-5 text-[#ff4d00] sm:h-6 sm:w-6" aria-hidden="true" />
              <span
                className="cursor-pointer break-all font-bold"
                style={{ fontFamily: '"whyte","whyte Fallback"' }}
              >
                {contactEmail}
              </span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-3 py-1 text-xs text-white opacity-0 transition-opacity pointer-events-none group-hover:opacity-100 dark:bg-[#fffcf3] dark:text-black">
                {copied ? "Copied" : "Click to copy"}
              </span>
            </button>
          </div>

          <div className="relative mt-8 overflow-visible border-t border-gray-400 py-4 text-center sm:flex sm:items-center sm:justify-between md:mt-12 md:py-6">
            <Image
              src="/svgs/svg.svg"
              alt="Animated footer"
              width={190}
              height={150}
              className="pointer-events-none absolute right-0 top-0 hidden -translate-y-[92%] select-none sm:block"
              unoptimized
            />

            <p className="text-xs text-black/55 sm:text-sm md:text-base dark:text-white/55">
              © Osama Abushama. All rights reserved.
            </p>

            <ul className="mt-3 flex items-center justify-center gap-6 text-xs sm:mt-0 sm:gap-8 sm:text-sm md:gap-10 md:text-base">

              {socialLinks.map(({ label, href, target }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={target ?? (href.startsWith("http") ? "_blank" : undefined)}
                    rel={href.startsWith("http") || target === "_blank" ? "noreferrer" : undefined}
                    className="cursor-pointer transition-colors hover:text-[#ff4d00]"
                    aria-label={label}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto bg-black/55 px-3 py-4 backdrop-blur-[3px] sm:items-center sm:px-4 sm:py-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
        >
          <div
            className="relative max-h-[calc(100svh-2rem)] w-full max-w-[34rem] overflow-y-auto rounded-[1.25rem] border border-[#d8d4ca] bg-[#fffcf3] p-4 text-[#171b25] shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-heading"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition hover:bg-black/5 hover:text-[#171b25]"
              aria-label="Close contact form"
            >
              <FaXmark className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="pr-10 text-center">
              <h3
                id="contact-modal-heading"
                className="text-2xl font-black tracking-normal text-[#171b25] sm:text-3xl"
              >
                Let&apos;s Talk Tech
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                Ready to build something amazing? Fill out the form below.
              </p>
            </div>

            <form onSubmit={submitInquiry} className="mt-5 space-y-4 sm:mt-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="h-[52px] rounded-xl border border-[#cfd4dd] bg-transparent px-4 text-sm font-medium outline-none transition placeholder:text-[#98a1af] focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 sm:text-base"
                />
                <input
                  name="contact"
                  type="text"
                  required
                  placeholder="Enter your email or phone number"
                  className="h-[52px] rounded-xl border border-[#cfd4dd] bg-transparent px-4 text-sm font-medium outline-none transition placeholder:text-[#98a1af] focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 sm:text-base"
                />
              </div>

              <textarea
                name="message"
                required
                placeholder="Tell me about your project..."
                className="min-h-[8.25rem] w-full resize-none rounded-xl border border-[#cfd4dd] bg-transparent px-4 py-4 text-sm font-medium outline-none transition placeholder:text-zinc-500 focus:border-[#ff4d00] focus:ring-4 focus:ring-[#ff4d00]/10 sm:text-base"
              />

              <p className="text-center text-xs text-zinc-500 sm:text-sm">
                You can also contact me via{" "}
                <a
                  href={`https://wa.me/201021730424?text=${encodeURIComponent(
                    "Hi Osama, I want to discuss a project."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#16d94f] transition hover:text-[#11b941]"
                >
                  WhatsApp
                </a>
              </p>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="group relative flex h-[48px] min-w-[190px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black/10 bg-[#fffcf3] px-7 text-center text-sm font-bold text-black shadow-[0_10px_30px_rgba(17,24,39,0.08)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                >
                  <span className="mr-3 h-2.5 w-2.5 rounded-full bg-black" aria-hidden="true" />
                  {formStatus === "sending" ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

              {formStatus === "success" && (
                <p className="text-center text-xs font-semibold text-[#16a34a] sm:text-sm">
                  Your message has been sent successfully.
                </p>
              )}

              {formStatus === "error" && (
                <p className="text-center text-xs font-semibold text-red-500 sm:text-sm">
                  Something went wrong. Please try again or contact me via WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
});
