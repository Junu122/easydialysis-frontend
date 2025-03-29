import React from "react";
import { useState,useEffect } from "react";
import Centercard from "../../components/User/Centercard";
import Footer from "../../components/User/Footer";
import { authService } from "../../services/authService";
const Dialysiscenters = () => {

 
  const [newdialysis,setnewdialysis]=useState([])
  const [filteredCenters, setFilteredCenters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  

   useEffect(() => {
    const fetchcenters=async()=>{
      const response=await authService.dialysisCenters();
      console.log('response in dialysis centers',response.data.data)
      setnewdialysis(response?.data?.data)
      setFilteredCenters(response?.data?.data)
    }
      
    fetchcenters()
      window.scrollTo(0, 0);
  }, []);
 
  console.log(newdialysis,"newdialysis")
  console.log(filteredCenters,"filtered centers")

  

  // State for search, filter, and displayed centers
 
  

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
  const filterCenters =async (search, location) => {
    const filtered =await newdialysis.filter(
      (center) =>
        center.name.toLowerCase().includes(search.toLowerCase()) &&
        (location === "All" || center.city === location)
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
          <option value="MUMBAI">Mumbai</option>
          <option value="KANNUR">KANNUR</option>
          <option value="BANGALORE">BANGALORE</option>
          <option value="CHENNAI">Chennai</option>
         
        </select>
      </div>

      {/* Centers List */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCenters?.map((center) => (
         <Centercard key={center._id} center={center}/>
        ))}
      </div>

      {/* No Results */}
      {filteredCenters?.length === 0 && (
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
