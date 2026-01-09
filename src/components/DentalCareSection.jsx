"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const   DentalCareSection = () => {
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
        staggerChildren: 0.2,
        duration: 0.6
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

  const fadeInLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRightVariants = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleInVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16" ref={ref}>
      <motion.div 
        className="flex flex-col lg:flex-row items-center justify-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <motion.h3 
            className="text-teal-500 text-xl font-medium mb-4"
            variants={fadeInLeftVariants}
          >
            Why Choose Us
          </motion.h3>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair"
            variants={fadeInLeftVariants}
          >
            Leading the Way in<br />
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="  text-[#14B8A6] "
            >
              Advanced Dental Care
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8"
            variants={fadeInLeftVariants}
          >
            At our dental practice, we are committed to providing exceptional dental care using the latest technology and techniques. Our team of experienced professionals ensures that every patient receives personalized treatment in a comfortable and welcoming environment.
          </motion.p>
          
          {/* Feature Items */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {[
              {
                icon: "/images/teeth.png",
                title: "Comprehensive Dental Services",
                description: "From routine check-ups to advanced cosmetic and restorative treatments, we offer a wide range of dental services to meet all your oral health needs."
              },
              {
                icon: "/images/stethoscope-icon.png",
                title: "State-of-the-Art Technology",
                description: "We utilize cutting-edge dental technology to ensure precise diagnoses and effective treatments, providing you with the best possible care."
              },
              {
                icon: "/images/doctor.png",
                title: "Expert Dental Professionals",
                description: "Our team of highly skilled and compassionate dentists is dedicated to helping you achieve a healthy, beautiful smile with personalized care."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 group"
                variants={featureItemVariants}
                whileHover="hover"
              >
                <motion.div 
                  className={`p-2 w-[70px]  h-[70px] rounded-lg flex-shrink-0 flex items-center justify-center bg-teal-500`}

                  variants={iconHoverVariants}
                  whileHover="hover"
                >
                  <Image 
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    width={index === 2   ? 100 : index === 1 ? 50 : 40}
                    height={index === 2   ? 100 : index === 1 ? 50 : 40}
                    className={index === 2 ? "w-14 h-14" : "w-10 h-10"}
                  />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl text-black font-bold mb-2 group-hover:text-teal-600 transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p className="text-gray-600">
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Right Content - Image and Contact */}
        <motion.div 
          className="w-full lg:w-1/2 max-w-xl relative"
          variants={fadeInRightVariants}
        >
          <motion.div 
            className="relative h-96 lg:h-[500px] mx-auto"
            variants={scaleInVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/images/drnikita.jpg"
              alt="Dental professional with child patient" 
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
            />
            
            {/* Contact Card - Desktop */}       
            <motion.div 
              className="absolute lg:-bottom-20 lg:left-[-100px] hidden lg:block bg-gradient-to-br from-teal-500 to-teal-600 text-white p-12 rounded-lg w-65 shadow-2xl"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 0.7 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="flex justify-center mb-4">
  <motion.div 
    className="bg-white cursor-pointer p-4 rounded-full shadow-lg flex items-center justify-center"
    whileHover={{ scale: 1.1, rotate: 360 }}
    transition={{ duration: 0.6 }}
  >
    <Phone className="w-8 h-8 text-teal-500" />
  </motion.div>
</div>

              <motion.h3 
                className="text-2xl font-bold text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Have Any Questions?
              </motion.h3>
              
              <motion.p 
                className="text-xl font-bold text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
               <a href='tel:+9179761 22545'> +91 79761 22545</a>
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Mobile Contact Card */}
          <motion.div 
            className="lg:hidden bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-lg w-full mt-8 mx-auto max-w-xs shadow-2xl"
            variants={scaleInVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
             <a href='tel:+9179761 22545'> <div className="bg-white p-4 rounded-full shadow-lg">
                <Phone className="w-8 h-8 text-teal-500" />
              </div>
              </a>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-center mb-3">
              Have Any Questions?
            </h3>
            
            <motion.p 
              className="text-xl font-bold text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
             <a href='tel:+9179761 22545'> +91 79761 22545</a>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DentalCareSection;