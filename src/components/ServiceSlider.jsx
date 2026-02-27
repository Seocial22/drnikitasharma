"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useInView } from "framer-motion";

const clinicsData = [
    {
        name: "Orthodontic Services",
        slug: "orthodontic",
        imageSrc: "/images/orthodontic.webp",
        description: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile.",

    },
    {
        name: "General Dentistry",
        slug: "general-dentistry",
        imageSrc: "/images/general-dentistry.webp",
        description: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong.",

    },
    {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        imageSrc: "/images/cosmetic-dentistry.jpeg",
        description: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments.",

    },
    {
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        imageSrc: "/images/restorative.webp",
        description: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants.",

    },
    {
        name: "Preventive Care",
        slug: "preventive-care",
        imageSrc: "/images/preventive-care.jpeg",
        description: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues.",

    },
    {
        name: "Gum & Periodontal Care",
        slug: "gum-periodontal-treatment",
        imageSrc: "/images/gum-periodontal-treatment.jpg",
        description: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance",

    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const CustomDot = ({ onClick, active }) => {
    return (
        <motion.button
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${active
                    ? 'bg-[#00BCD4] scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-[#007B8A]/50'
                }`}
            onClick={() => onClick()}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        />
    );
};

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <motion.div
            className="flex justify-center items-center space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
        >
            <motion.button
                className="bg-white/90 backdrop-blur-sm text-[#007B8A] p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white hover:text-[#00BCD4] hover:scale-110 transition-all duration-300 border border-[#00BCD4]/20 hover:border-[#00BCD4]/50 group"
                onClick={() => previous()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowRight className="w-5 h-5 rotate-180 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
            <motion.button
                className="bg-gradient-to-r from-[#00BCD4] to-[#007B8A] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-[#007B8A] hover:to-[#00BCD4] hover:scale-110 transition-all duration-300 group"
                onClick={() => next()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
        </motion.div>
    );
};

const ServicesSlider = () => {
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
                staggerChildren: 0.1
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

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#f0fffe] to-[] overflow-hidden">
            {/* Animated background decorations */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-[#caf4ef] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
                animate={floatingAnimation}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
                animate={{
                    y: [10, -10, 10],
                    transition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            />
            <motion.div
                className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#00BCD4] rounded-full opacity-30"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-[#007B8A] rounded-full opacity-20"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }
                }}
            />

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        className="flex items-center justify-center space-x-2 mb-4"
                        variants={itemVariants}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                transition: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                        >
                            <Sparkles className="w-6 h-6 text-[#00BCD4]" />
                        </motion.div>
                        <span className="text-[#007B8A] font-semibold text-lg">Our Expertise</span>
                        <motion.div
                            animate={{
                                rotate: [360, 0],
                                transition: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                        >
                            <Sparkles className="w-6 h-6 text-[#00BCD4]" />
                        </motion.div>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                        variants={itemVariants}
                    >
                        Comprehensive
                        <span className="text-[#14B8A6]"> Dental Care</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Discover our full range of dental services designed to keep your smile healthy, beautiful, and confident
                    </motion.p>
                </div>

                {/* Services Carousel */}
                <motion.div
                    className="relative"
                    variants={itemVariants}
                >
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}
                        customButtonGroup={<CustomButtonGroup />}
                        showDots={false}
                        swipeable={true}
                        draggable={true}
                        focusOnSelect={false}
                        centerMode={false}
                        additionalTransfrom={0}
                        arrows={false}
                        partialVisible={false}
                    >
                        {clinicsData.map((service, index) => (
                            <motion.div
                                key={index}
                                className="px-3 h-full"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <motion.div
                                    className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl p-6 flex flex-col min-h-[500px] transform hover:scale-[1.02] transition-all duration-500 ease-out border border-gray-100 relative overflow-hidden"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Card background decoration */}
                                    <motion.div
                                        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#caf4ef]/20 to-[#00BCD4]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"
                                        animate={{
                                            rotate: [0, 360],
                                            transition: {
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }
                                        }}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-16 h-16 bg-[#007B8A]/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-500"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.5
                                            }
                                        }}
                                    />

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Image with enhanced styling */}
                                        <motion.div
                                            className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform duration-500"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <Image
                                                src={service.imageSrc}
                                                alt={service.name}
                                                width={400}
                                                height={280}
                                                className="w-full h-48 object-cover"
                                            />
                                            {/* Image overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Service number badge */}
                                            <motion.div
                                                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#007B8A] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    delay: 0.5 + index * 0.1,
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 15
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 360,
                                                    transition: { duration: 0.3 }
                                                }}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </motion.div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex flex-col space-y-4 flex-grow">
                                            <motion.h3
                                                className="text-2xl font-bold text-gray-900 group-hover:text-[#007B8A] transition-colors duration-300 leading-tight"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                            >
                                                {service.name}
                                            </motion.h3>

                                            <motion.p
                                                className="text-gray-600 leading-relaxed text-sm flex-grow min-h-[60px]"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                            >
                                                {service.description}
                                            </motion.p>

                                            {/* Enhanced CTA Button */}
                                            <Link href={`/services/${service.slug}`} className="mt-auto">
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
                            </motion.div>
                        ))}
                    </Carousel>
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                    className="text-center mt-12"
                    variants={itemVariants}
                >
                    <Link href="/services">
                        <motion.button
                            className="group bg-white/90 backdrop-blur-sm text-[#007B8A] px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-[#00BCD4]/20 hover:border-[#00BCD4]/40 flex items-center space-x-3 mx-auto"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View All Services</span>
                            <motion.div
                                className="w-8 h-8 bg-gradient-to-r from-[#00BCD4] to-[#007B8A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ArrowRight className="w-4 h-4 text-white" />
                            </motion.div>
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Custom CSS for carousel */}
            <style jsx global>{`
                .carousel-container {
                    padding-bottom: 2rem;
                }
                
                .carousel-item-padding-40-px {
                    padding: 0 8px;
                }
                
                .react-multi-carousel-list {
                    overflow: visible;
                }
                
                .react-multi-carousel-track {
                    transition: transform 0.5s ease-in-out;
                }
                
                .custom-dot-list-style {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    bottom: -3rem;
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                
                @media (max-width: 768px) {
                    .carousel-item-padding-40-px {
                        padding: 0 4px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesSlider;