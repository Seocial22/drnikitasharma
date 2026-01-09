"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PhoneCallCTA from "./PhoneCallCTA";

// SVG Icon for the checkmark in a circle
const CheckCircleIcon = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="#8C5F7F" />
    <path
      d="M17.3333 8.5L10.4999 15.3333L7.66659 12.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FaqPage = () => {
  const generalFaqs = [
    {
      question: "What are some common dental services offered by dentists?",
      answer: "Common dental services offered by dentists include regular dental check-ups, cleanings, fillings, root canals, extractions, crowns, bridges, and implants.",
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer: "If you have a dental emergency such as a broken tooth or severe toothache, it is important to contact your dentist immediately. Many dental offices have emergency services available to address urgent dental needs.",
    },
    {
      question: "What is the recommended frequency for dental check-ups and cleanings?",
      answer: "The American Dental Association recommends visiting the dentist at least once every six months for a dental check-up and cleaning. However, the frequency may vary depending on an individual's oral health needs and conditions.",
    },
    {
      question: "How can I improve my oral health?",
      answer: "Maintaining good oral hygiene habits such as brushing twice a day, flossing daily, and using mouthwash can help improve your oral health. Eating a balanced diet, avoiding sugary foods and drinks, and quitting smoking can also have a positive impact on your oral health. Regular dental check-ups and cleanings can also help identify and address any oral health issues.",
    },
    {
      question: "What safety measures are in place to protect patients during the COVID-19 pandemic?",
      answer: "Our clinic follows strict safety protocols to protect our patients and staff during the COVID-19 pandemic. These measures include health screenings, mandatory mask-wearing, social distancing, and increased sanitation and disinfection of surfaces and equipment.",
    },
    {
      question: "Are dental procedures painful?",
      answer: "Dental procedures can cause discomfort, but with local anesthesia, the pain can be managed. Additionally, many dental offices offer sedation options to help patients feel more relaxed and comfortable during procedures.",
    },
  ];

  const yesResponseQuestions = [
    "Do you offer teeth cleaning and preventive care services?",
    "Do you offer clear aligner treatments like Invisalign to straighten teeth without traditional braces?",
    "Do you accept dental insurance or offer financing options for treatments?",
    "Do you use digital X-rays for a safer and more efficient diagnostic process?",
    "Do you provide emergency dental services for urgent dental issues?",
    "Do you provide sedation options for patients with dental anxiety or fear?",
    "Do you offer teeth whitening treatments to improve the appearance of stained or discolored teeth?",
    "Do you offer dental bonding to repair chipped or cracked teeth?",
    "Do you provide dental implants as a replacement option for missing teeth?",
    "Do you provide custom mouthguards for athletes to protect their teeth during sports activities?",
  ];

  // Refs for intersection observer
  const headerRef = useRef(null);
  const yesSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  
  // Check if elements are in view
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isYesSectionInView = useInView(yesSectionRef, { once: true, margin: "-100px" });
  const isFaqSectionInView = useInView(faqSectionRef, { once: true, margin: "-100px" });

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

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Header Section */}
      <div 
        ref={headerRef}
        className="flex flex-col items-center justify-center text-center px-4 py-12"
      >
        <motion.h2 
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-5xl font-bold text-black mb-0"
        >
          FAQ
        </motion.h2>
        <motion.div 
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="flex items-center space-x-2 text-gray-600 text-base mb-6"
        >
          <span className="text-black">Home</span>
          <span>/</span>
          <span className="text-gray-500">FAQ</span>
        </motion.div>
      </div>

      {/* Section: "Question with a 'Yes' response!" */}
      <motion.div
        ref={yesSectionRef}
        initial="hidden"
        animate={isYesSectionInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        className="bg-[#caf4ef] rounded-tl-[120px] rounded-tr-[30px] rounded-bl-[120px] rounded-br-[120px] max-w-6xl mx-auto my-12 px-8 sm:px-12 py-14"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-black text-center mb-10 sm:mb-12"
        >
          Question with a <span className="text-red-600">"Yes"</span> response!
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          {yesResponseQuestions.map((question, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-start space-x-3"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6"
              >
                <CheckCircleIcon />
              </motion.div>
              <p className="text-gray-800 text-sm sm:text-base">{question}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Section: General FAQs */}
      <motion.div
        ref={faqSectionRef}
        initial="hidden"
        animate={isFaqSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-8 md:gap-y-12"
        >
          {generalFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="space-y-2 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-black">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <PhoneCallCTA/>
      </motion.div>
    </>
  );
};

export default FaqPage;