import React from "react";
import { useNavigate } from 'react-router-dom';
const Centercard = ({center}) => {
  const navigate=useNavigate()
  return (
   
    <div
            
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={center.image}
              alt={center.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{center.name}</h2>
              <p className="text-gray-600 mt-2">Location: {center.location}</p>
              <button
                onClick={() => navigate(`/dialysis/${center.id}`)}
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
  
  );
};

export default Centercard;
