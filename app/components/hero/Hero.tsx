"use client";

import { useEffect, useState, useCallback } from "react";
import NextImage from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [animateIn, setAnimateIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock / restore body scroll when menu opens / closes
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <section className={styles.hero} id="home">

      {/* ================= NAVBAR ================= */}
      <nav className={`${styles.navbar} ${animateIn ? styles.animateNavbarIn : ""}`}>

        {/* Left Group */}
        <div className={styles.navLeft}>
          <a href="#home" className={styles.logo}>
            <NextImage
              src="/logo.jpg"
              alt="PEMS Logo"
              width={150}
              height={90}
              priority
              quality={85}
            />
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
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <button
          className={styles.mobileMenuClose}
          aria-label="Close navigation menu"
          onClick={closeMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
      </div>


      {/* ================= HERO CONTENT ================= */}

      {/* Decorative Text & Controls */}
      <div className={styles.textContainer}>
        {/* Social Icons */}
        <div className={`${styles.socialIcons} ${animateIn ? styles.animateFadeIn : ""}`}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className={`${styles.ctaWrapper} ${animateIn ? styles.animateFadeIn : ""}`}>
          <a href="#contact" className={styles.heroCta}>Let&apos;s Build Something</a>
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
          src="/equip.png"
          alt="Industrial Equipment Cabinet"
          className={`${styles.equipmentImage} ${animateIn ? styles.animateIn : ""}`}
          fetchPriority="high"
          decoding="sync"
        />
      </div>

    </section>
  );
}