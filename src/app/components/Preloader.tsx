"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./Preloader.css";

// متغير على مستوى الـ module:
// ✅ بيتمسح عند كل refresh (full page reload)
// ✅ بيفضل موجود لما بتتنقل بين الصفحات (client-side nav)
let preloaderShownThisLoad = false;

export default function Preloader() {
  // نبدأ بـ null عشان منعرضش حاجة قبل ما الـ JS يتحمل
  const [show, setShow] = useState<boolean | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (preloaderShownThisLoad) {
      // بتنقل client-side — مش بنعرض الـ preloader
      setShow(false);
      (window as any).hasPreloaderFinished = true;
      window.dispatchEvent(new Event("preloaderFinished"));
      return;
    }

    // أول تحميل أو refresh — نعرض الـ preloader
    setShow(true);
    preloaderShownThisLoad = true;

    const closeTimer = setTimeout(() => {
      setIsFadingOut(true);
      (window as any).hasPreloaderFinished = true;
      window.dispatchEvent(new Event("preloaderFinished"));

      setTimeout(() => {
        setShow(false);
      }, 300);
    }, 1500);

    return () => clearTimeout(closeTimer);
  }, []);

  // قبل ما الـ JS يشتغل — مش بنعرض حاجة (بنتجنب الـ flash)
  if (show === null || show === false) return null;

  return (
    <div
      className={`preloader-overlay ${isFadingOut ? "fade-out" : ""}`}
      suppressHydrationWarning
    >
      <div className="preloader-logo-row">
        <Image
          src="/logo.png"
          alt="Osama Abushama"
          width={180}
          height={180}
          className="logo-animation dark:hidden md:w-[200px] md:h-[200px]"
          priority
        />
        <Image
          src="/light-logo.png"
          alt="Osama Abushama"
          width={180}
          height={180}
          className="logo-animation hidden dark:block md:w-[200px] md:h-[200px]"
          priority
        />
        <span className="preloader-title">Frontend Developer</span>
      </div>
    </div>
  );
}
