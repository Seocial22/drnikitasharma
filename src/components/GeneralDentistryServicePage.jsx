import React from 'react';
import { Clock, MapPin, Star, CheckCircle, AlertCircle, Shield, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const GeneralDentistryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image src="/images/icons/teeth.png" alt="Teeth Icon" width={60} height={60} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              General Dentistry Services 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care for the whole family - routine cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong
            </p>
          </div>
          
          {/* Doctor Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto" style={{backgroundColor: '#BCF7F1'}}>
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <Image src="/images/icons/doctor.png" alt="Doctor Icon" width={50} height={50} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Dr. Nikita Sharma
              </h2>
              <p className="text-lg text-gray-700 font-medium">
                B.D.S., M.D.S., PEDODONTIST, GENERAL DENTISTRY AND CHILD SPECIALIST
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Morning Session</h3>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700 font-medium">Paras Urology Hospital</span>
                </div>
                <div className="text-teal-700 font-bold text-lg">10:00 AM - 12:00 PM</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Evening Session</h3>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700 font-medium">Nivik Smile Care</span>
                </div>
                <div className="text-teal-700 font-bold text-lg">5:00 PM - 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* What is General Dentistry */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Smile className="w-8 h-8 text-teal-600 mr-3" />
              What is General Dentistry?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              General dentistry encompasses comprehensive oral healthcare services focused on preventing, diagnosing, and treating 
              common dental problems. Our practice provides essential dental care for patients of all ages, from routine cleanings 
              and checkups to restorative treatments that maintain your oral health and beautiful smile.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in preventive care as the foundation of good oral health, combined with gentle, effective treatments 
              when dental issues arise. Our goal is to help you maintain healthy teeth and gums for life.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our General Dentistry Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "cleaning.png", title: "Professional Cleanings", desc: "Deep cleaning to remove plaque and tartar buildup" },
              { icon: "examination.png", title: "Comprehensive Exams", desc: "Thorough oral health assessments and screenings" },
              { icon: "filling.png", title: "Dental Fillings", desc: "Cavity treatment with durable, tooth-colored materials" },
              { icon: "crown.png", title: "Crowns & Bridges", desc: "Restore damaged teeth and replace missing ones" },
              { icon: "root-canal.png", title: "Root Canal Treatment", desc: "Save infected teeth with gentle endodontic care" },
              { icon: "extraction.png", title: "Tooth Extractions", desc: "Safe removal of damaged or problematic teeth" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Image 
                    src={`/images/icons/${service.icon}`} 
                    alt={service.title} 
                    width={48} 
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
              Signs You Need Dental Care
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                                    <div>
                    <h4 className="font-semibold text-gray-800">Tooth Pain or Sensitivity</h4>
                    <p className="text-gray-600">Sharp or throbbing pain when eating or drinking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Bleeding or Swollen Gums</h4>
                    <p className="text-gray-600">Signs of gum disease or inflammation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Visible Cavities</h4>
                    <p className="text-gray-600">Dark spots or holes in your teeth</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Bad Breath</h4>
                    <p className="text-gray-600">Persistent halitosis despite good oral hygiene</p>
                  </div>
                </div>
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Loose or Missing Teeth</h4>
                    <p className="text-gray-600">Teeth that feel loose or have fallen out</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Overdue for Cleaning</h4>
                    <p className="text-gray-600">More than 6 months since last dental visit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-green-500 mr-3" />
              Preventive Care & Daily Habits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Image src="/images/icons/hygiene.png" alt="Home Care" width={24} height={24} className="mr-2" />
                  At-Home Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Brush twice daily for 2 minutes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Floss daily to remove plaque between teeth
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Use fluoride toothpaste and mouthwash
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Limit sugary and acidic foods
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Image src="/images/icons/consultation.png" alt="Professional Care" width={24} height={24} className="mr-2" />
                  Professional Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Regular checkups every 6 months
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Professional cleanings and fluoride treatments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Early detection and treatment of problems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dental sealants for cavity protection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Dental Visit Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "health-history.png", title: "Health History", desc: "Review medical history and dental history" },
              { step: "2", icon: "examination.png", title: "Examination", desc: "Comprehensive oral health assessment" },
              { step: "3", icon: "cleaning.png", title: "Cleaning", desc: "Professional cleaning and polishing" },
              { step: "4", icon: "consultation.png", title: "Treatment Plan", desc: "Discuss findings and recommendations" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4" style={{backgroundColor: '#BCF7F1'}}>
                  <div className="flex justify-center mb-3">
                    <Image 
                      src={`/images/icons/${process.icon}`} 
                      alt={process.title} 
                      width={48} 
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="text-2xl font-bold text-teal-600 mb-2">Step {process.step}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Benefits of Regular Dental Care
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/appearance.png" alt="Prevention" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Prevent Problems</h3>
                <p className="text-gray-600">Early detection and prevention of dental issues saves time and money</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/retention.png" alt="Confidence" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintain Confidence</h3>
                <p className="text-gray-600">Keep your smile bright and healthy for lasting confidence</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/health.png" alt="Health" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Overall Health</h3>
                <p className="text-gray-600">Good oral health contributes to better overall physical health</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Dental Visit?</h2>
            <p className="text-xl mb-6">
              Schedule your appointment with Dr. Nikita Sharma today and maintain your healthy, beautiful smile!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneralDentistryPage;