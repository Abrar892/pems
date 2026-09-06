"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CurtainReveal.module.css";

export default function CurtainReveal() {
  const [reveal, setReveal] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start reveal slightly after mount to avoid flashing and ensure layout is ready
    const timer = setTimeout(() => {
      setReveal(true);
    }, 150);

    // Unmount completely after animation ends
    // Max delay = 9 * 50 = 450ms. Transition duration = 1200ms. Total = 1650ms.
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  const numPanels = 10;
  const panels = Array.from({ length: numPanels });

  return (
    <div className={`${styles.curtainContainer} ${reveal ? styles.reveal : ""}`}>
      <div className={styles.panels}>
        {panels.map((_, i) => (
          <div
            key={i}
            className={styles.panel}
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
      <div className={styles.logoWrapper}>
        <Image src="/black_logo.png" alt="PEMS Logo" width={250} height={150} className={styles.logo} priority />
      </div>
    </div>
  );
}
