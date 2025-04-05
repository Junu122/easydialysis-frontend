import React, { useState,useEffect } from "react";
import { Trash2, Edit, Search, PlusCircle } from "lucide-react";
import { adminService } from "../../services/adminService";
const CentersView = ({ setShowAddCenterModal,  setEditingCenter, setCenterToDelete, setShowDeleteConfirmation,dialysisCenters,setDialysisCenters}) => {

   const [filteredCenters,setFilteredCenters]=useState(dialysisCenters)
    const [searchQuery, setSearchQuery] = useState("");

      useEffect(() => {
    const filtered = dialysisCenters.filter((center) =>
      center.CenterName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCenters(filtered);
  }, [searchQuery, dialysisCenters]);
  console.log(filteredCenters,"filtered centers")

const updateDialysisCenterStatus=async(updateData,centerid)=>{

  try {
    const response=await adminService.updateCenter(updateData,centerid);
    if(response.data.success==true){
      const updatedcenter=response?.data?.updatedcenter
      setDialysisCenters(
        dialysisCenters.map((dialysisCenter)=>{
          if(dialysisCenter._id==centerid){
            return{
              ...dialysisCenter,
              ...updatedcenter
            }
          }
          return dialysisCenter
        })
      )
    }else{
      throw new Error('Failed to update center');
    }
  } catch (error) {
    console.log(error)
  }

}





  const toggleCenterStatus =async (centerId) => {

    const centerToUpdate=dialysisCenters.find(center=>center._id==centerId)
    if(!centerToUpdate)return;
    const newStatus = centerToUpdate.Status === "active" ? "blocked" : "active";
    try {
      await updateDialysisCenterStatus({Status:newStatus},centerId)
    } catch (error) {
      
    }
  };
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Dialysis Centers</h3>
        <button
          onClick={() => setShowAddCenterModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Center
        </button>
      </div>

      <div className="p-6 border-b border-gray-200">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
            placeholder="Search centers..."
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Center Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slots
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {filteredCenters.length>0?(
            filteredCenters.map((center) => (
              <tr key={center._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {center.CenterName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {center.CenterAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {center.ContactNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {center.Slots}/{center.Slots}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      center.Status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {center.Status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setEditingCenter(center)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      setCenterToDelete(center._id);
                      setShowDeleteConfirmation(true);
                    }}
                    className="text-red-600 hover:text-red-900 mr-4"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => toggleCenterStatus(center._id)}
                    className={`${
                      center.Status === "active"
                        ? "text-red-600 hover:text-red-900"
                        : "text-green-600 hover:text-green-900"
                    }`}
                  >
                    {center.Status === "active" ? "Block" : "Activate"}
                  </button>
                </td>
              </tr>
            ))
          ):<tr>no center found .try search another center</tr>}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CentersView;
