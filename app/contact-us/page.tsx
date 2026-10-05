"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ContactPage.module.css";
import Footer from "@/app/components/footer/Footer";
import BackToTop from "@/app/components/backtotop/BackToTop";
import { sendContactEmail } from "./actions";

const locations = [
  {
    id: "karachi-hq",
    title: "PEMS Headquarters & Works",
    address: "845H+VVM, Sadiqabad, Pakistan",
    phone: "+92 300 1234567",
    email: "info@pems.com.pk",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28949.12345!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
  },
  {
    id: "lahore-branch",
    title: "Lahore Regional Office",
    address: "Industrial Complex, Multan Road, Lahore, Punjab, Pakistan",
    phone: "+92 321 7654321",
    email: "lahore@pems.com.pk",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435515.228221683!2d74.07127118182281!3d31.48310365985854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d1%3A0xda80d01954117907!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
  },
  {
    id: "islamabad-branch",
    title: "Islamabad Operations Office",
    address: "Sector I-9 Industrial Area, Islamabad, Pakistan",
    phone: "+92 333 9876543",
    email: "islamabad@pems.com.pk",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212450.73030800612!2d72.85265697669033!3d33.61608828987483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
  }
];

export default function ContactPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  
  // Form State
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const el = pageRef.current;
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

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("submitting");
    setFormMessage("");

    const formData = new FormData(event.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setFormStatus("success");
      setFormMessage(result.message || "Message sent successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      setFormStatus("error");
      setFormMessage(result.error || "Failed to send message. Please try again.");
    }
  }

  return (
    <main className={styles.contactPage} ref={pageRef}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTextContent} data-animate style={{ animationDelay: "0s" }}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> &rsaquo; Contact Us
            </div>
          </div>
          <div className={styles.heroGraphicWrap} data-animate style={{ animationDelay: "0.1s" }}>
            <Image 
              src="/contact.jpg" 
              alt="Contact us" 
              fill 
              priority 
              className={styles.heroImage} 
            />
          </div>
        </div>
      </section>

      {/* 2. Top Quick Contact Cards */}
      <section className={styles.quickContactSection}>
        <div className={styles.quickContactGrid}>
          
          <div className={styles.quickCard} data-animate style={{ animationDelay: "0.1s" }}>
            <div className={styles.iconBadge}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 className={styles.cardTitle}>Call us</h3>
            <p className={styles.cardDetail}>(+92) 300 1234567<br/>(+92) 321 7654321</p>
          </div>

          <div className={styles.quickCard} data-animate style={{ animationDelay: "0.2s" }}>
            <div className={styles.iconBadge}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h3 className={styles.cardTitle}>Write to us</h3>
            <p className={styles.cardDetail}>info@pems.com.pk<br/>support@pems.com.pk</p>
          </div>

          <div className={styles.quickCard} data-animate style={{ animationDelay: "0.3s" }}>
            <div className={styles.iconBadge}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </div>
            <h3 className={styles.cardTitle}>Connect with us</h3>
            <div className={styles.socialRow}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Explore Our Locations */}
      <section className={styles.locationsSection}>
        <div className={styles.sectionHeader} data-animate style={{ animationDelay: "0.2s" }}>
          <div className={styles.orangeLine} />
          <h2 className={styles.sectionTitle}>Explore Our Locations</h2>
          <div className={styles.orangeLine} />
        </div>

        <div className={styles.locationsGrid}>
          {/* Left: Location List */}
          <div className={styles.locationsList} data-animate style={{ animationDelay: "0.3s" }}>
            {locations.map((loc) => {
              const isActive = activeLocation.id === loc.id;
              return (
                <div 
                  key={loc.id} 
                  className={`${styles.locationCard} ${isActive ? styles.activeLoc : ""}`}
                  onClick={() => setActiveLocation(loc)}
                >
                  <div className={styles.locInfo}>
                    <h4 className={styles.locTitle}>{loc.title}</h4>
                    <p className={styles.locAddress}>{loc.address}</p>
                    <p className={styles.locPhone}>Mobile: {loc.phone}</p>
                    <p className={styles.locEmail}>Email: {loc.email}</p>
                  </div>
                  <div className={styles.locPin}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isActive ? "#FF9900" : "none"} stroke={isActive ? "#FF9900" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="#fff"></circle></svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Map Embed */}
          <div className={styles.mapContainer} data-animate style={{ animationDelay: "0.4s" }}>
            <iframe 
              src={activeLocation.mapEmbedUrl}
              className={styles.mapIframe}
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. Let's get in touch! */}
      <section className={styles.contactFormSection}>
        <div className={styles.sectionHeader} data-animate style={{ animationDelay: "0.3s" }}>
          <div className={styles.orangeLine} />
          <h2 className={styles.sectionTitle}>Let&apos;s get in touch!</h2>
          <div className={styles.orangeLine} />
        </div>

        <form className={styles.contactForm} onSubmit={handleFormSubmit} data-animate style={{ animationDelay: "0.4s" }}>
          <div className={styles.formRow}>
            <input type="text" name="fullName" placeholder="Full Name *" required className={styles.inputField} />
            <input type="email" name="email" placeholder="Your Email *" required className={styles.inputField} />
          </div>
          <div className={styles.formRow}>
            <input type="tel" name="phone" placeholder="Your Phone *" required className={styles.inputField} />
            <input type="text" name="subject" placeholder="Subject *" required className={styles.inputField} />
          </div>
          <div className={styles.formRowFull}>
            <textarea name="comment" placeholder="Comment *" required className={styles.textArea} rows={5}></textarea>
          </div>
          
          {formMessage && (
            <div className={`${styles.formMessage} ${formStatus === "success" ? styles.successMsg : styles.errorMsg}`}>
              {formMessage}
            </div>
          )}

          <div className={styles.formSubmitRow}>
            <button type="submit" className={styles.submitBtn} disabled={formStatus === "submitting"}>
              <span className={styles.submitIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
              <span className={styles.submitText}>
                {formStatus === "submitting" ? "Sending..." : "Send A Message"}
              </span>
            </button>
          </div>
        </form>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
