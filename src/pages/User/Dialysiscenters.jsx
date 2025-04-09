import React, { useState, useEffect } from "react";
import Centercard from "../../components/User/Centercard";
import Footer from "../../components/User/Footer";

import { Search, MapPin, Hospital, Heart, Activity } from "lucide-react";
import { authService } from "../../services/authService";

const Dialysiscenters = () => {
  const [newdialysis, setnewdialysis] = useState([]);
  const [filteredCenters, setFilteredCenters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 90 ? 90 : newProgress;
      });
    }, 2000);

    // Initial page loading effect
    const fetchcenters = async () => {
      setLoading(true);
      try {
        const response = await authService.dialysisCenters()
        setnewdialysis(response?.data?.dialysisCenters);
        setFilteredCenters(response?.data?.dialysisCenters);
        
        if(response?.data?.dialysisCenters){
          setLoadingProgress(100);
          setTimeout(() => {
            setPageLoading(false);
            setLoading( false);
          }, 500);
        }
       
        
        // Add a small delay after data loads to show 100% completion
      
        
        
      } catch (error) {
        console.error("Error fetching centers:", error);
        setLoadingProgress(100);
        setTimeout(() => {
          setPageLoading(false);
          setLoading(false);
        }, 500);
      }
    };
    
    fetchcenters();
    window.scrollTo(0, 0);

    return () => clearInterval(progressInterval);
  }, []);

  // Handle search
 

  // Handle filter
  const handleFilter = (location) => {
    setSelectedLocation(location);
    filterCenters(searchQuery, location);
  };

  // Filter centers based on search and location
  const filterCenters = async (search, location) => {
    const filtered = await newdialysis.filter(
      (center) =>
        center.CenterName.toLowerCase().includes(search.toLowerCase()) &&
        (location === "All" || center.CenterCity === location)
    );
    setFilteredCenters(filtered);
  };

  // Handle search on enter key
  const handleSearchChange = (e) => {
    const newsearchQuery=e.target.value;
    setSearchQuery(newsearchQuery)
    filterCenters(searchQuery,selectedLocation)
  };

  // Get unique cities for filter
  const uniqueCities = [...new Set(newdialysis?.map(center => center?.CenterCity))].sort();

  // Full-page loading screen
  if (pageLoading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="relative mb-8">
          {/* Pulsing circles */}
          <div className="absolute inset-0 rounded-full bg-pink-500/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
          
          {/* Heart beat animation */}
          <div className="relative h-28 w-28 flex items-center justify-center">
            <Heart className="h-16 w-16 text-white animate-pulse" strokeWidth={1.5} />
            
            {/* Animated circle around icon */}
            <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="45" 
                stroke="white" 
                strokeWidth="2"
                strokeDasharray="10,5"
                fill="none" 
              />
            </svg>
            
            {/* Small orbiting icons */}
            <div className="absolute h-10 w-10 animate-orbit" style={{ animationDuration: '3s' }}>
              <Hospital className="h-6 w-6 text-pink-700 absolute -top-3 -left-3" />
            </div>
            <div className="absolute h-10 w-10 animate-orbit" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <Activity className="h-6 w-6 text-pink-700 absolute -bottom-3 -right-3" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3 tracking-wide">Dialysis Centers</h1>
        <p className="text-white/80 mb-8 text-center max-w-sm">Loading your healthcare journey...</p>
        
        {/* Progress bar */}
        <div className="w-64 md:w-80 h-2 bg-pink-400 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-pink-800 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}  
          ></div>
        </div>
        <p className="text-pink-700 text-sm">{Math.round(loadingProgress)}%</p>
        
        {/* Animated dots */}
        <div className="flex space-x-2 mt-8">
          <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-4">
      {/* Hero Section with Gradient */}
 

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8 ">
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 ">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search dialysis centers by name..."
                value={searchQuery}
                onChange={handleSearchChange}
               
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => handleFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              >
                <option value="All">All Locations</option>
                {uniqueCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredCenters.length} Centers {selectedLocation !== "All" ? `in ${selectedLocation}` : "Available"}
          </h2>
          
          {selectedLocation !== "All" && (
            <button 
              onClick={() => handleFilter("All")} 
              className="text-pink-600 hover:text-pink-700 flex items-center"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>

      {/* Centers Grid with Animation */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pink-600 border-r-transparent"></div>
            <p className="mt-4 text-lg text-gray-600">Loading centers...</p>
          </div>
        )}
            
        {!loading && filteredCenters.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map((center, index) => (
              <div 
                key={center._id} 
                className="transform transition duration-300 hover:scale-105 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <Centercard center={center} />
              </div>
            ))}
          </div>
        )}
            
        {!loading && filteredCenters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No centers found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLocation("All");
                setFilteredCenters(newdialysis);
              }}
              className="mt-6 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

// Add this to your global CSS or inline style for animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
  }
  
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-orbit {
    animation: orbit 3s linear infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out forwards;
  }
`;
document.head.appendChild(styleSheet);

export default Dialysiscenters;