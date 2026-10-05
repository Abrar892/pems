"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>

        {/* ── Top header row ── */}
        <div className={styles.topHeader}>
          <h2 className={styles.topTitle}>Talk to our Engineer</h2>
        </div>

        {/* ── Contact card ── */}
        <div className={styles.contactCard}>
          <div className={styles.contactCol}>
            <span className={styles.contactLabel}>Visit us at</span>
            <p className={styles.contactText}>
              845H+VVM, Sadiqabad, Pakistan
            </p>
          </div>
          <div className={`${styles.contactCol} ${styles.contactColBorder}`}>
            <span className={styles.contactLabel}>Write to us</span>
            <p className={styles.contactText}>
              <a href="mailto:info@pems.com.pk">info@pems.com.pk</a><br />
              <a href="mailto:support@pems.com.pk">support@pems.com.pk</a>
            </p>
          </div>
          <div className={`${styles.contactCol} ${styles.contactColBorder}`}>
            <span className={styles.contactLabel}>Talk to us</span>
            <p className={styles.contactText}>
              <a href="tel:+923001234567">(+92) 300 1234567</a><br />
              <a href="tel:+923217654321">(+92) 321 7654321</a>
            </p>
          </div>
        </div>

        {/* ── Bottom 3-col grid ── */}
        <div className={styles.bottomGrid}>

          {/* Col 1 — Useful Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Useful Links</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Free Demo</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">HSE Policy</a></li>
              <li><a href="#">Quality Policy</a></li>
              <li><a href="#">Distributor</a></li>
              <li><a href="#">Exhibitions</a></li>
            </ul>
          </div>

          {/* Col 2 — Company */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#services">Products</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>

         

        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Pakistan Engineering Maintenance Service (PEMS). All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <span className={styles.dot} />
            <a href="#">Terms of Service</a>
            <span className={styles.dot} />
            <a href="#">HSE Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
