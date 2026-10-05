"use client";

import Image from "next/image";
import styles from "./Industries.module.css";

const INDUSTRIES = [
  { name: "Oil & Gas", image: "/oil&gas.webp" },
  { name: "Petrochemical & Fertilizer", image: "/Petrochemical_and_Fertilizer.jpg" },
  { name: "Pumps & Valves", image: "/pump&valves.jpg" },
  { name: "Heavy Engineering", image: "/HeavyEngineering.png" },
  { name: "Steel & Metal Processing", image: "/steel.jpg" },
  { name: "Power Generation", image: "/power generation.jpeg" },
];

export default function Industries() {
  // We duplicate the array to create a seamless infinite loop in CSS
  const loopedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className={styles.industriesSection} id="industries">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.line} />
          <h2 className={styles.title}>Industries We Serve</h2>
          <div className={styles.line} />
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.track}>
          {loopedIndustries.map((industry, index) => (
            <div key={`${industry.name}-${index}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 768px) 60vw, 25vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.labelWrap}>
                <span className={styles.label}>{industry.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
