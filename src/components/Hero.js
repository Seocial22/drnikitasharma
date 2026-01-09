"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const mainControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      mainControls.start("visible");
      setHasAnimated(true);
    }
  }, [isInView, mainControls, hasAnimated]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const fadeInLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleInVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      scale: 0.95,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 40
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const words = "Keep your smile clean & shine".split(" ");

  return (
    <motion.section 
      ref={ref}
      className="bg-[#bcf7f1] py-12 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between rounded-bl-[64px] rounded-br-[64px] min-h-[650px] md:min-h-[600px] relative overflow-hidden"
      variants={backgroundVariants}
      initial="hidden"
      animate={mainControls}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/15 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/8 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Left content area */}
      <motion.div 
        className="lg:max-w-[50%] z-10 mb-12 lg:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {/* Animated title with word-by-word reveal */}
        <motion.h2 
          className="text-4xl font-playfair md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          variants={titleVariants}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3 justify-center "
              variants={wordVariants}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                color: "#14b8a6",
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p 
          className="text-gray-700 max-w-lg mb-10"
          variants={fadeInUpVariants}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Nivik Smile Care provides comprehensive dental care services for the whole family. Our experienced team uses the latest technology to deliver high-quality.
          </motion.span>
        </motion.p>

        <motion.div
          variants={fadeInUpVariants}
        >
          <Link href="/appointment">
            <motion.button 
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-sm relative overflow-hidden group"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0, borderRadius: "50%" }}
                whileHover={{ 
                  scale: 1.5, 
                  borderRadius: "25px",
                  transition: { duration: 0.4 }
                }}
              />
              
              {/* Button text */}
              <motion.span 
                className="relative z-10 group-hover:font-bold transition-colors duration-300"
                initial={{ y: 0 }}
                whileHover={{ y: -1 }}
              >
                BOOK AN APPOINTMENT
              </motion.span>
              
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.6 }
                }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right image area */}
      <motion.div
        className="w-full lg:w-[45%] h-64 md:h-96 lg:h-[500px] flex items-center justify-center absolute bottom-0 right-0"
        variants={scaleInVariants}
        initial="hidden"
        animate={mainControls}
      >
        <motion.div 
          className="relative w-full h-full"
          variants={floatingVariants}
          animate="animate"
        >
          {/* Image with parallax effect */}
          <motion.div
            className="relative w-full h-full"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/images/hero.avif"
              alt="Dental care products and clear aligners"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
            
            {/* Image glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-teal-200/20 to-transparent pointer-events-none"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-4 h-4 bg-teal-400 rounded-full opacity-60"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-6 h-6 bg-teal-300 rounded-full opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.section>
  );
}