"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BiLocationPlus } from "react-icons/bi";
import { BiClinic } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

import {
  Clock,
  Stethoscope,
  Wallet,
  Heart,
  Thermometer,
  MonitorSmartphone,
} from "lucide-react";
import PatientReviews from "./PatientReviews";
import PhoneCallCTA from "./PhoneCallCTA";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const AboutUsSection = () => {
  // Refs for intersection observer
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  
  // Check if elements are in view
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
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
            About Us
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Providing gentle, personalized dental care to keep your smile healthy and bright.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 text-lg"
          >
            <Link href="/" className="text-gray-700 hover:text-[#00BCD4] transition-colors duration-300 font-medium">
              Home
            </Link>
            <span className="text-[#00BCD4] text-xl">•</span>
            <span className="text-gray-500 font-medium">About Us</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Section 1: Image + Heading */}
      <div 
        ref={section1Ref}
        className="bg-[#caf4ef] mt-16 px-6 py-16 rounded-tl-[120px] rounded-tr-[30px] rounded-bl-[120px] rounded-br-[120px] max-w-7xl mx-auto mb-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <motion.div 
            initial="hidden"
            animate={isSection1InView ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-6">
              A trusted dental professional,<br />
              committed to your care<br />
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-poppins">
              With global training and clinical experience, I focus on offering quality dental care in a calm, hygienic, and patient-friendly environment. Every step—from diagnosis to treatment—is approached with care and attention, aiming to make your visit as comfortable and effective as possible.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial="hidden"
            animate={isSection1InView ? "visible" : "hidden"}
            variants={slideInFromRight}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Team of Dentists"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-[20px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Feature Cards */}
      <div 
        ref={featuresRef}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <motion.div 
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700"
        >
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mt-1 md:mt-0 shrink-0">
              <Clock color="#2EC4B6" size={60} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-black">24 Hours Ready</h3>
              <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                Emergency dental care services are available around the clock, including weekends and holidays, to address urgent dental issues such as severe pain or infection.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mt-1 md:mt-2 shrink-0">
              <Stethoscope color="#2EC4B6" size={60} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-black">Accurate Diagnostics</h3>
              <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                The dental team's ability to correctly identify and diagnose dental problems using advanced diagnostic tools and techniques to develop an effective treatment plan for the patient's needs.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mt-1 md:mt-2 shrink-0">
              <Wallet color="#2EC4B6" size={60} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-black">Pay In Installment</h3>
              <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                Clinic allows patients to break down the cost of their treatment into smaller payments over time, making dental care more accessible and manageable.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mt-1 md:mt-2 shrink-0">
              <Heart color="#2EC4B6" size={60} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-black">Work from Heart</h3>
              <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                Approaching the profession with empathy and compassion, prioritizing the patient's comfort and satisfaction for a positive dental experience.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mt-1 md:mt-2 shrink-0">
              <Thermometer color="#2EC4B6" size={60} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-black">Regular Checkup</h3>
              <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                Comprehensive examination of teeth, gums, and mouth, crucial for maintaining oral health and preventing dental problems.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mt-1 md:mt-2 shrink-0">
              <MonitorSmartphone color="#2EC4B6" size={60} />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-black">Online Booking</h3>
              <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                Allows patients to schedule appointments online with flexibility and convenience, streamlining the process for the clinic.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section 3: Stats Section */}
      <div 
        ref={statsRef}
        className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <motion.div 
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={slideInFromLeft}
          className="w-full lg:w-1/2 relative"
        >
          <Image
            src="/images/similing-pateint.avif"
            alt="Smiling Patient"
            width={500}
            height={350}
            className="rounded-[40px] object-cover w-full max-w-[500px] h-auto shadow-xl"
          />
        </motion.div>
        <motion.div 
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-8 text-center"
        >
          {[
            { icon: <BiLocationPlus className="w-10 h-10 text-teal-500" />, 
              value: "10+", label: "Years Experience" },
            { icon: <BiClinic className="w-10 h-10 text-teal-500"/>, 
              value: "1", label: "Clinic" },
            { icon: <FaPeopleGroup className="w-10 h-10 text-teal-500" />, 
              value: "5000+", label: "Happy Patients" },
            { icon: <BsFillCalendar2CheckFill className="w-8 h-8 mb-[5px] text-teal-500"/>, 
              value: "500+", label: "Online Appointment" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={scaleUp}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              
                 <div className='flex justify-center'> {stat.icon}</div>
               
              <h3 className="text-3xl font-bold text-black">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section 4: Contact Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <PhoneCallCTA/>
      </motion.div>

      {/* Section 6: What They Say About Us */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-white px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto"
      >
        <PatientReviews/>
      </motion.section>
    </>
  );
};

export default AboutUsSection;