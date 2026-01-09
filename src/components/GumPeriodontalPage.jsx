import React from 'react';
import { Clock, MapPin, Star, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const GumPeriodontalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image src="/images/icons/health.png" alt="Gum Health Icon" width={60} height={60} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Gum & Periodontal Treatment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized care for your gums to treat and prevent periodontal disease, restore gum health, and maintain your natural smile
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
                B.D.S., M.D.S., PEDODONTIST, PERIODONTAL SPECIALIST
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
        
        {/* What is Periodontal Treatment */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-teal-600 mr-3" />
              What is Gum & Periodontal Treatment?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Periodontal treatment focuses on preventing, diagnosing, and treating gum disease (periodontitis) 
              and other conditions that affect the gums and bone supporting your teeth. Healthy gums are the 
              foundation for a healthy smile, and we offer comprehensive care to maintain your gum health.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From routine cleanings to advanced gum therapies, our treatments are designed to stop the progression 
              of gum disease, restore gum health, and prevent tooth loss. Early intervention is key to successful 
              periodontal treatment.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Gum & Periodontal Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "cleaning", title: "Deep Cleaning (Scaling & Root Planing)", desc: "Removes plaque and tartar below the gumline" },
              { icon: "hygiene", title: "Periodontal Maintenance", desc: "Specialized cleanings to manage gum disease" },
              { icon: "treatment", title: "Gum Infection Treatment", desc: "Treats active gum infections and abscesses" },
              { icon: "examination", title: "Gum Disease Evaluation", desc: "Comprehensive assessment of gum health" },
              { icon: "health", title: "Gum Grafting", desc: "Restores receded gum tissue" },
              { icon: "bonding", title: "Pocket Reduction Therapy", desc: "Reduces spaces between teeth and gums" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <Image 
                    src={`/images/icons/${service.icon}.png`} 
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

        {/* Signs You Need Treatment */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <AlertCircle className="w-8 h-8 text-amber-500 mr-3" />
              Signs You May Need Gum Treatment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Bleeding Gums</h4>
                    <p className="text-gray-600">Especially when brushing or flossing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Swollen or Red Gums</h4>
                    <p className="text-gray-600">Tender or painful gum tissue</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Receding Gums</h4>
                    <p className="text-gray-600">Teeth appearing longer than before</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Persistent Bad Breath</h4>
                    <p className="text-gray-600">That doesn't go away with brushing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Loose Teeth</h4>
                    <p className="text-gray-600">Or changes in how your teeth fit together</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">Pus Between Teeth</h4>
                    <p className="text-gray-600">Sign of active gum infection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Spotlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Periodontal Treatment Spotlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Image src="/images/icons/cleaning.png" alt="Deep Cleaning" width={40} height={40} className="mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Scaling & Root Planing</h3>
              </div>
              <p className="text-gray-700 mb-4">
                This deep cleaning procedure removes plaque and tartar from below the gumline and smooths 
                tooth roots to help gums reattach to teeth. It's the gold standard treatment for early to 
                moderate periodontitis.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Removes bacterial toxins from root surfaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reduces gum inflammation and pocket depth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Typically completed in 2-4 visits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Image src="/images/icons/hygiene.png" alt="Periodontal Maintenance" width={40} height={40} className="mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Periodontal Maintenance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                After active periodontal treatment, regular maintenance cleanings (every 3-4 months) are 
                essential to prevent disease recurrence. These specialized cleanings go beyond routine 
                prophylaxis to maintain gum health.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monitors gum health and pocket depths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Removes new plaque and tartar buildup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Helps prevent disease progression</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Gum Treatment Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "examination", title: "Comprehensive Evaluation", desc: "Gum measurements and assessment" },
              { step: "2", icon: "health-history", title: "Diagnosis", desc: "Determine type and severity of gum disease" },
              { step: "3", icon: "cleaning", title: "Active Treatment", desc: "Deep cleaning or other therapies" },
              { step: "4", icon: "hygiene", title: "Maintenance", desc: "Ongoing care to preserve results" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 h-[250px] shadow-lg mb-4" style={{backgroundColor: '#BCF7F1'}}>
                  <div className="flex justify-center mb-3">
                    <Image 
                      src={`/images/icons/${process.icon}.png`} 
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
              Benefits of Gum Treatment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/health.png" alt="Prevent Tooth Loss" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Prevent Tooth Loss</h3>
                <p className="text-gray-600">Protect your natural teeth by treating gum disease</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/appearance.png" alt="Healthier Gums" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthier Gums</h3>
                <p className="text-gray-600">Reduce inflammation and bleeding</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/orthodontics.png" alt="Overall Health" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Overall Health</h3>
                <p className="text-gray-600">Reduce risk of systemic health complications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Concerned About Your Gum Health?</h2>
            <p className="text-xl mb-6">
              Schedule an appointment with Dr. Nikita Sharma for a comprehensive gum evaluation!
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

export default GumPeriodontalPage;