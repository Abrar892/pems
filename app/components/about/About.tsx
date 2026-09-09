"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const stats = [
  { target: 15, suffix: "+", label: "YEARS OF ENGINEERING EXPERIENCE" },
  { target: 200, suffix: "+", label: "PROJECTS SUCCESSFULLY DELIVERED" },
  { target: 50, suffix: "+", label: "INDUSTRIAL CLIENTS SERVED" },
  { target: 98, suffix: "%", label: "CLIENT SATISFACTION" },
];

function StatCounter({ target, suffix, delay, visible }: { target: number, suffix: string, delay: number, visible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(Math.max((elapsed - delay) / duration, 0), 1);

      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * ease));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [visible, target, delay]);

  return <>{count}{suffix}</>;
}



export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.about} ${visible ? styles.visible : ""}`} id="about">

      {/* Section label */}
      <div className={styles.sectionTag}>
        <span className={styles.tagLine} />
        <span className={styles.tagText}>WHO WE ARE</span>
      </div>

      <div className={styles.grid}>

        {/* Left — text */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Engineering <span className={styles.accentText}>Reliability</span><br />
            Into Every Operation.
          </h2>

          <p className={styles.body}>
            Pakistan Engineering Maintenance Service (PEMS) delivers dependable mechanical maintenance, plant engineering, fabrication, and technical support for demanding industrial environments.
          </p>
          <p className={styles.body}>
            From initial assessment to project completion, our experienced teams combine technical precision, disciplined execution, and practical engineering expertise to keep critical operations moving.
          </p>

          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>
                  <StatCounter target={s.target} suffix={s.suffix} delay={i * 120} visible={visible} />
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div className={styles.rightCol}>
          <div className={styles.imageBlock}>
            <Image
              src="/massive-steel.avif"
              alt="PEMS industrial engineering operations"
              className={styles.mainImage}
              fill
              sizes="(max-width: 600px) 90vw, (max-width: 1024px) 90vw, 47vw"
              quality={78}
              loading="lazy"
            />
            <div className={styles.imageAccent} />
          </div>
        </div>

      </div>


    </section>
  );
}
