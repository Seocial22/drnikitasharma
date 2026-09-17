import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const words = "Keep your smile clean & shine".split(" ");

  return (
    <section className={styles.heroSection}>
      {/* Decorative background circles — pure CSS, animate on their own */}
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />
      <div className={styles.bgCircle3} />

      {/* Left content area */}
      <div className={styles.leftContent}>
        <h2 className={styles.heading}>
          {words.map((word, index) => (
            <span key={index} className={styles.headingWord}>
              {word}
            </span>
          ))}
        </h2>

        <p className={styles.paragraph}>
          Nivik Smile Care provides comprehensive dental care services for
          the whole family. Our experienced team uses the latest technology
          to deliver high-quality.
        </p>

        <div className={styles.buttonWrapper}>
          <Link href="/appointment">
            <button className={styles.bookButton}>
              <span className="relative z-10">BOOK AN APPOINTMENT</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Right image area — visible immediately, no opacity gate.
          This is the LCP element, so it must be paintable on first render. */}
      <div className={styles.imageArea}>
        <div className={styles.imageFloat}>
          <Image
            src="/images/hero.avif"
            alt="Dental care products and clear aligners"
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
          />
          <div className={styles.imageGlow} />
        </div>
      </div>

      {/* Small decorative dots */}
      <div className={styles.dot1} />
      <div className={styles.dot2} />
    </section>
  );
}