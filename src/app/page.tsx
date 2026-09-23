import Hero from "./components/Hero";
import HomeSections from "./components/HomeSections";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <main>
      <Preloader />

      <section className="sr-only">
        Osama Abushama - Frontend Developer specialized in React, Next.js,
        and Tailwind CSS. Explore my projects, services, experience,
        certifications, and contact details.
      </section>

      <Hero />
      <HomeSections />
    </main>
  );
}