import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { MapPin, Star, Clock } from "lucide-react";

const Centercard = ({ center }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cloudinaryBaseUrl = 'http://res.cloudinary.com/dpg0noki6/image/upload/v1741513415/';

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(`/dialysis/${center._id}`);
    }
  };

  // Assuming these properties exist or can be added to your center object
  const rating = 4.2 || 4.5;
  const openHours = "24/7";
 
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={cloudinaryBaseUrl + center.Photo}
          alt={center.CenterName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{center.CenterName}</h2>
        
        <div className="mt-3 flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <p className="text-sm">{center.CenterCity}</p>
        </div>
        
        <div className="mt-2 flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <p className="text-sm">Open: {openHours}</p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          {center.Services && (
            <div className="flex flex-wrap gap-1">
              {center.Services.map((service, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                  {service}
                </span>
              ))}
              {center.Services.length > 2 && (
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                  +{".."}
                </span>
              )}
            </div>
          )}
        </div>
        
        <button
          onClick={handleClick}
          className="mt-5 w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Centercard;