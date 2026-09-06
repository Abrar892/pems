"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Process.module.css";

const steps = [
  { num: "01", title: "Consultation", desc: "We begin with an in-depth consultation to understand operational requirements, project challenges, and objectives." },
  { num: "02", title: "Site Assessment", desc: "Our engineers assess existing conditions, equipment status, site constraints, and the scope of work." },
  { num: "03", title: "Engineering & Planning", desc: "We develop a detailed engineering plan covering methodology, resources, scheduling, safety, and technical requirements." },
  { num: "04", title: "Execution", desc: "Our skilled field teams execute the work according to the approved plan while maintaining strict quality control." },
  { num: "05", title: "Inspection & Quality Control", desc: "Completed work is systematically inspected and verified against engineering specifications and quality standards." },
  { num: "06", title: "Completion & Support", desc: "We complete the handover with proper documentation and remain available for ongoing technical support." },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.process} ${active ? styles.active : ""}`} id="process">

      <div className={styles.header}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>HOW WE WORK</span>
        </div>
        <h2 className={styles.heading}>
          Our Engineering<br />
          <span className={styles.headingOutline}>Process.</span>
        </h2>
      </div>

      <div className={styles.timelineContainer}>
        {/* SVG Line Background (Dim Track) */}
        <div className={styles.svgTrack} />
        
        {/* Animated SVG Line */}
        <div className={styles.svgContainer}>
          <svg className={styles.timelineSvg} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="50%" y1="0" x2="50%" y2="100%" className={styles.timelinePath} pathLength="100" />
          </svg>
        </div>

        {steps.map((step, i) => {
          // Dynamic delay mapping to approximate the ease-out curve of the line
          const baseDelay = 0.4 + (i * 0.4); 
          const isEven = i % 2 === 0;

          return (
            <div 
              key={step.num} 
              className={`${styles.step} ${isEven ? styles.stepRight : styles.stepLeft}`}
            >
              <div className={styles.nodeWrapper}>
                <div 
                  className={styles.node} 
                  style={{ transitionDelay: `${baseDelay}s` }} 
                />
              </div>
              <div 
                className={styles.contentWrapper} 
                style={{ transitionDelay: `${baseDelay + 0.1}s` }}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <span className={styles.stepDivider}>—</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
