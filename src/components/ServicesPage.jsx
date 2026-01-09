"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const clinicsData = [
    {
        name: "Orthodontic Services",
        slug: "orthodontic",
        imageSrc: "/images/orthodontic.webp",
        discription: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile."
    },
    {
        name: "General Dentistry",
        slug: "general-dentistry",
        imageSrc: "/images/general-dentistry.webp",
        discription: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong."
    },
    {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        imageSrc: "/images/cosmetic-dentistry.jpeg",
        discription: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments."
    },
    {
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        imageSrc: "/images/restorative.webp",
        discription: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants."
    },
    {
        name: "Preventive Care",
        slug: "preventive-care",
        imageSrc: "/images/preventive-care.jpeg",
        discription: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues."
    },
    {
        name: "Gum & Periodontal Treatment",
        slug: "gum-periodontal-treatment",
        imageSrc: "/images/gum-periodontal.jpeg",
        discription: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance"
    }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const ServicesPage = () => {
  // Refs for intersection observer
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Check if elements are in view
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Enhanced Header Section */}
      <div 
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-white via-[#f0fffe] to-[#e6f9f7] overflow-hidden"
      >
        {/* Decorative background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#caf4ef] rounded-full -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full translate-x-1/3 translate-y-1/3"
        ></motion.div>
        <motion.div 
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00BCD4] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#007B8A] rounded-full"
        ></motion.div>
        
        <motion.div 
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-[#007B8A] mb-6"
          >
            Our Services
          </motion.h2>

          <h1 className="hidden">Best Dentist in Ajmer - Dr Nikita Sharma</h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience exceptional dental care with our comprehensive range of services designed to keep your smile healthy and beautiful
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 text-lg"
          >
            <Link href="/" className="text-gray-700 hover:text-[#00BCD4] transition-colors duration-300 font-medium">
              Home
            </Link>
            <span className="text-[#00BCD4] text-xl">•</span>
            <span className="text-gray-500 font-medium">Our Services</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Services Grid */}
      <div 
        ref={servicesRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fdfc] to-white"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-2 h-2 bg-[#00BCD4] rounded-full"
          ></motion.div>
          <motion.div 
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-40 right-20 w-3 h-3 bg-[#007B8A] rounded-full"
          ></motion.div>
          <motion.div 
            animate={{
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#caf4ef] rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Choose Your <span className="text-[#007B8A]">Perfect Treatment</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              From routine care to specialized treatments, we offer comprehensive dental solutions tailored to your needs
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clinicsData.map((clinic, index) => (
              <motion.div 
                key={index}
                variants={scaleUp}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl p-6 flex flex-col space-y-6 transition-all duration-500 ease-out border border-gray-100 relative overflow-hidden"
              >
                {/* Card background decoration */}
                <motion.div 
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#caf4ef]/20 to-[#00BCD4]/10 rounded-full -translate-y-1/2 translate-x-1/2"
                ></motion.div>
                <motion.div 
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-0 left-0 w-16 h-16 bg-[#007B8A]/5 rounded-full translate-y-1/2 -translate-x-1/2"
                ></motion.div>
                
                <div className="relative z-10">
                  {/* Image with enhanced styling */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl mb-6 transition-transform duration-500"
                  >
                    <Image
                      src={clinic.imageSrc}
                      alt={clinic.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                    {/* Image overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300"
                    ></motion.div>
                    
                    {/* Service number badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#007B8A] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#007B8A] transition-colors duration-300">
                      {clinic.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                      {clinic.discription}
                    </p>
                    
                    {/* Enhanced CTA Button */}
                 <Link href={`/services/${clinic.slug}`} className="mt-auto">
                                                <motion.button 
                                                    className="group/btn w-full bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-6 py-4 rounded-2xl font-semibold hover:from-[#007B8A] hover:to-[#00BCD4] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 relative overflow-hidden"
                                                    whileHover={{ 
                                                        scale: 1.02,
                                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                                    }}
                                                    whileTap={{ scale: 0.98 }}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                >
                                                    {/* Button background animation */}
                                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                                    
                                                    <span className="relative z-10">Learn More</span>
                                                    <motion.div
                                                        whileHover={{ x: 4 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                    >
                                                        <ArrowRight className="w-5 h-5 relative z-10" />
                                                    </motion.div>
                                                </motion.button>
                                            </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Call-to-Action Section */}
      <div 
        ref={ctaRef}
        className="relative py-20 px-4 bg-gradient-to-br from-[#caf4ef] via-[#b8f0e8] to-[#caf4ef] overflow-hidden"
      >
        {/* Background decorations */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isCtaInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-y-1/2 -translate-x-1/2"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isCtaInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-60 h-60 bg-[#00BCD4]/20 rounded-full translate-y-1/3 translate-x-1/3"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isCtaInView ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></motion.div>

        <motion.div 
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to Transform Your <span className="text-[#007B8A]">Smile?</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Book your consultation today and take the first step towards achieving the perfect smile you've always wanted
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div variants={itemVariants}>
              <Link
                href="/appointment"
                className="bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white px-8 py-4 rounded-2xl font-semibold hover:from-[#007B8A] hover:to-[#00BCD4] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link href="tel:+9179761 22545">
                <button className="bg-white/90 backdrop-blur-sm text-[#007B8A] px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-white/50 hover:border-[#00BCD4]/30">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;