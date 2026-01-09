
"use client";
import React from "react";
import { motion } from "framer-motion";
const DoctorProfile = () => {
  const year = new Date().getFullYear();
  const exprince = year - 2015;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left - Image with BG color and Badge */}
        <div className="w-full md:w-[40%] p-6 md:p-10 flex flex-col items-center relative">
          <div className="relative w-full max-w-sm bg-[#E0F7FA] p-3 rounded-xl">
            <img
              src="/images/drnikita.png"
              alt="Dr. Nikita Sharma"
              className="w-full h-auto object-cover rounded-lg  "
            />
            {/* Experience Badge */}

            <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // amount: % of element in view to trigger
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
            <div className="
  absolute 
  bottom-[-20px] 
  left-1/2 
  -translate-x-1/2
  md:left-auto 
  md:right-[-40px] 
  bg-[#11A798] 
  text-center 
  text-white 
  text-sm 
  md:text-base 
  font-semibold 
  px-3 
  py-2 
  rounded-md 
  shadow-md
">
  {exprince}+ Years <br /> Experience
</div>

            </motion.div>
          </div>
        </div>

        {/* Right - Info */}
        <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Dr. Nikita Sharma
              <span className="ml-2 text-base font-normal text-gray-400">
                B.D.S., M.D.S. (Pedodontics)
              </span>
            </h2>
            <p className="text-lg text-blue-600 mt-1 font-medium">
              Specialized Pediatric Dentist
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Dedicated to creating positive dental experiences for children and promoting lifelong oral health.
            </p>
          </div>

          <hr className="border-t-2 border-[#BCF7F1] my-4" />

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-y-6 gap-x-10 text-sm">
            <div className="font-semibold text-gray-900">Nivik Smile Care<br/>(Center)</div>
            <div className="text-gray-500">
            <li><strong>Paras Urology & Multispeciality Hospital:</strong> Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</li>
            <li><strong>Home:</strong> B-455 Panchsheel, B Block, Ajmer, Rajasthan</li>
            </div>

            <div className="font-semibold text-gray-900">Education</div>
            <div className="text-gray-500">
              B.D.S., M.D.S. (Pedodontics)
            </div>

            <div className="font-semibold text-gray-900">Experience</div>
            <div className="text-gray-500">Practicing since 2015</div>

            <div className="font-semibold text-gray-900">Specialized In</div>
            <div className="text-gray-500">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Pediatric Dentistry:</strong> Dental care for infants, children and adolescents</li>
                <li><strong>Preventive Dentistry:</strong> Fluoride treatments, sealants & oral health education</li>
                <li><strong>Behavior Management:</strong> Creating positive dental experiences for children</li>
                <li><strong>Early Orthodontics:</strong> Interceptive orthodontic treatment for children</li>
              </ul>
            </div>

            <div className="font-semibold text-gray-900">Professional Approach</div>
            <div className="text-gray-500">
              <ul className="list-disc list-inside space-y-1">
                <li>Child-Friendly Environment</li>
                <li>Pain-Free Techniques</li>
                <li>Preventive Focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
