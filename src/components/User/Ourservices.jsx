import React from "react";
import { assets } from "../../assets/assets";
const Ourservices = ({service}) => {
    return (
       
        <div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Home Dialysis"
                className="w-full h-48 object-cover rounded-t-md"
            />
            <h2 className="text-xl font-semibold mt-4">{service.heading}</h2>
            <p className="text-gray-600 mt-2">
                {service.paragraph}
            </p>
        </div>
        </div>
     
    
  );
};

export default Ourservices;
