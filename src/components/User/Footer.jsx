import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo Section */}
        <div className="w-[15%] shrink-0 mb-4">
          <img src={assets.Companylogo} alt="Company Logo" className="w-[84px]" />
        </div>

        {/* Navigation Sections */}
        {["For Patients", "For Caregivers", "Resources"].map((section, index) => (
          <div key={index} className="md:w-[25%]">
            <h3 className="text-[24px] font-semibold mb-3">{section}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition">Dialysis</li>
              <li className="hover:text-white transition">Precautions</li>
              <li className="hover:text-white transition">About Kidney</li>
              <li className="hover:text-white transition">Connect</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm">
        © EASYDIALYSIS, 2025 | ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
