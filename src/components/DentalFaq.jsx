"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DentalFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });
  const isTitleInView = useInView(titleRef, { once: true, threshold: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, threshold: 0.3 });
  const isCardInView = useInView(cardRef, { once: true, threshold: 0.8 });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const faqItems = [
    {
      question: "What pediatric dental services does Nivik Smile Care offer?",
      answer: "At Nivik Smile Care, Dr. Nikita Sharma provides specialized pediatric dental care including routine check-ups, preventive treatments, cavity management, fluoride applications, space maintainers, and child-friendly orthodontic evaluations. We also offer general dentistry services for the whole family."
    },
    {
      question: "At what age should my child first visit the dentist?",
      answer: "Dr. Nikita Sharma recommends that children have their first dental visit by their first birthday or within 6 months of their first tooth erupting. Early visits help establish good oral health habits and allow us to monitor proper dental development."
    },
    {
      question: "How does Nivik Smile Care make dental visits comfortable for children?",
      answer: "Our clinic is specially designed to create a child-friendly environment. Dr. Nikita uses gentle techniques, explains procedures in kid-friendly terms, and offers behavior management strategies to ensure positive dental experiences. We also have TV entertainment and reward systems to make visits enjoyable."
    },
    {
      question: "What makes pediatric dentistry different from general dentistry?",
      answer: "As a trained Pedodontist, Dr. Nikita Sharma specializes in children's dental development, behavior management techniques, and treatments specific to primary teeth. Pediatric dentistry focuses on preventive care and early intervention to ensure proper growth and lifelong oral health."
    },
    {
      question: "How can I schedule an appointment at Nivik Smile Care?",
      answer: "You can book an appointment with Dr. Nikita Sharma by calling our clinic directly, visiting our website, or through WhatsApp. We offer convenient scheduling options including early morning and evening slots for school-going children."
    },
    {
      question: "Does Nivik Smile Care offer emergency dental care for children?",
      answer: "Yes, we provide emergency dental services for children including treatment for dental trauma, severe toothaches, and other urgent pediatric dental needs. Dr. Nikita is specially trained to handle dental emergencies in young patients with care and compassion."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const faqItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="w-full bg-white py-12 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
        <motion.h2 
          ref={titleRef}
          className="text-5xl font-bold text-gray-900 mb-2 font-playfair"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Dental Care You Can Trust
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-12"
          variants={subtitleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Have a dental concern? Our expert team is ready to provide the quality care you deserve at our state-of-the-art clinic.
        </motion.p>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="border-t border-gray-200 py-4"
              variants={faqItemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.button
                className="w-full flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.1 }}
              >
                <h3 className="text-xl text-gray-700 font-medium text-left">{item.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronDown className="text-gray-600" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.p 
                      className="pt-4 text-gray-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="w-full lg:w-2/5 mt-12 lg:mt-0 relative">
        <motion.div 
          ref={imageRef}
          className="bg-gray-400 rounded-bl-full rounded-br-full overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
        >
          <Image 
            src="/images/clinic.webp" 
            alt="Dental clinic interior" 
            width={800} 
            height={600} 
            className="w-full h-[600px] object-cover"
          />
          
          <motion.div 
            ref={cardRef}
            className="absolute bottom-4 left-2 transform -translate-x-1/2 bg-white p-4 md:p-6 rounded-lg shadow-xl max-w-xs w-11/12"
            variants={cardVariants}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="w-16 h-12 md:w-20 md:h-16 rounded-full overflow-hidden mr-3 md:mr-4 shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src="/images/drnikita.png" 
                  alt="Dr. Nikita Sharma" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h4 className="font-bold text-gray-900">Dr. Nikita Sharma</h4>
                <p className="text-xs md:text-sm text-gray-600">B.D.S., M.D.S., PEDODONTIST, GENERAL DENTISTRY AND CHILD SPECIALIST</p>
              </div>
            </div>
            
            <div className="mt-2 text-center">
              <Link href='/appointment'>
                <motion.button 
                  className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  BOOK APPOINTMENT
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DentalFAQ;