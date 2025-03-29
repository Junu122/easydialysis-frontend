import React, { useState } from "react";
import { adminService } from "../../services/adminService";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";
const AddCenter = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    places: "",
    city: "",
    phone: "",
    specialities: "",
    photo: null,
  });
  const [ErrorMessage,setErrorMessage]=useState("")
console.log(formData,"formdata")
console.log(ErrorMessage,"error message")
  const [preview, setPreview] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage({...ErrorMessage,[name]:""})
  };

  const validateData=(values)=>{
     const error={};
     if(!values.name){
      error.name="name is required"
     }
     if(!values.places){
       error.places="place is required"
     }
     if(!values.city){
       error.city="city is required"
     }
     if(!values.phone){
       error.phone="phone number is required"
     }
     if(!values.specialities){
       error.specialities="specialities is required"
     }
     if(!values.photo){
      error.photo="photo is required"
    }
     return error
  }

 
  const handleFileChange =async (e) => {
   console.log(e)
   const file=e.target.files[0]
   console.log(file)
    if (file) {
      setFormData({ ...formData, photo:file });
      setErrorMessage({...ErrorMessage,photo:""})
      setPreview(URL.createObjectURL(file));
   
      
    }
  };

  
  const handleSubmit =async (e) => {
    e.preventDefault();
    const error=validateData(formData)
    if(error.name || error.places || error.city || error.phone || error.specialities || error.photo){
      setErrorMessage(error)
      return
    }
    console.log(error,"error on form submit")

    try {
      const data=new FormData()
      const file=formData.photo
      if(!file)return
     data.append('file',file)
     data.append('upload_preset','first-time')
     data.append('cloud_name',' dpg0noki6')

     const response= await fetch('https://api.cloudinary.com/v1_1/dpg0noki6/image/upload',{
      method:'POST',
      body:data
    })
    const uploaddedimageurl=await response.json();
    console.log(uploaddedimageurl,"uploaded cloudinary image")
    if(uploaddedimageurl?.error?.message){
      error.photo=uploaddedimageurl?.error?.message;
      setErrorMessage(error)
      return
    }
    const updatedformData={ ...formData, photo:uploaddedimageurl.public_id + "." + uploaddedimageurl.format };
    console.log(updatedformData,"updated form data")
    const addresponse=await adminService.addDialysisCenter(updatedformData);
    if(addresponse?.response?.data?.success === false){
     
      alert('not authorized. login again')
      navigate('/admin/admin-login')
      return
    }
    console.log(addresponse?.response?.data?.success,"addresponse in add dialysis center")
    setFormData({
      name: "",
      places: "",
      city: "",
      phone: "",
      specialities: "",
      photo: null,
    });

    setPreview(null);
    } catch (error) {
      console.log(error)
      alert('error occured')
    }
      
      
     

      
     
  
       
        
       
      
        
        
       
  
        
      

      

    
  };

  return (
    <>
    <AdminNavbar />
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Add Dialysis Center
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dialysis Center Name */}
          <div>
            <label className="block text-gray-600 font-semibold">Center Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter center name"
              
              className={`w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:outline-none ${ErrorMessage.name? "border-red-500 ring-red-500 ring-2" :"focus:ring-primary focus:ring-2"}`}
            />
            <p className="text-red-500">{ErrorMessage.name}</p>
          </div>

          {/* Place */}
          <div>
            <label className="block text-gray-600 font-semibold">Place</label>
            <input
              type="text"
              name="places"
              value={formData.places}
              onChange={handleChange}
              placeholder="Enter place"
              
              className={`w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:outline-none ${ErrorMessage.places? "border-red-500 ring-red-500 ring-2" :"focus:ring-primary focus:ring-2"}`}
            />
            <p className="text-red-500">{ErrorMessage.places}</p>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              
              className={`w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:outline-none ${ErrorMessage.city? "border-red-500 ring-red-500 ring-2" :"focus:ring-primary focus:ring-2"}`}
            />
            <p className="text-red-500">{ErrorMessage.city}</p>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-600 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              
              className={`w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:outline-none ${ErrorMessage.phone? "border-red-500 ring-red-500 ring-2" :"focus:ring-primary focus:ring-2"}`}
            />
            <p className="text-red-500">{ErrorMessage.phone}</p>
          </div>

          {/* Specialties */}
          <div>
            <label className="block text-gray-600 font-semibold">Specialties</label>
            <textarea
              name="specialities"
              value={formData.specialities}
              onChange={handleChange}
              placeholder="List specialties..."
              
              className={`w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:outline-none ${ErrorMessage.specialities? "border-red-500 ring-red-500 ring-2" :"focus:ring-primary focus:ring-2"}`}
            ></textarea>
            <p className="text-red-500">{ErrorMessage.specialities}</p>
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block text-gray-600 font-semibold">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={`w-full p-2 border rounded-lg border-gray-300 focus:ring-2 focus:outline-none ${ErrorMessage.photo? "border-red-500 ring-red-500 ring-2" :"focus:ring-primary focus:ring-2"}`}
            />
            <p className="text-red-500">{ErrorMessage.photo}</p>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Center
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddCenter;
