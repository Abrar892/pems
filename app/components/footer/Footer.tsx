"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">

      {/* ── Main footer content ── */}
      <div className={styles.top}>

        {/* Brand col */}
        <div className={styles.brandCol}>
          <a href="#home" className={styles.logoLink}>
            <img src="/logo.jpg" alt="PEMS Logo" className={styles.logo} />
          </a>
          <p className={styles.brandDesc}>
            Pakistan Engineering Maintenance Service (PEMS) is a specialized
            industrial engineering firm committed to delivering reliable,
            precise, and high-quality maintenance and engineering solutions.
          </p>
          <div className={styles.vision}>
            <span className={styles.visionLabel}>OUR VISION</span>
            <p className={styles.visionText}>
              To become the most trusted provider of industrial engineering and
              maintenance solutions in Pakistan — built on precision, safety,
              and a relentless commitment to quality.
            </p>
          </div>
        </div>

        {/* Navigation col */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.linkList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services col */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linkList}>
            <li><a href="#services">Mechanical Maintenance</a></li>
            <li><a href="#services">Industrial Maintenance</a></li>
            <li><a href="#services">Fabrication</a></li>
            <li><a href="#services">Installation</a></li>
            <li><a href="#services">Inspection</a></li>
          </ul>
        </div>

        {/* Contact col */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>✉</span>
              <a href="mailto:pems.team.pk@gmail.com">pems.team.pk@gmail.com</a>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:+923003377221">+92 300 3377221</a>
            </li>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>845H+VVM, Sadiqabad, Pakistan</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Map ── */}
      <div className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <span className={styles.mapLabel}>OUR LOCATION</span>
          <p className={styles.mapNote}>
            845H+VVM, Sadiqabad, Pakistan
          </p>
        </div>
        <div className={styles.mapEmbed}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.0000000000005!2d68.9714!3d28.3059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b6e0000000001%3A0x0!2s845H%2BVVM%2C+Sadiqabad%2C+Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PEMS Location — 845H+VVM, Sadiqabad, Pakistan"
          />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Pakistan Engineering Maintenance Service (PEMS). All rights reserved.
        </p>
        <div className={styles.legal}>
          <a href="#footer">Privacy Policy</a>
          <span className={styles.legalDot} />
          <a href="#footer">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
