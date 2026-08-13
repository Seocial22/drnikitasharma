"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const words = "Keep your smile clean & shine".split(" ");

  // Only the button's hover/tap interaction needs Framer Motion —
  // it's a JS-driven interaction, not part of the initial paint,
  // so it's fine for it to "wake up" after hydration.
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

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
            <motion.button
              className={styles.bookButton}
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">BOOK AN APPOINTMENT</span>
            </motion.button>
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
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