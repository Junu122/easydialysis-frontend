import React from "react";
import { assets } from "../../assets/assets";

const DialysisCareSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
            <img
              src={assets.header_img}
              alt="Advanced Dialysis Care"
              className="rounded-xl shadow-xl w-full object-cover h-auto lg:h-96 relative z-10"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
              Specialized Dialysis Services
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Your Trusted Partner in <span className="text-primary">Dialysis Care</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At our centers, we prioritize your health and comfort. With advanced
              dialysis technology, highly trained professionals, and a
              compassionate approach, we ensure you receive the exceptional care
              you deserve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">State-of-the-art equipment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Expert nephrologists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Pristine facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Personalized care plans</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/book"
                className="px-8 py-3 rounded-lg font-semibold text-center shadow-lg bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Book an Appointment
              </a>
              <a
                href="/learn-more"
                className="px-8 py-3 rounded-lg font-semibold text-center shadow-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialysisCareSection;