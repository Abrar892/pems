"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Start equipment animation after curtain has largely cleared (1600ms)
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">

      {/* ================= NAVBAR ================= */}
      <nav className={`${styles.navbar} ${animateIn ? styles.animateNavbarIn : ""}`}>

        {/* Left Group */}
        <div className={styles.navLeft}>
          <a href="#home" className={styles.logo}>
            <img src="/logo.jpg" alt="PEMS Logo" />
          </a>

          {/* Navigation links */}
          <div className={styles.navLinks}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
          </div>
        </div>

        {/* Right Group */}
        <div className={styles.navRight}>
          <a href="#contact" className={styles.quoteButton}>
            CONTACT US
          </a>

          {/* Mobile hamburger */}
          <button
            className={styles.mobileMenuBtn}
            aria-label="Open navigation menu"
            onClick={() => {
              const menu = document.getElementById("mobileMenu");
              if (menu) menu.classList.toggle(styles.mobileMenuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </nav>

      {/* Mobile menu overlay */}
      <div id="mobileMenu" className={styles.mobileMenu}>
        <a href="#home" onClick={() => document.getElementById("mobileMenu")?.classList.remove(styles.mobileMenuOpen)}>Home</a>
        <a href="#about" onClick={() => document.getElementById("mobileMenu")?.classList.remove(styles.mobileMenuOpen)}>About Us</a>
        <a href="#services" onClick={() => document.getElementById("mobileMenu")?.classList.remove(styles.mobileMenuOpen)}>Services</a>
        <a href="#contact" onClick={() => document.getElementById("mobileMenu")?.classList.remove(styles.mobileMenuOpen)}>Contact Us</a>
      </div>


      {/* ================= HERO CONTENT ================= */}

      {/* Decorative Text & Controls */}
      <div className={styles.textContainer}>
        {/* Social Icons */}
        <div className={`${styles.socialIcons} ${animateIn ? styles.animateNavbarIn : ""}`}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.0.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.0.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
            <svg xmlns="http://www.0.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className={`${styles.ctaWrapper} ${animateIn ? styles.animateNavbarIn : ""}`}>
          <a href="#contact" className={styles.heroCta}>Let's Build Something</a>
        </div>

        <div className={styles.textWrapperTop}>
          <span className={`${styles.heroTextTop} ${animateIn ? styles.animateTextIn : ""}`}>Precision</span>
        </div>
        <div className={styles.textWrapperBottom}>
          <span className={`${styles.heroTextBottom} ${animateIn ? styles.animateTextBottomIn : ""}`}>Driven</span>
        </div>
      </div>

      <div className={styles.equipmentContainer}>
        <img
          src="/equipment (2).png"
          alt="Industrial Equipment Cabinet"
          className={`${styles.equipmentImage} ${animateIn ? styles.animateIn : ""}`}
        />
      </div>

    </section>
  );
}