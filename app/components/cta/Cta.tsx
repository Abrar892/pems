"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Cta.module.css";

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.cta} ${visible ? styles.visible : ""}`} id="contact">

      {/* Geometric accents */}
      <div className={styles.accentTR} />
      <div className={styles.accentBL} />

      <div className={styles.inner}>

        <div className={styles.tag}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>GET IN TOUCH</span>
        </div>

        <h2 className={styles.heading}>
          Ready to Strengthen Your<br />
          <span className={styles.headingOutline}>Industrial Operations?</span>
        </h2>

        <p className={styles.sub}>
          Let&rsquo;s discuss your engineering and maintenance requirements.
          Our team is ready to provide reliable, precision-focused solutions
          for your facility.
        </p>

        <div className={styles.buttons}>
          <a href="mailto:pems.team.pk@gmail.com" className={styles.btnPrimary} id="cta-request-quote">
            Request a Quote
          </a>
          <a href="tel:+923003377221" className={styles.btnSecondary} id="cta-contact-us">
            Contact Us
          </a>
        </div>

        <div className={styles.contactRow}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉</span>
            <span className={styles.contactText}>pems.team.pk@gmail.com</span>
          </div>
          <div className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <span className={styles.contactText}>+92 300 3377221</span>
          </div>
          <div className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span className={styles.contactText}>845H+VVM, Sadiqabad, Pakistan</span>
          </div>
        </div>

      </div>

    </section>
  );
}
