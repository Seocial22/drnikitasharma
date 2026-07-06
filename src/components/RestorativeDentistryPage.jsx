import React from 'react';
import { Clock, MapPin, Star, CheckCircle, AlertCircle, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const RestorativeDentistryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image src="/images/icons/treatment.png" alt="Treatment Icon" width={60} height={60} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Restorative Dentistry Services 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Repairing and replacing damaged or missing teeth to restore function, comfort, and appearance with fillings, crowns, bridges, and implants
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
                B.D.S., M.D.S., PEDODONTIST, RESTORATIVE DENTISTRY SPECIALIST
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
                <div className="text-teal-700 font-bold text-lg">5:00 PM - 8:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* What is Restorative Dentistry */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Smile className="w-8 h-8 text-teal-600 mr-3" />
              What is Restorative Dentistry?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Restorative dentistry focuses on repairing or replacing damaged or missing teeth to restore 
              proper function, comfort, and appearance. These procedures not only improve your smile's 
              aesthetics but also protect your oral health by preventing further damage and decay.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our restorative treatments use high-quality materials that blend seamlessly with your natural 
              teeth, providing durable solutions that can last for years with proper care. Whether you 
              need a simple filling or a full-mouth reconstruction, we can help restore your smile.
            </p>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Restorative Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "filling", title: "Dental Fillings", desc: "Tooth-colored composite to repair cavities" },
              { icon: "crown", title: "Dental Crowns", desc: "Custom caps to protect damaged teeth" },
              { icon: "orthodontics", title: "Dental Bridges", desc: "Fixed solution to replace missing teeth" },
              { icon: "treatment", title: "Dental Implants", desc: "Permanent tooth replacement solution" },
              { icon: "root-canal", title: "Root Canal Therapy", desc: "Save infected teeth from extraction" },
              { icon: "dentures", title: "Dentures", desc: "Removable replacements for missing teeth" }
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
              Signs You May Need Restorative Treatment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Tooth Pain or Sensitivity</h4>
                    <p className="text-gray-600">Especially to hot, cold, or sweet foods</p>
                  </div>
                </div>
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Visible Cavities</h4>
                    <p className="text-gray-600">Dark spots or holes in your teeth</p>
                  </div>
                </div>
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Cracked or Broken Teeth</h4>
                    <p className="text-gray-600">From injury or wear over time</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                 
                  <div>
                    <h4 className="font-semibold text-gray-800">Difficulty Chewing</h4>
                    <p className="text-gray-600">Pain or discomfort when eating</p>
                  </div>
                </div>
                <div className="flex items-start">
                
                  <div>
                    <h4 className="font-semibold text-gray-800">Missing Teeth</h4>
                    <p className="text-gray-600">Gaps affecting function or appearance</p>
                  </div>
                </div>
                <div className="flex items-start">
               
                  <div>
                    <h4 className="font-semibold text-gray-800">Old, Worn Restorations</h4>
                    <p className="text-gray-600">Fillings or crowns that need replacement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Spotlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Restorative Treatment Spotlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Image src="/images/icons/crown.png" alt="Dental Crowns" width={40} height={40} className="mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Dental Crowns</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Crowns are custom-made caps that completely cover damaged teeth to restore their 
                shape, size, strength, and appearance. They're ideal for teeth with large fillings, 
                after root canal treatment, or with significant damage.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Protect weakened teeth from further damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Made from porcelain, ceramic, or metal alloys</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Typically last 5-15 years depending on care</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Image src="/images/icons/treatment.png" alt="Dental Implants" width={40} height={40} className="mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Dental Implants</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Implants are titanium posts surgically placed in the jawbone to replace missing 
                tooth roots. They provide a stable foundation for crowns, bridges, or dentures, 
                offering the closest alternative to natural teeth.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Prevent bone loss in the jaw</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Don't require altering adjacent teeth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Can last a lifetime with proper care</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Restoration Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "examination", title: "Evaluation", desc: "Comprehensive exam and diagnostics" },
              { step: "2", icon: "planning", title: "Treatment Plan", desc: "Customized restoration options" },
              { step: "3", icon: "cleaning", title: "Preparation", desc: "Tooth preparation and impressions" },
              { step: "4", icon: "retention", title: "Placement", desc: "Final restoration placement" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4" style={{backgroundColor: '#BCF7F1'}}>
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
              Benefits of Restorative Dentistry
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/health.png" alt="Restored Function" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Restored Function</h3>
                <p className="text-gray-600">Eat, speak, and chew comfortably again</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/appearance.png" alt="Improved Appearance" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Improved Appearance</h3>
                <p className="text-gray-600">Natural-looking repairs that blend seamlessly</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <Image src="/images/icons/orthodontics.png" alt="Oral Health" width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Oral Health</h3>
                <p className="text-gray-600">Prevent further dental problems and bone loss</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Smile?</h2>
            <p className="text-xl mb-6">
              Schedule an appointment with Dr. Nikita Sharma today to discuss your restorative options!
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

export default RestorativeDentistryPage;