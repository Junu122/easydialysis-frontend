import React from 'react'; 
import { assets } from '../../assets/assets'; 
import { Link } from 'react-router-dom';

import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 px-4">
        {/* Logo Section */}
        <div className="shrink-0 mb-4">
          <img src={assets.Companylogo} alt="Company Logo" className="w-20" />
        </div>
        
        {/* For Patients Section */}
        <div className="md:w-1/4">
          <h3 className="text-2xl font-semibold mb-3">For Patients</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/kidney" className="hover:text-white transition cursor-pointer block">
                About Kidney
              </Link>
            </li>
            <li>
              <Link to="/KidneyMedicationGuide" className="hover:text-white transition cursor-pointer block">
                Medication Guide
              </Link>
            </li>
            <li>
              <Link to="/kidneyDiet" className="hover:text-white transition cursor-pointer block">
                Diet & Nutrition
              </Link>
            </li>
            
          </ul>
        </div>

      
       

      
        <div className="md:w-1/4">
          <h3 className="text-2xl font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/educational-materials" className="hover:text-white transition cursor-pointer block">
                Educational Materials
              </Link>
            </li>
            <li>
              <Link to="/financial-assistance" className="hover:text-white transition cursor-pointer block">
                Financial Assistance
              </Link>
            </li>
            <li>
              <Link to="/support-groups" className="hover:text-white transition cursor-pointer block">
                Support Groups
              </Link>
            </li>
            <li>
              <Link to="/research-updates" className="hover:text-white transition cursor-pointer block">
                Research Updates
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className=" flex hover:text-white transition cursor-pointer ">
                <Phone size={18} className="mr-2" />
                <span>(555) 123-4567</span>
              </li>
              <li className=" flex hover:text-white transition cursor-pointer ">
                <Mail size={18} className="mr-2" />
                <span>contact@easydialysis.com</span>
              </li>
              <li className=" flex hover:text-white transition cursor-pointer ">
                <MapPin size={18} className="mr-2" />
                <span>2nd floor,ANC business park,Bangalore-560064</span>
              </li>
              <li className=" flex hover:text-white transition cursor-pointer ">
                <Clock size={18} className="mr-2" />
                <span>Mon-Sat: 6:00 AM - 8:00 PM</span>
              </li>
            </ul>
        </div>
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