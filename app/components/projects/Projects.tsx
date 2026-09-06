"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "01",
    title: "Heavy Equipment Overhaul",
    category: "Mechanical Maintenance",
    desc: "Complete dismantling, inspection, repair, and reassembly of critical rotating equipment at an industrial facility.",
    tag: "Industrial",
    image: "/preciion cutting_machining.png",
  },
  {
    id: "02",
    title: "Structural Steel Fabrication",
    category: "Fabrication & Engineering",
    desc: "Design and fabrication of custom structural steel assemblies for plant expansion, meeting tight dimensional tolerances.",
    tag: "Fabrication",
    image: "/close-up-view-worker-welding-metal-construction-industrial-workshop.jpg",
  },
  {
    id: "03",
    title: "Plant Shutdown & Maintenance",
    category: "Plant Maintenance",
    desc: "Coordinated shutdown maintenance program across multiple equipment trains, completed on schedule with zero safety incidents.",
    tag: "Plant Maintenance",
    image: "/bolthydraulictorquing.png",
  },
  {
    id: "04",
    title: "Piping System Installation",
    category: "Installation & Commissioning",
    desc: "End-to-end installation and pressure testing of an industrial piping system, including commissioning and handover documentation.",
    tag: "Installation",
    image: "/industrail piping and vavlues.png",
  },
  {
    id: "05",
    title: "Preventive Maintenance Programme",
    category: "Preventive Maintenance",
    desc: "Development and execution of a structured PM programme covering 80+ assets, reducing unplanned downtime significantly.",
    tag: "Maintenance",
    image: "/flange-photo.jpeg",
  },
  {
    id: "06",
    title: "Industrial Inspection Campaign",
    category: "Industrial Inspection",
    desc: "Systematic inspection of static and rotating equipment to assess integrity and remaining service life ahead of a major turnaround.",
    tag: "Inspection",
    image: "/pipecold cutting and beveling 1-24 icnhes.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.projects} ${visible ? styles.visible : ""}`} id="projects">

      <div className={styles.header}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>OUR WORK</span>
        </div>
        <h2 className={styles.heading}>
          Featured<br />
          <span className={styles.headingOutline}>Projects.</span>
        </h2>
        <p className={styles.subheading}>
          Representative examples of PEMS engineering and maintenance work.
          Actual project data can be provided upon request.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className={styles.card}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={styles.imageWrap}>
              <img src={proj.image} alt={proj.title} className={styles.image} />
              <div className={styles.imageOverlay} />
              <span className={styles.categoryBadge}>{proj.category}</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardNum}>{proj.id}</span>
              <h3 className={styles.cardTitle}>{proj.title}</h3>
              <p className={styles.cardDesc}>{proj.desc}</p>
              <div className={styles.cardMeta}>
                <span className={styles.cardTag}>{proj.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaNote}>
          Project data is indicative. Contact us for detailed case studies.
        </p>
        <a href="#contact" className={styles.ctaBtn}>Discuss Your Project</a>
      </div>

    </section>
  );
}
