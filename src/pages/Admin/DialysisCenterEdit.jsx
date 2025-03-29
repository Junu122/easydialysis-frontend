import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { authService } from '../../services/authService';
import { PencilAltIcon, CheckIcon } from '@heroicons/react/solid';
import { adminService } from '../../services/adminService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAdminDetails } from '../../features/auth/adminAuth';
const DialysisCenterEdit = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
     const coludinarybase_url='http://res.cloudinary.com/dpg0noki6/image/upload/v1741513415/'
    const [allCenters, setallCenters] = useState([]);
  const [editedCenter, setEditedCenter] = useState({});
  const [editing,setediting]=useState(false)
  const {centerid}=useParams()

  useEffect(()=>{

    const fetchcenter=async()=>{
        try {
            const response=await authService.dialysisCenters()
            console.log(response,"response in dialysis edit")
            setallCenters(response.data.data)
        } catch (error) {
            console.log(error)
        }
       
    }

    fetchcenter()
  },[centerid])

  console.log(allCenters,"dialysis centers")

  const clickedcenter=allCenters?.find((center)=>center._id==centerid)
 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCenter({ ...editedCenter, [name]: value });
      };

      const handleEditing=()=>{
        setEditedCenter({ ...clickedcenter })
         setediting(true)
      }
   
console.log(editedCenter,"editingcenter")

const handleUpdate=async()=>{
   try {
    const response=await adminService.updateCenter(editedCenter,clickedcenter)
    console.log(response.response.data,"response of edited center")
    if(response.response.data.success===false){
        dispatch(addAdminDetails({ "token": null }))
      return navigate('/admin/admin-login')
    }
    setEditedCenter({
           name: "",
          places: "",
          city: "",
          phone: "",
          specialities: ""
    })
    navigate('/admin/centers')

   } catch (error) {
    
   }

}

  return (
<>
<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="font-extrabold text-2xl md:text-4xl lg:text-3xl mb-8 text-center">
        EDIT DIALYSIS CENTER HERE
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-64"
              src={coludinarybase_url + clickedcenter?.photo}
              alt={clickedcenter?.name}
            />
          </div>
          <div className="p-6 md:p-8">
            
            <h2 className="mt-2 text-primary text-2xl md:text-3xl font-bold ">
              {clickedcenter?.name}
            </h2>
            <p className="mt-2 text-gray-600">
              <span className="font-medium">Address:</span> {clickedcenter?.places}
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-medium">Phone:</span> {clickedcenter?.phone}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Services:</h3>
             
            </div>
            {!editing && (
              <button
                onClick={handleEditing}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit Details
              </button>
            )}
          </div>
        </div>
      </div>
      {editing && (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-6">Edit Dialysis Center</h2>
          <div className="flex flex-col md:grid md:grid-cols-2  gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={editedCenter.name}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Place</label>
              <input
                type="text"
                name="places"
                value={editedCenter.places}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={editedCenter.city}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={editedCenter.phone}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Specialities</label>
              <input
                type="text"
                name="specialities"
                value={editedCenter.specialities}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
          
          </div>
          <div className="mt-6 flex justify-end">
            <button
             onClick={handleUpdate}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
</>
  )
}

export default DialysisCenterEdit
