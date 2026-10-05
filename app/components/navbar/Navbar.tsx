"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ENGINEERING_SERVICES = [
  "Industrial Equipment Maintenance",
  "Fabrication & Engineering",
  "Installation & Commissioning",
  "Preventive & Corrective Maintenance",
  "Industrial Inspection",
];

const PRECISION_SERVICES = [
  "Pipe Cold Cutting & Beveling",
  "Laser Cutting",
  "Magnetic Drilling / Pipe Holing",
  "Hydraulic Bolt Torquing & Bolt Tensioning",
  "Diamond Core Cutting",
  "Hydro Testing",
  "Multi Welding",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const megaMenuRef = useRef<HTMLLIElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock / restore body scroll when mobile menu opens / closes
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Left Group */}
          <div className={styles.navLeft}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              <NextImage
                src="/logo.jpg"
                alt="PEMS Logo"
                width={150}
                height={90}
                priority
                quality={85}
              />
            </Link>

            {/* Navigation links */}
            <ul className={styles.navLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              
              <li 
                ref={megaMenuRef}
                className={styles.servicesDropdown}
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button 
                  className={`${styles.servicesTrigger} ${megaMenuOpen ? styles.active : ""}`}
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  aria-expanded={megaMenuOpen}
                >
                  Services
                  <svg className={styles.chevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {/* Mega Menu Desktop */}
                <div className={`${styles.megaMenu} ${megaMenuOpen ? styles.open : ""}`}>
                  <div className={styles.megaCol}>
                    <h4>Engineering & Maintenance</h4>
                    <ul>
                      {ENGINEERING_SERVICES.map(service => (
                        <li key={service}>
                          <Link href="/#services" onClick={closeMenu}>{service}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.megaCol}>
                    <h4>Precision Services</h4>
                    <ul>
                      {PRECISION_SERVICES.map(service => (
                        <li key={service}>
                          <Link href="/#services" onClick={closeMenu}>{service}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right Group */}
          <div className={styles.navRight}>
            <Link href="/contact-us" className={styles.quoteButton}>
              Get in touch
            </Link>

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

        <Link href="/" onClick={closeMenu}>Home</Link>
        
        <div className={styles.mobileServices}>
          <button 
            className={`${styles.mobileServicesBtn} ${mobileServicesOpen ? styles.active : ""}`}
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services
            <svg className={styles.chevron} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {mobileServicesOpen && (
            <div className={styles.mobileServicesList}>
              {[...ENGINEERING_SERVICES, ...PRECISION_SERVICES].map(service => (
                <Link key={service} href="/#services" onClick={closeMenu}>{service}</Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/contact-us" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}
