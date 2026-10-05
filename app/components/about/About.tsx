"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    
    const targets = el.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        {/* Left Column — Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/compnay outer.jpg"
              alt="PEMS Facility"
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column — Content */}
        <div className={styles.contentCol}>
          <h2 className={styles.heading} data-animate style={{ animationDelay: "0s" }}>
            Who We Are
          </h2>
          
          <p className={styles.bodyText} data-animate style={{ animationDelay: "0.1s" }}>
            Pakistan Engineering Maintenance Service (PEMS) is an industrial mechanical engineering, maintenance, and specialized engineering services company delivering comprehensive joint integrity solutions, precision machining, controlled bolting, and fabrication across Pakistan.
          </p>
          
          <div data-animate style={{ animationDelay: "0.2s" }}>
            <Link href="/about" className={styles.ctaButton}>
              <span className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className={styles.btnText}>Read Our Story</span>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
