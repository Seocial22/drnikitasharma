"use client";
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import 'react-multi-carousel/lib/styles.css';
import ElfsightWidget from './ElfsightWidget';

const PatientReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-10% 0px -10% 0px" 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "6rem",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3
      }
    }
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    }
  };

  const widgetVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.6
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="w-full px-4 py-8 md:py-12 lg:py-16 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-100/30 to-teal-200/20 rounded-full"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          rotate: [0, 180, 360],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-teal-200/20 to-teal-300/10 rounded-full"
        animate={{
          y: [5, -5, 5],
          x: [3, -3, 3],
          scale: [1, 1.2, 1],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-teal-500 rounded-full opacity-30"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.7, 0.3],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }
        }}
      />

      {/* Header with higher z-index */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16 relative z-30">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 text-black leading-tight font-playfair"
          variants={titleVariants}
        >
          <span className="inline-block">Patient</span>{" "}
          <motion.span 
            className="inline-block  text-[#14B8A6]"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Reviews
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="h-1 mx-auto bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mb-3 md:mb-4"
          variants={lineVariants}
          style={{ width: 0 }}
        />
        
        <motion.div variants={subtitleVariants}>
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold  inline-block text-[#14B8A6]  leading-relaxed"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            Dr. Nikita Sharma
          </motion.h1>
          <motion.span 
            className="block text-lg md:text-lg lg:text-xl mt-1 text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            B.D.S., M.D.S. (PEDODONTIST)
          </motion.span>
        </motion.div>
      </div>

      {/* Carousel with controlled z-index */}
      <motion.div 
        className="relative z-20"
        variants={widgetVariants}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ElfsightWidget/>
        </motion.div>
      </motion.div>

      {/* Additional floating elements for visual interest */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 border-2 border-teal-200/30 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
      <motion.div 
        className="absolute bottom-32 left-16 w-12 h-12 border border-teal-300/20 rounded-full"
        animate={{
          rotate: [360, 0],
          y: [-5, 5, -5],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-50/10 pointer-events-none z-10" />
    </motion.div>
  );
};

export default PatientReviews;