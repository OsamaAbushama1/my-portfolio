"use client";

import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("./AboutMe/AboutMe"));
const Services = dynamic(() => import("./services/services"));
const Education = dynamic(() => import("./Education/Education"));
const Certificates = dynamic(() => import("./certificates/Certificates"));
const Projects = dynamic(() => import("./projects/Projects"));
const ContactForm = dynamic(() => import("./ContactForm/ContactForm"));

export default function HomeSections() {
  return (
    <>
      <AboutMe />
      <Services />
      <Education />
      <Certificates />
      <Projects />
      <ContactForm />
    </>
  );
}
