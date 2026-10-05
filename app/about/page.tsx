"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./AboutPage.module.css";
import Footer from "@/app/components/footer/Footer";

export default function AboutPage() {
  // Intersection Observer for staggered fade-up animations
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = storyRef.current;
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
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.aboutPage}>
      
      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroImages}>
          <div className={`${styles.heroImageWrap} ${styles.heroImgLeft}`}>
            <NextImage src="/company.png" alt="PEMS Company Facility" fill sizes="(max-width: 768px) 100vw, 45vw" priority />
            <div className={styles.heroTextContent}>
              <h1 className={styles.heroTitle}>WHO WE ARE</h1>
              <div className={styles.breadcrumb}>
                <Link href="/">HOME</Link> / ABOUT US
              </div>
            </div>
          </div>
          <div className={`${styles.heroImageWrap} ${styles.heroImgCenter}`}>
            <NextImage src="/print.png" alt="Engineering Blueprint" fill sizes="(max-width: 768px) 100vw, 56vw" priority />
          </div>
          <div className={`${styles.heroImageWrap} ${styles.heroImgRight}`}>
            <NextImage src="/company inside.png" alt="Company Interior" fill sizes="(max-width: 768px) 100vw, 45vw" priority />
          </div>
        </div>
      </section>

      {/* ── Our Story Split-Grid Section ── */}
      <section className={styles.storySection} ref={storyRef}>
        <div className={styles.storyInner}>

          {/* LEFT — Text Column */}
          <div className={styles.storyLeft}>
            <h2
              className={styles.storyHeadline}
              data-animate
              style={{ animationDelay: "0s" }}
            >
              Our Story Began With A Vision
            </h2>

            <p
              className={styles.storyIntro}
              data-animate
              style={{ animationDelay: "0.1s" }}
            >
              Pakistan Engineering Maintenance Service (PEMS) is an industrial mechanical engineering, maintenance,
              and specialized engineering services company. We focus on precision engineering, industrial maintenance,
              specialized mechanical services, fabrication, and on-site engineering work.
            </p>

            <blockquote
              className={styles.storyQuote}
              data-animate
              style={{ animationDelay: "0.2s" }}
            >
              Recognized as Joint Integrity Experts, PEMS delivers comprehensive joint integrity solutions through
              precision bolting and machining systems, assembly-line tools, Rental Services controlled bolting,
              on-site machining, and other specialized services—along with tool rentals,{" "}
              <strong>24x7 after-sales support</strong> &amp; <strong>professional training</strong> provided by
              skilled and experienced personnel.
            </blockquote>

            <p
              className={styles.storyClosing}
              data-animate
              style={{ animationDelay: "0.3s" }}
            >
              With a commitment to precision cutting, machining, hydraulic bolting, drilling, hydro testing,
              welding, and comprehensive industrial inspection, we ensure the operational integrity and efficiency
              of critical industrial infrastructure.
            </p>
          </div>

          {/* RIGHT — Image + Metrics */}
          <div className={styles.storyRight}>
            <div className={styles.storyImageWrap} data-animate style={{ animationDelay: "0.1s" }}>
              <NextImage
                src="/company.png"
                alt="PEMS Team & Facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.storyImage}
              />
            </div>

            <div className={styles.metricsGrid}>
              {[
                { value: "50+", label: "Unique Customers Served" },
                { value: "200+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div
                  key={stat.value}
                  className={styles.metricCard}
                  data-animate
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  <span className={styles.metricValue}>{stat.value}</span>
                  <span className={styles.metricLabel}>{stat.label}</span>
                  <svg className={styles.metricArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={styles.missionVision}>
        <div className={`${styles.mvCard} ${styles.mission}`}>
          <h3 className={styles.mvTitle}>
            <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="m142.559 416.446v-25.626l-45.45-25.496v75.491c0 3.82-3.099 6.919-6.919 6.919s-6.919-3.099-6.919-6.919v-87.306c0-2.455 1.302-4.73 3.423-5.968 2.113-1.252 4.734-1.27 6.883-.068l59.284 33.261c2.185 1.225 3.536 3.532 3.536 6.036v29.676c0 3.82-3.099 6.919-6.919 6.919s-6.919-3.099-6.919-6.919zm-127.262-70.478v-82.473c0-23.516 23.225-34.043 46.243-34.043h5.753c-9.188-8.479-15.19-22.112-15.19-37.507 0-23.622 14.189-38.295 37.027-38.295 22.842 0 37.032 14.673 37.032 38.295 0 15.395-6.002 29.028-15.191 37.507h54.3c2.207 0 3.959-.288 6.054-.995l25.852-8.732 17.459-6.095 37.779-13.345c3.356-1.185 5.878-2.928 8.171-5.653l12.122-14.412c13.68-16.275 24.482-29.131 44.64-29.131l18.13-.196c-10.613-8.408-17.702-23.24-17.702-40.151 0-24.065 14.455-39.016 37.721-39.016 23.27 0 37.725 14.95 37.725 39.016 0 16.609-6.83 31.229-17.128 39.711h42.08l.107-40.9c0-10.858 7.237-19.679 17.329-22.493v-80.141c0-3.822 3.099-6.919 6.919-6.919h62.554c2.419 0 4.662 1.264 5.914 3.331 1.257 2.068 1.338 4.64.221 6.784l-7.275 13.971 7.275 13.971c1.117 2.144 1.036 4.716-.221 6.784-1.252 2.068-3.495 3.331-5.914 3.331h-55.635v39.052c9.527 3.009 16.5 11.823 16.5 22.331v64.187c0 13.133-10.676 23.818-23.793 23.818l-29.005 1.158c-5.59.007-10.622 2.11-14.437 5.932s-5.919 8.865-5.919 14.198v46.108l57.347 33.153c2.14 1.239 3.455 3.523 3.455 5.991v57.856c0 3.82-3.099 6.919-6.919 6.919s-6.919-3.099-6.919-6.919v-53.866l-57.347-33.153c-2.14-1.239-3.455-3.523-3.455-5.991v-50.099c0-9.025 3.541-17.538 9.964-23.975 6.432-6.441 14.941-9.986 23.955-9.986l29.005-1.158c5.766-.007 10.23-4.484 10.23-9.986v-64.187c0-5.34-4.347-9.685-9.689-9.685-5.968 0-10.302 4.072-10.302 9.685l-.09 42.263c0 7.151-5.82 13.032-12.977 13.108l-101.626.003c-13.207 0-20.387 7.854-34.122 24.196l-12.131 14.417c-3.919 4.658-8.414 7.768-14.149 9.795l-25.343 8.953c1.947 2.03 3.595 4.404 4.74 7.151 1.579 3.786 2.023 7.819 1.542 11.782l36.197-11.178c3.45-1.065 6.068-2.736 8.482-5.423l19.194-21.351c1.919-2.135 4.95-2.865 7.622-1.833 2.676 1.025 4.441 3.595 4.441 6.459v180.867c0 3.82-3.099 6.919-6.919 6.919s-6.919-3.099-6.919-6.919v-162.825l-7.131 7.932c-4.126 4.59-8.793 7.574-14.689 9.392l-55.023 16.991c-.006.002-.012.002-.018.003l-39.541 14.107c-3.68 1.311-7.072 1.896-10.995 1.896h-18.626c-5.14 0-10.005 2.036-13.698 5.739-3.694 3.698-5.73 8.577-5.73 13.73v35.149l55.982 32.365c2.14 1.239 3.455 3.523 3.455 5.991v47.212c0 3.82-3.099 6.919-6.919 6.919s-6.919-3.099-6.919-6.919v-43.221l-55.982-32.365c-2.14-1.239-3.455-3.523-3.455-5.991v-39.14c0-8.847 3.473-17.194 9.775-23.509 6.311-6.32 14.653-9.797 23.491-9.797h18.626c2.329 0 4.167-.315 6.347-1.095l39.842-14.203c2.018-.849 3.847-2.685 4.815-5.043.968-2.36.964-4.959-.023-7.32-2.032-4.876-7.64-7.189-12.495-5.171-.144.061-35.396 11.975-35.396 11.975-3.532 1.191-6.766 1.723-10.482 1.723h-103.731c-3.315 0-32.405.568-32.405 20.205v82.473c0 8.847 6.1 16.301 14.514 19.031v-91.148c0-3.82 3.099-6.919 6.919-6.919s6.919 3.099 6.919 6.919v99.198c0 .016.005.03.005.045s-.005.029-.005.045v67.676c0 3.82-3.099 6.919-6.919 6.919s-6.919-3.099-6.919-6.919v-61.468c-16.147-3.115-28.353-16.894-28.353-33.378zm434.149-311.635h44.23l-3.671-7.052c-1.045-2.002-1.045-4.39 0-6.392l3.671-7.052h-44.23zm-117.833 76.41c0 18.538 10.712 33.622 23.883 33.622s23.887-15.083 23.887-33.622c0-21.908-14.964-25.178-23.887-25.178-8.919 0-23.883 3.271-23.883 25.178zm-265.672 81.203c0 18.038 10.401 32.712 23.189 32.712s23.194-14.673 23.194-32.712c0-21.279-14.532-24.457-23.194-24.457s-23.189 3.178-23.189 24.457zm342.221 176.928c3.82 0 6.919-3.099 6.919-6.919v-39.919c0-2.505-1.351-4.811-3.536-6.036l-60.653-34.023c-2.135-1.203-4.761-1.185-6.878.068-2.122 1.239-3.423 3.514-3.423 5.968v100.748c0 3.82 3.099 6.919 6.919 6.919s6.919-3.099 6.919-6.919v-88.932l46.815 26.261v35.865c-.001 3.82 3.098 6.919 6.918 6.919zm96.919 26.099h-124.54c-3.82 0-6.919 3.099-6.919 6.919v20.829h-117.622c-3.82 0-6.919 3.099-6.919 6.919v16.23h-117.622c-3.82 0-6.919 3.099-6.919 6.919v19.225h-117.621c-3.82 0-6.919 3.099-6.919 6.919v26.149c0 3.819 3.099 6.918 6.919 6.918s6.919-3.099-6.919-6.919v-19.23h110.703v19.23c0 3.82 3.099 6.919 6.919 6.919s6.919-3.099 6.919-6.919v-45.374h110.703v45.374c0 3.82 3.099 6.919 6.919 6.919s6.919-3.099 6.919-6.919v-68.523h110.703v68.523c0 3.82 3.099 6.919 6.919 6.919s6.919-3.099 6.919-6.919v-96.27h110.703v96.27c0 3.82 3.099 6.919 6.919 6.919s6.919-3.099 6.919-6.919v-103.189c-.002-3.82-3.101-6.919-6.921-6.919z"/>
            </svg>
            Mission
          </h3>
          <p className={styles.mvText}>
            To deliver reliable engineering services that prioritize precision, safety, and quality. 
            We are dedicated to efficient execution, ensuring that every project meets and exceeds 
            exacting customer requirements safely and dependably.
          </p>
        </div>
        
        <div className={styles.mvCard}>
          <h3 className={styles.mvTitle}>
            <svg width="32" height="32" viewBox="0 0 513.441 513.441" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <g>
                <path d="m31 332.29c0 50.079 40.742 90.821 90.821 90.821 50.078 0 90.82-40.742 90.82-90.821s-40.742-90.821-90.82-90.821c-50.079-.001-90.821 40.741-90.821 90.821zm166.642 0c0 41.808-34.013 75.821-75.82 75.821s-75.822-34.013-75.822-75.821 34.014-75.821 75.821-75.821 75.821 34.012 75.821 75.821z"/>
                <path d="m496.199 269.876c-.018-.039-.031-.08-.05-.119l-60.835-126.121c-8.405-17.427-22.366-31.251-39.118-39.765l-5.742-11.906c-9.563-19.825-29.965-32.634-51.975-32.634-31.818 0-57.704 25.886-57.704 57.705v22.157c-5.056 9.065-8.538 19.12-10.077 29.797h-27.953c-1.539-10.677-5.021-20.733-10.078-29.799v-22.155c0-31.818-25.886-57.705-57.704-57.705-22.01 0-42.411 12.81-51.975 32.635l-5.742 11.905c-16.752 8.515-30.713 22.339-39.118 39.765l-10.537 21.844c-1.8 3.73-.234 8.214 3.496 10.014 3.731 1.798 8.214.235 10.014-3.497l10.537-21.845c11.944-24.764 37.429-40.765 64.923-40.765 39.746 0 72.082 32.335 72.082 72.081v92.264c-7.062-12.872-16.47-24.515-27.946-34.274-3.155-2.684-7.889-2.3-10.571.854-2.684 3.155-2.301 7.889.854 10.572 23.936 20.355 37.663 50.026 37.663 81.405 0 58.901-47.92 106.821-106.821 106.821s-106.822-47.919-106.822-106.82 47.92-106.821 106.821-106.821c15.311 0 30.089 3.169 43.925 9.419 3.771 1.704 8.217.028 9.923-3.748 1.705-3.775.027-8.217-3.747-9.922-15.79-7.132-32.646-10.749-50.101-10.749-26.016 0-50.15 8.202-69.962 22.15l15.321-31.764c1.8-3.731.234-8.214-3.496-10.014-3.729-1.796-8.214-.234-10.014 3.497l-36.378 75.419c-.019.039-.032.08-.05.119-10.941 18.266-17.242 39.616-17.242 62.414 0 67.172 54.648 121.821 121.821 121.821 66.326 0 120.435-53.281 121.789-119.288h26.222c1.354 66.007 55.463 119.288 121.788 119.288 67.173 0 121.821-54.649 121.821-121.821 0-22.798-6.3-44.148-17.242-62.414zm-74.395-119.724 39.777 82.465c-19.811-13.947-43.945-22.149-69.961-22.149-45.98 0-86.087 25.609-106.82 63.31v-92.31c0-39.746 32.335-72.081 72.081-72.081 27.494 0 52.978 16.002 64.923 40.765zm-152.004 169.671h-26.157v-135.834h26.157zm68.679-245.492c15.552 0 29.999 8.653 37.436 22.203-6.185-1.403-12.562-2.146-19.034-2.146-23.787 0-45.374 9.591-61.106 25.104v-2.456c-.001-23.548 19.157-42.705 42.704-42.705zm-181.918 20.056c-6.472 0-12.849.743-19.034 2.146 7.438-13.55 21.885-22.203 37.436-22.203 23.547 0 42.704 19.157 42.704 42.705v2.456c-15.732-15.513-37.319-25.104-61.106-25.104zm235.059 344.724c-58.901 0-106.82-47.92-106.82-106.821s47.919-106.821 106.82-106.821 106.821 47.92 106.821 106.821-47.92 106.821-106.821 106.821z"/>
                <path d="m425.693 248.123c-3.838-1.56-8.214.289-9.771 4.126-1.56 3.838.288 8.212 4.126 9.771 28.79 11.694 47.393 39.277 47.393 70.269 0 41.808-34.014 75.821-75.821 75.821s-75.82-34.013-75.82-75.821c0-41.725 33.945-75.736 75.671-75.817 4.142-.008 7.493-3.373 7.485-7.515-.008-4.137-3.364-7.485-7.5-7.485-.005 0-.01 0-.015 0-49.979.097-90.642 40.838-90.642 90.817 0 50.079 40.742 90.821 90.82 90.821 50.079 0 90.821-40.742 90.821-90.821.001-37.125-22.273-70.163-56.747-84.166z"/>
              </g>
            </svg>
            Vision
          </h3>
          <p className={styles.mvText}>
            To be recognized as a trusted industrial engineering and maintenance partner. 
            Through precision-driven engineering and technical excellence, we strive to build 
            long-term industrial relationships based on dependable execution.
          </p>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className={styles.coreValues}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Core Values</h2>
        
        <div className={styles.valuesGrid}>
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div>
              <h4 className={styles.valueTitle}>Precision</h4>
              <p className={styles.valueDesc}>Exactness in every technical execution and measurement.</p>
            </div>
          </div>
          
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div>
              <h4 className={styles.valueTitle}>Safety</h4>
              <p className={styles.valueDesc}>Uncompromising commitment to safe operational practices.</p>
            </div>
          </div>
          
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div>
              <h4 className={styles.valueTitle}>Reliability</h4>
              <p className={styles.valueDesc}>Consistent, dependable delivery of critical industrial services.</p>
            </div>
          </div>
          
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <div>
              <h4 className={styles.valueTitle}>Technical Excellence</h4>
              <p className={styles.valueDesc}>High standards in mechanical engineering and specialized solutions.</p>
            </div>
          </div>
          
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </div>
            <div>
              <h4 className={styles.valueTitle}>Integrity</h4>
              <p className={styles.valueDesc}>Honest, transparent partnerships with all industrial clients.</p>
            </div>
          </div>
          
          <div className={styles.valueItem}>
            <div className={styles.valueIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <div>
              <h4 className={styles.valueTitle}>Continuous Improvement</h4>
              <p className={styles.valueDesc}>Constantly evolving our methods to meet modern industrial demands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manufacturing Philosophy ── */}
      <section className={styles.capabilities}>
        <div className={styles.capImage}>
          <NextImage src="/massive-steel.avif" alt="PEMS Manufacturing Facility" fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className={styles.capContent}>
          <h2 className={styles.sectionTitle}>Manufacturing Philosophy</h2>
          <p className={styles.whoText}>
            PEMS is a technology-driven manufacturing organization focused on delivering precise, reliable, and high-performance joint integrity solutions for critical industrial applications. Our advanced manufacturing facility, equipped with CNC and VMC machines, is supported by a skilled engineering team specializing in precision machining and automation.
          </p>
          <p className={styles.whoText} style={{ marginTop: '16px' }}>
            Proudly manufacturing high-quality hydraulic torque wrenches and bolt tensioning tools, we combine global quality standards with cost-effective innovation to meet demanding safety and performance requirements.
          </p>
          
          <ul className={styles.capList}>
            <li>Integrated machining, assembly, and testing</li>
            <li>Scalable capacity for project and volume requirements</li>
            <li>Controlled material specifications</li>
            <li>Automated inventory management</li>
            <li>Custom tools for specific applications and torque ranges</li>
            <li>Qualified supplier base</li>
            <li>Certified to ATEX and CE standards</li>
            <li>In-process quality checks and final inspection at every critical stage</li>
          </ul>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />

    </main>
  );
}
