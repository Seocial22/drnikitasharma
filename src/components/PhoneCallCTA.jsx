import React from 'react';

export default function PhoneCallCTA() {
  const phoneNumber = "79761 22545";
  const dialerNumber = "79761 22545"; // Remove spaces for dialer

  const handleCallClick = () => {
    window.location.href = `tel:${dialerNumber}`;
  };

  return (
    <div className="bg-[#6f4a63] rounded-3xl py-12 px-8 max-w-2xl mx-auto my-12">
      <div className="text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Need Help? Call Us Now
          </h2>
          <p className="text-white/80 text-lg">
            We're here to assist you 24/7
          </p>
        </div>

        {/* Phone Number Display */}
        <div className="bg-[#e3eaec] rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00BCD4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 8.63 19.79 19.79 0 0 1 6.08 2.18 2 2 0 0 1 9 3.24l2 2a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45l2 2a2 2 0 0 1 1.06 1.73z" />
              </svg>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium mb-2 tracking-wide uppercase">
               Contact
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-black tracking-wider">
              {phoneNumber}
            </h3>
          </div>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={handleCallClick}
          className="bg-gradient-to-r from-[#00BCD4] to-[#00ACC1] hover:from-[#00ACC1] hover:to-[#0097A7] 
                     text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 
                     transform hover:scale-105 hover:shadow-2xl active:scale-95 
                     flex items-center justify-center gap-3 mx-auto min-w-[200px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 8.63 19.79 19.79 0 0 1 6.08 2.18 2 2 0 0 1 9 3.24l2 2a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45l2 2a2 2 0 0 1 1.06 1.73z" />
          </svg>
          Call Now
        </button>

        {/* Additional Info */}
        <p className="text-white/70 text-sm mt-6">
          Tap the button above to dial instantly
        </p>
      </div>
    </div>
  );
}