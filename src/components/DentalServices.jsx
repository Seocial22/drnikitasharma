"use client";

import { useState, useEffect, useRef } from 'react';

const DentalServices = () => {
  // Refs for the counter section
  const statsRef = useRef(null);
  
  // State for counter values
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll events
    const handleScroll = () => {
      if (statsRef.current && isInViewport(statsRef.current)) {
        startCounters();
        // Remove scroll listener once counters start
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Start the counters
    const startCounters = () => {
      // Animate counters
      const yearsInterval = setInterval(() => {
        setYearsCount(prev => {
          if (prev < 10) return prev + 1;
          clearInterval(yearsInterval);
          return 10;
        });
      }, 200);
      
      const clientsInterval = setInterval(() => {
        setClientsCount(prev => {
          if (prev < 99) return prev + 3;
          clearInterval(clientsInterval);
          return 99;
        });
      }, 40);
      
      const patientsInterval = setInterval(() => {
        setPatientsCount(prev => {
          if (prev < 5000) return prev + 150;
          clearInterval(patientsInterval);
          return 5000;
        });
      }, 30);
      
      // Cleanup intervals
      return () => {
        clearInterval(yearsInterval);
        clearInterval(clientsInterval);
        clearInterval(patientsInterval);
      };
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check if stats section is already in view when component mounts
    if (statsRef.current && isInViewport(statsRef.current)) {
      startCounters();
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      title: "General Dentistry",
      iconPath: "/images/teeth.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Dental Surgery",
      iconPath: "/images/dental-surgery-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Implants",
      iconPath: "/images/implants-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Teeth Braces",
      iconPath: "/images/braces-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Child dentistry (Pedodontist) ",
      iconPath: "/images/prosthesis-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Whitening",
      iconPath: "/images/whitening-icon.png",
      description: "We bring the right people together to challenge established thinking"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-16 text-center w-full px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">A Perfect Smile Guaranteed</h2>
       
      </div>

      {/* Services Grid - Mobile First Layout */}
      <div className="w-full block md:hidden px-4 py-8">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="bg-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                <img src={service.iconPath} alt={service.title} className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid - Desktop Layout */}
      <div className="max-w-6xl mx-auto w-full hidden md:block">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Left Services */}
          <div className="space-y-16">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-0 justify-end"
              >
                <div className="mr-4">
                  <h3 className="text-xl font-semibold text-gray-800 text-right">{service.title}</h3>
                  <p className="text-gray-600 text-sm text-right max-w-xs">{service.description}</p>
                </div>
                <div className="bg-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                  <img src={service.iconPath} alt={service.title} className="w-9 h-9" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Image - Desktop only */}
          <div className="flex justify-center pb-0 mb-0">
            <img src="/images/dentist.png" alt="Dentist" className="w-full h-full object-cover" />
          </div>

          {/* Right Services */}
          <div className="space-y-16">
            {services.slice(3).map((service, index) => (
              <div
                key={index + 3}
                className="flex items-center space-x-4"
              >
                <div className="bg-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                  <img src={service.iconPath} alt={service.title} className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm max-w-xs">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dentist Image for Mobile - Repositioned below services, above stats */}
      <div className="w-full md:hidden flex justify-center  px-4">
        <img src="/images/dentist.png" alt="Dentist" className="w-3/4 max-w-xs object-contain" />
      </div>

      {/* Stats Section */}
      <div 
        ref={statsRef} 
        className="w-full bg-teal-500 text-white py-8 md:py-12 mt-0"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{yearsCount}+</h2>
              <p className="text-teal-100 text-sm md:text-base">Years Experience</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{clientsCount}%</h2>
              <p className="text-teal-100 text-sm md:text-base">Happy Client</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{patientsCount}+</h2>
              <p className="text-teal-100 text-sm md:text-base">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;