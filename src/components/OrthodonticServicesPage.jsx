import React from 'react';
import { Clock, MapPin, Phone, Star, CheckCircle, AlertCircle, Shield, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const OrthodonticServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image src="/images/icons/teeth.png" alt="Teeth Icon" width={60} height={60} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Orthodontic Services 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your smile with expert orthodontic care - correcting misaligned teeth and jaws using braces, aligners, and other advanced devices for a healthier, straighter smile
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
        
        {/* What is Orthodontics */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Image src="/images/icons/orthodontics.png" alt="Smile Icon" width={32} height={32} className="mr-3" />
              What is Orthodontics?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating dental and facial irregularities. 
              Our expert orthodontic services help align your teeth and jaws properly, creating not just a beautiful smile but also improving 
              your overall oral health and function.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With modern techniques including traditional braces, clear aligners, and innovative orthodontic appliances, we customize 
              treatment plans to meet each patient's unique needs and lifestyle preferences.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Orthodontic Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "braces.png", title: "Traditional Metal Braces", desc: "Durable and effective for complex alignment issues" },
              { icon: "orthodontics.png", title: "Clear Ceramic Braces", desc: "Less visible option for discreet treatment" },
              { icon: "aligners.jpg", title: "Invisible Aligners", desc: "Removable clear aligners for convenient treatment" },
              { icon: "child.png", title: "Early Intervention", desc: "Interceptive orthodontics for growing children" },
              { icon: "jaw.png", title: "Jaw Correction", desc: "Treatment for bite problems and jaw alignment" },
              { icon: "retainer.avif", title: "Retainer Therapy", desc: "Maintaining your perfect smile post-treatment" }
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
              Signs You May Need Orthodontic Treatment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
               
                  <div>
                    <h4 className="font-semibold text-gray-800">Crowded or Crooked Teeth</h4>
                    <p className="text-gray-600">Teeth that overlap or appear twisted</p>
                  </div>
                </div>
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Gaps Between Teeth</h4>
                    <p className="text-gray-600">Spaces or wide gaps between teeth</p>
                  </div>
                </div>
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Breathing Issues</h4>
                    <p className="text-gray-600">Mouth breathing or sleep-related problems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Bite Problems</h4>
                    <p className="text-gray-600">Difficulty biting or chewing food properly</p>
                  </div>
                </div>
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Jaw Pain or Clicking</h4>
                    <p className="text-gray-600">TMJ disorders or jaw discomfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Speech Difficulties</h4>
                    <p className="text-gray-600">Lisping or pronunciation problems</p>
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
              Prevention & Early Care
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Image src="/images/icons/child-care.png" alt="Child Care" width={24} height={24} className="mr-2" />
                  Early Childhood Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Avoid thumb sucking after age 3
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Limit pacifier use early
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Encourage proper tongue posture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Schedule first orthodontic visit by age 7
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Image src="/images/icons/hygiene.png" alt="Hygiene" width={24} height={24} className="mr-2" />
                  Daily Oral Hygiene
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Brush twice daily with fluoride toothpaste
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Floss regularly to prevent gum disease
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Use protective mouthguards during sports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Regular dental checkups every 6 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Treatment Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "consultation.png", title: "Initial Consultation", desc: "Comprehensive examination and diagnosis" },
              { step: "2", icon: "planning.png", title: "Treatment Planning", desc: "Customized plan based on your needs" },
              { step: "3", icon: "treatment.png", title: "Active Treatment", desc: "Regular adjustments and monitoring" },
              { step: "4", icon: "retention.png", title: "Retention   ", desc: "Maintaining your beautiful new smile" }
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
              Benefits of Orthodontic Treatment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/appearance.png" alt="Appearance" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Appearance</h3>
                <p className="text-gray-600">Boost your confidence with a straighter, more attractive smile</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/health.png" alt="Health" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Better Oral Health</h3>
                <p className="text-gray-600">Easier cleaning and reduced risk of dental problems</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/teeth.png" alt="Function" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Improved Function</h3>
                <p className="text-gray-600">Better chewing, speaking, and overall oral function</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
            <p className="text-xl mb-6">
              Schedule your consultation with Dr. Nikita Sharma today and take the first step towards your perfect smile!
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

export default OrthodonticServicesPage;