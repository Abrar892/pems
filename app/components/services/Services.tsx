"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Services.module.css";

const services = [
  {
    id: "01",
    title: "Industrial Equipment Maintenance",
    desc: "Maintenance and servicing of heavy industrial equipment to support safe, reliable, and efficient operation.",
    image: "/engineer-working.jpg",
    imagePos: "center",
  },
  {
    id: "02",
    title: "Fabrication & Engineering",
    desc: "Custom fabrication and engineering solutions including structural steel, piping systems, and mechanical assemblies.",
    image: "/close-up.jpg",
    imagePos: "center top",
  },
  {
    id: "03",
    title: "Installation & Commissioning",
    desc: "Professional installation and commissioning of industrial machinery and systems to ensure safe and efficient startup.",
    image: "/industrail piping and vavlues.png",
    imagePos: "center",
  },
  {
    id: "04",
    title: "Preventive & Corrective Maintenance",
    desc: "Planned preventive maintenance and responsive corrective maintenance to reduce downtime and extend asset life.",
    image: "/miantenance.jpg",
    imagePos: "center",
  },
  {
    id: "05",
    title: "Industrial Inspection",
    desc: "Technical inspection services including visual inspection, dimensional checks, and condition assessment of industrial assets.",
    image: "/inspection.jpg",
    imagePos: "center",
  },
  {
    id: "06",
    title: "Pipe Cold Cutting & Beveling",
    desc: "Precision cold cutting and beveling of pipes from 1 inch to 24 inches, supporting accurate pipe preparation without heat-related damage.",
    image: "/pipecold cutting and beveling 1-24 icnhes.png",
    imagePos: "center",
  },
  {
    id: "07",
    title: "Laser Cutting",
    desc: "Laser cutting for Mild Steel (MS): 1 mm to 25 mm and Stainless Steel (SS): 1 mm to 12 mm with precision accuracy.",
    image: "/laser_cutting_industrial.png",
    imagePos: "center",
  },
  {
    id: "08",
    title: "Magnetic Drilling / Pipe Holing",
    desc: "Precision hole-making using the FEIN Slugger JMC Magforce 90 Ultra-Low Profile Magnetic Drill for industrial and restricted-access applications.",
    image: "/magnetic_drill_pipe_holing.png",
    imagePos: "center",
  },
  {
    id: "09",
    title: "Hydraulic Bolt Torquing & Bolt Tensioning",
    desc: "Professional hydraulic bolt torquing and bolt tensioning for controlled, accurate and reliable tightening of critical industrial connections.",
    image: "/bolthydraulictorquing.png",
    imagePos: "center",
  },
  {
    id: "10",
    title: "Diamond Core Cutting",
    desc: "Precision diamond core cutting for concrete and structural applications, delivering clean and accurate openings for industrial and construction requirements.",
    image: "/preciion cutting_machining.png",
    imagePos: "center",
  },
  {
    id: "11",
    title: "Hydro Testing",
    desc: "Hydro testing for pressure verification of piping, vessels and industrial systems to help ensure integrity, reliability and safe operation.",
    image: "/industrail piping and vavlues.png",
    imagePos: "center",
  },
  {
    id: "12",
    title: "Multi Welding",
    desc: "Professional multi-process welding services including Arc Welding, Argon Welding and Aluminium Welding for industrial fabrication, repair and maintenance applications.",
    image: "/close-up.jpg",
    imagePos: "center",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.services} ${revealed ? styles.revealed : ""}`}
      id="services"
    >
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>WHAT WE DO</span>
        </div>
        <h2 className={styles.heading}>
          Engineered{" "}
          <span className={styles.headingOutline}>
            for the Work That Matters.
          </span>
        </h2>
        <p className={styles.subheading}>
          From precision maintenance and fabrication to specialized cutting,
          drilling, machining and bolting solutions, PEMS delivers practical
          engineering support for demanding industrial operations.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className={styles.grid}>
        {services.map((svc, i) => (
          <article
            key={svc.id}
            className={styles.card}
            // @ts-expect-error CSS custom property
            style={{ "--i": i }}
          >
            {/* Image */}
            <div className={styles.imageWrap}>
              <img
                src={svc.image}
                alt={svc.title}
                className={styles.image}
                style={{ objectPosition: svc.imagePos }}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <span className={styles.cardNum}>{svc.id}</span>
            </div>

            {/* Content */}
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <a href="#contact" className={styles.cardLink}>
                Get a Quote
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={styles.linkArrow}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>

            {/* Accent bar */}
            <div className={styles.accentBar} />
          </article>
        ))}
      </div>
    </section>
  );
}
