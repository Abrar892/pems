"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [animateIn, setAnimateIn] = useState(false);

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* ================= HERO CONTENT ================= */}

      {/* Decorative Text & Controls */}
      <div className={styles.textContainer}>
        {/* Social Icons */}
        <div className={`${styles.socialIcons} ${animateIn ? styles.animateSocialBox : ""}`}>
          <a href="https://www.instagram.com/" className={animateIn ? styles.animateSocialIcon : ""} style={{ animationDelay: "1.0s" }} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="https://www.facebook.com/" className={animateIn ? styles.animateSocialIcon : ""} style={{ animationDelay: "1.2s" }} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="https://x.com/" className={animateIn ? styles.animateSocialIcon : ""} style={{ animationDelay: "1.4s" }} target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className={`${styles.ctaWrapper} ${animateIn ? styles.animateFadeIn : ""}`}>
          <a href="#services" className={styles.heroCta}>Let&apos;s Build Something</a>
        </div>

        <div className={styles.textWrapperTop}>
          <NextImage
            src="/precision.png"
            alt="Precision"
            width={800}
            height={200}
            className={`${styles.heroImageTop} ${animateIn ? styles.animateTextIn : ""}`}
            priority
          />
        </div>
        <div className={styles.textWrapperBottom}>
          <NextImage
            src="/action.png"
            alt="Action"
            width={800}
            height={200}
            className={`${styles.heroImageBottom} ${animateIn ? styles.animateTextBottomIn : ""}`}
            priority
          />
        </div>
      </div>

      <div className={styles.equipmentContainer}>
        <picture>
          {/* Mobile: portrait 9:16 image for screens < 765px */}
          <source media="(max-width: 764px)" srcSet="/room.png" />
          {/* Desktop: default landscape image */}
          <img
            src="/room2.png"
            alt="PEMS Industrial Facility"
            className={`${styles.equipmentImage} ${animateIn ? styles.animateIn : ""}`}
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </div>

    </section>
  );
}