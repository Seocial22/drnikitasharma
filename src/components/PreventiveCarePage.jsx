import React from 'react';
import { Clock, MapPin, Star, CheckCircle, Shield, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PreventiveCarePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image src="/images/icons/teeth.png" alt="Shield Icon" width={60} height={60} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Preventive Dental Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Routine checkups, cleanings, and early treatments to maintain optimal oral health and prevent dental issues before they start
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
                B.D.S., M.D.S., PEDODONTIST, PREVENTIVE DENTISTRY SPECIALIST
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
        
        {/* What is Preventive Care */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-teal-600 mr-3" />
              What is Preventive Dental Care?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Preventive dentistry focuses on maintaining healthy teeth and gums to avoid cavities, gum disease, 
              enamel wear, and other dental problems. It combines regular dental checkups with good oral hygiene 
              practices to stop dental issues before they develop.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By investing in preventive care, you can save time, money, and discomfort in the long run while 
              keeping your natural teeth for life. Our goal is to help you maintain optimal oral health through 
              education, early detection, and preventive treatments.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Preventive Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "examination", title: "Dental Exams", desc: "Comprehensive oral health assessments" },
              { icon: "cleaning", title: "Professional Cleanings", desc: "Plaque and tartar removal" },
              { icon: "xray", title: "Digital X-rays", desc: "Early cavity detection" },
              { icon: "fluoride", title: "Fluoride Treatments", desc: "Strengthen tooth enamel" },
              { icon: "sealant", title: "Dental Sealants", desc: "Protect chewing surfaces" },
              { icon: "child", title: "Pediatric Care", desc: "Specialized care for children" }
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

        {/* Why Prevention Matters */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              Why Preventive Care Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Cost-Effective</h4>
                    <p className="text-gray-600">Preventing problems is cheaper than treating them</p>
                  </div>
                </div>
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Saves Time</h4>
                    <p className="text-gray-600">Fewer emergency visits and complex procedures</p>
                  </div>
                </div>
                <div className="flex items-start">
               
                  <div>
                    <h4 className="font-semibold text-gray-800">More Comfortable</h4>
                    <p className="text-gray-600">Avoid painful dental problems before they start</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Preserve Natural Teeth</h4>
                    <p className="text-gray-600">Keep your original teeth longer</p>
                  </div>
                </div>
                <div className="flex items-start">
              
                  <div>
                    <h4 className="font-semibold text-gray-800">Overall Health</h4>
                    <p className="text-gray-600">Oral health links to heart health and diabetes</p>
                  </div>
                </div>
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Early Detection</h4>
                    <p className="text-gray-600">Spot problems when they're easiest to treat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Recommended Preventive Care Schedule
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { frequency: "Every 6 Months", icon: "cleaning", title: "Dental Cleanings", desc: "Professional plaque and tartar removal" },
              { frequency: "Every 6 Months", icon: "examination", title: "Oral Exams", desc: "Comprehensive check for cavities and gum disease" },
              { frequency: "Every 12 Months", icon: "xray", title: "X-rays", desc: "Detect hidden problems between teeth" },
              { frequency: "As Recommended", icon: "fluoride", title: "Fluoride Treatments", desc: "Especially beneficial for children" },
              { frequency: "Every 3-5 Years", icon: "cancer-screening", title: "Oral Cancer Screening", desc: "Early detection is crucial" },
              { frequency: "Custom Schedule", icon: "planning", title: "Individualized Plan", desc: "Based on your specific risk factors" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-12 h-12">
                    <Image 
                      src={`/images/icons/${item.icon}.png`} 
                      alt={item.title} 
                      width={48} 
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.frequency}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* At-Home Care */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              Your At-Home Preventive Routine
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Image src="/images/icons/hygiene.png" alt="Daily Care" width={24} height={24} className="mr-2" />
                  Daily Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Brush twice daily for 2 minutes with fluoride toothpaste
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Floss daily to clean between teeth
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Use antimicrobial mouthwash if recommended
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Clean your tongue daily
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Image src="/images/icons/nutrition.png" alt="Lifestyle Factors" width={24} height={24} className="mr-2" />
                  Lifestyle Factors
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Limit sugary and acidic foods/drinks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Stay hydrated with water
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Eat a balanced diet rich in vitamins
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    Avoid tobacco products
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Children's Preventive Care */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Special Preventive Care for Children
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/child-care.png" alt="First Visit" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">First Visit by Age 1</h3>
                <p className="text-gray-600">Establish dental home early for prevention</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/fluoride.png" alt="Fluoride Varnish" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fluoride Varnish</h3>
                <p className="text-gray-600">Safe treatments to strengthen young teeth</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/sealant.png" alt="Sealants" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sealants</h3>
                <p className="text-gray-600">Protect molars from cavities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of Dental Problems</h2>
            <p className="text-xl mb-6">
              Schedule your preventive care appointment today and maintain your healthy smile with minimal treatment!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Book Checkup
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreventiveCarePage;