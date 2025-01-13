import React from "react";
import { useState } from "react";
import Centercard from "../components/Centercard";
import Footer from "../components/Footer";
const Dialysiscenters = () => {
  const centers = [
    {
      id: 1,
      name: "EasyDialysis Mumbai",
      location: "Mumbai",
      image: "/dialysisimg1.jpg",
    },
    {
      id: 2,
      name: "EasyDialysis Delhi",
      location: "Delhi",
      image: "/dialysisimg2.jpg",
    },
    {
      id: 3,
      name: "EasyDialysis Hyderabad",
      location: "Hyderabad",
      image: "/dialysisimg3.jpeg",
    },
    {
      id: 4,
      name: "EasyDialysis Chennai",
      location: "Chennai",
      image: "/dialysisimg4.jpg",
    },
    {
      id: 5,
      name: "EasyDialysis Bangalore",
      location: "Bangalore",
      image: "/dialysisimg5.jpeg",
    },
    {
      id: 6,
      name: "life dialysis",
      location: "Mumbai",
      image: "/dialysisimg6.jpg",
    },
    {
      id: 7,
      name: "angel  dialysis",
      location: "Mumbai",
      image: "/dialysisimg7.jpg",
    },
    {
      id: 8,
      name: "appolo dialysis",
      location: "Bangalore",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 9,
      name: "CareLife Dialysis",
      location: "Mumbai",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 10,
      name: "Healing Dialysis Center",
      location: "Delhi",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 11,
      name: "EasyDialysis Delhi",
      location: "Delhi",
      image: "/dialysisimg2.jpg",
    },
    {
      id: 12,
      name: "EasyDialysis Hyderabad",
      location: "Hyderabad",
      image: "/dialysisimg3.jpeg",
    },
    {
      id: 13,
      name: "EasyDialysis Chennai",
      location: "Chennai",
      image: "/dialysisimg4.jpg",
    },
    {
      id: 14,
      name: "EasyDialysis Bangalore",
      location: "Bangalore",
      image: "/dialysisimg5.jpeg",
    },
    {
      id: 15,
      name: "life dialysis",
      location: "Mumbai",
      image: "/dialysisimg6.jpg",
    },
    {
      id: 16,
      name: "angel  dialysis",
      location: "Mumbai",
      image: "/dialysisimg7.jpg",
    },
    {
      id: 17,
      name: "appolo dialysis",
      location: "Bangalore",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 18,
      name: "CareLife Dialysis",
      location: "Mumbai",
      image: "/dialysisimg8.jpg",
    },
    {
      id: 19,
      name: "Healing Dialysis Center",
      location: "Delhi",
      image: "/dialysisimg8.jpg",
    },
  ];

  // State for search, filter, and displayed centers
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [filteredCenters, setFilteredCenters] = useState(centers);

  // Handle search

  const handlesearchclick = () => {
    console.log(searchQuery);
    filterCenters(searchQuery, selectedLocation);
  };

  // Handle filter
  const handleFilter = (location) => {
    setSelectedLocation(location);
    filterCenters(searchQuery, location);
  };

  // Filter centers based on search and location
  const filterCenters = (search, location) => {
    const filtered = centers.filter(
      (center) =>
        center.name.toLowerCase().includes(search.toLowerCase()) &&
        (location === "All" || center.location === location)
    );
    setFilteredCenters(filtered);
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#d02b6e] py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Dialysis Centers</h1>
        <p className="mt-2 text-lg">
          Find and book your nearest dialysis center
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 items-center">
        {/* Search Bar */}
        <div className="flex">
          <div className="w-full rounded-md">
            <input
              type="text"
              placeholder="Search dialysis centers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d02b6e]"
            />
          </div>
          <button
            className="bg-black text-white px-2 py-2"
            onClick={handlesearchclick}
          >
            search
          </button>
        </div>

        {/* Filter Dropdown */}
        <select
          value={selectedLocation}
          onChange={(e) => handleFilter(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d02b6e]"
        >
          <option value="All">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      {/* Centers List */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCenters.map((center) => (
         <Centercard key={center.id} center={center}/>
        ))}
      </div>

      {/* No Results */}
      {filteredCenters.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            No centers found. Try searching or changing the filter.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Dialysiscenters;
