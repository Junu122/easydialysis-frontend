import React from "react";
import { assets } from "../assets/assets";
const DialysisCareSection = () => {
  return (
    <section className="bg-white text-primary py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
      
        <div className="lg:w-1/2 mb-8 lg:mb-0 bg-white">
          <img
            src={assets.header_img}
            alt="Dialysis Care"
            className="rounded-lg shadow-lg"
          />
        </div>


        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-bold mb-4">
            Your Trusted Partner in Dialysis Care
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            At our centers, we prioritize your health and comfort. With advanced
            dialysis technology, highly trained professionals, and a
            compassionate approach, we are here to ensure you receive the care
            you deserve. Your well-being is our top priority.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>State-of-the-art dialysis machines</li>
            <li>Expert nephrologists and trained staff</li>
            <li>Hygienic and comfortable facilities</li>
            <li>Personalized care plans for each patient</li>
          </ul>
          <div className="flex space-x-4">
            <a
              href="/book"
              className="bg-white  px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary hover:text-white transition duration-300"
            >
              Book an Appointment
            </a>
            <a
              href="/learn-more"
              className=" border hover:border-primary px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:border-[1px]   transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialysisCareSection;
