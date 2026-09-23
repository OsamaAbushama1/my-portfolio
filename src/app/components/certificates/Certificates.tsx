"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import "./Certificates.css";

const certificates = [
  {
    id: 1,
    img: "/Data_Analysis.webp",
    width: 1650,
    height: 1275,
    title: "Data Analysis",
    desc: "Completed a comprehensive Data Analysis certification, mastering Python, NumPy, and Pandas to build predictive models with 90% accuracy.",
  },
  {
    id: 2,
    img: "/NTI.webp",
    width: 1755,
    height: 1241,
    title: "Machine Learning",
    desc: "Earned a Machine Learning certification from NTI, focusing on Python, NumPy, and Pandas for predictive modeling and statistical analysis.",
  },
  {
    id: 3,
    img: "/meta-cerifacition.webp",
    width: 1650,
    height: 1275,
    title: "Frontend Development",
    desc: "Completed an introductory course in Front-End Development, focusing on HTML, CSS, and JavaScript fundamentals to build responsive websites.",
  },
];

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default React.memo(function Certificates() {
  return (
    <section
      id="certificates"
      className="certificates-section"
      aria-labelledby="certificates-heading"
      role="region"
    >
      <motion.div
        className="certificates-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <p className="certificates-kicker">Credentials</p>
        <h2 id="certificates-heading" className="certificates-title">
          Certificates
        </h2>
      </motion.div>

      <motion.div
        className="certificates-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {certificates.map((cert) => (
          <motion.article
            key={cert.id}
            className="cert-card"
            variants={cardVariants}
          >
            <div className="cert-img-wrapper">
              <Image
                src={cert.img}
                alt={cert.title}
                width={cert.width}
                height={cert.height}
                className="cert-img"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="cert-title ">{cert.title}</h3>
            <p className="cert-desc gabriela">{cert.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
});
