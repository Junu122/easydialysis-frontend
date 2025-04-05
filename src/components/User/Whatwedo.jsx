import React from 'react';
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';

const Whatwedo = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 mb-20 overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-white to-pink-50">
          {/* Header with animated underline */}
          <div>
            <div className="inline-block relative">
              <span className="text-lg font-medium text-pink-500 uppercase tracking-wider">
                What we do
              </span>
              <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-pink-400 rounded-full"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-6 leading-tight bg-clip-text  text-pink-700 ">
              We provide a seamless and compassionate dialysis booking experience tailored to meet your needs.
            </h2>
          </div>

          {/* Stats Section with hover animations */}
          <div className="grid grid-cols-2 gap-5 mt-12">
            {[
              { value: '16', label: 'STATES' },
              { value: '400+', label: 'DIALYSIS CENTERS' },
              { value: '20,000+', label: 'DIALYSIS SESSIONS' },
              { value: '912', label: 'CARE SPECIALISTS' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative overflow-hidden group rounded-xl p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-all duration-300"></div>
                <h3 className="text-3xl font-bold text-pink-600 group-hover:text-pink-500 transition-colors duration-300">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-500 mt-2">{stat.label}</p>
                <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section with gradient overlay */}
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 z-10 pointer-events-none"></div>
          <img
            src={assets.appointment_img}
            alt="Dialysis Care Experience"
            className="w-full h-full object-cover"
          />
          
          {/* Floating decoration elements */}
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-4 border-white/30 z-20"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-pink-500/20 backdrop-blur-sm z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;