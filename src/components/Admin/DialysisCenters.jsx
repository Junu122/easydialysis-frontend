import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
const DialysisCenters = ({center}) => {
  const navigate=useNavigate()
  const [selectedCenter, setSelectedCenter] = useState(null);

 

    
  const handleclick = (center) => {
    navigate(`/admin/edit-centers/${center._id}`)
   console.log("clicked",center._id)
  };

 

  return (
   
   
   
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg cursor-pointer" onClick={()=>handleclick(center)} >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
               {center.name}
              </h2>
              <p className="text-gray-600 mb-2 ">
                <span className="font-medium">Address:{center.places + "," + center.city }</span> 
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Phone:{center.phone}</span> 
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Services:
                </h3>
                {/* <ul className="list-disc list-inside text-gray-700">
                  {center.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
  );
};

// const EditDialysisCenter = ({ center, onClose }) => {
//   const [name, setName] = useState(center.name);
//   const [location, setLocation] = useState(center.location);

//   const handleSave = () => {
//     axios.put(`/api/dialysis-centers/${center._id}`, { name, location })
//       .then(response => {
//         onClose();
//         window.location.reload();
//       })
//       .catch(error => console.error("Error updating center:", error));
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4">Edit Dialysis Center</h2>
//         <input className="w-full p-2 border rounded mb-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//         <input className="w-full p-2 border rounded mb-2" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
//         <div className="mt-4 flex gap-2">
//           <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
//           <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default DialysisCenters;
