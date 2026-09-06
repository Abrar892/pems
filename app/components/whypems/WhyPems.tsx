"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./WhyPems.module.css";

const strengths = [
  {
    num: "01",
    title: "Field-Proven Expertise",
    desc: "Years of hands-on industrial experience across multiple sectors — our engineers know what it takes to deliver in demanding environments.",
  },
  {
    num: "02",
    title: "Engineering Precision",
    desc: "Every job follows structured engineering processes. We don't cut corners — dimensional accuracy, material compliance, and execution quality are non-negotiable.",
  },
  {
    num: "03",
    title: "Operational Reliability",
    desc: "We understand that downtime costs money. Our maintenance programmes are designed to maximize asset availability and minimize unplanned failures.",
  },
  {
    num: "04",
    title: "Safety-First Execution",
    desc: "HSE compliance is embedded in our work culture. Every task is planned and executed with safety as the primary consideration.",
  },
  {
    num: "05",
    title: "Quality Workmanship",
    desc: "From fabrication welds to installation alignments — quality is inspected and verified at every step, not just at completion.",
  },
  {
    num: "06",
    title: "Responsive Technical Support",
    desc: "We remain available to our clients beyond project completion. Technical issues don't wait for business hours, and neither do we.",
  },
];

export default function WhyPems() {
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
    <section ref={sectionRef} className={`${styles.section} ${visible ? styles.visible : ""}`} id="why-pems">

      <div className={styles.inner}>

        {/* Left sticky panel */}
        <div className={styles.leftPanel}>
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>WHY CHOOSE PEMS</span>
          </div>
          <h2 className={styles.heading}>
            The PEMS<br />
            <span className={styles.headingOutline}>Difference.</span>
          </h2>
          <p className={styles.body}>
            We are not a generic contractor. PEMS is a focused engineering and
            maintenance partner — built around precision, safety, and the
            technical depth to solve complex industrial problems.
          </p>
          <div className={styles.azureBar} />
        </div>

        {/* Right — strength list */}
        <div className={styles.rightPanel}>
          {strengths.map((s, i) => (
            <div
              key={s.num}
              className={styles.item}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={styles.itemNum}>{s.num}</span>
              <div>
                <h3 className={styles.itemTitle}>{s.title}</h3>
                <p className={styles.itemDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
