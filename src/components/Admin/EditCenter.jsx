import React, { useState ,useEffect} from 'react'
import { adminService } from '../../services/adminService';

const EditCenter = ({editingCenter,setEditingCenter,dialysisCenters,setDialysisCenters}) => {
  
  const [formData,setformData]=useState({
    CenterName: "",
    CenterAddress: "",
    CenterCity: "",
    ContactNumber: "",
    Services: [],
    Facilities: [],
    DialysisCharge: "",
    Slots: "",
    Photo: null,
  })

  useEffect(() => {
    if (editingCenter) {
      setformData({
        CenterName:editingCenter.CenterName ,
    CenterAddress:editingCenter.CenterAddress ,
    CenterCity:editingCenter.CenterCity ,
    ContactNumber:editingCenter.ContactNumber ,
    Services: editingCenter.Services,
    Facilities:editingCenter.Facilities ,
    DialysisCharge:editingCenter.DialysisCharge ,
    Slots:editingCenter.Slots ,
    Photo: "",
      });
    }
  }, [editingCenter]);
  const [newSpeciality, setNewSpeciality] = useState("");
  const [newFacility, setnewFacility] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [preview, setPreview] = useState(null);
    const [Errors,setErrors]=useState();
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }


  const handleAddServices = () => {
    // if (!newSpeciality.trim()) {
    //   setErrorMessages((prev) => ({
    //     ...prev,
    //     specialities: "Speciality cannot be empty"
    //   }));
    //   return;
    // }

    if (!formData.Services.includes(newSpeciality.trim())) {
      setformData({
        ...formData,
        Services: [...formData.Services, newSpeciality.trim()],
      });
      setNewSpeciality("");
    } else {
      console.log("hello");
    }
  };

  //handling remove services
  const handleRemoveServices = (index) => {
    const updatedServices = [...formData.Services];
    updatedServices.splice(index, 1);
    setformData({
      ...formData,
      Services: updatedServices,
    });
  };

  const handleAddFacilities = () => {
    if (!formData.Facilities.includes(newFacility.trim())) {
      setformData({
        ...formData,
        Facilities: [...formData.Facilities, newFacility.trim()],
      });
      setnewFacility("");
    } else {
      console.log("hello");
    }
  };

  const handleRemoveFacilities = (index) => {
    const updatedFacilities = [...formData.Facilities];
    updatedFacilities.splice(index, 1);
    setformData({
      ...formData,
      Facilities: updatedFacilities,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validImageTypes.includes(file.type)) {
    
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
     
      return;
    }

    setformData({ ...formData, Photo: file });
    
    
    // Release previous object URL to avoid memory leaks
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    
    setPreview(URL.createObjectURL(file));
  };


  //handling upload image to cloudinary
  const uploadImageToCloudinary = async (file) => {
    try {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'first-time');
      data.append('cloud_name', 'dpg0noki6');

      const response = await fetch('https://api.cloudinary.com/v1_1/dpg0noki6/image/upload', {
        method: 'POST',
        body: data
      });
      
      if (!response.ok) {
        throw new Error(`Cloudinary upload failed: ${response.statusText}`);
      }
      
      const uploadedImageData = await response.json();
      
      if (uploadedImageData?.error) {
        throw new Error(uploadedImageData.error.message);
      }
      
      return `${uploadedImageData.public_id}.${uploadedImageData.format}`;
    } catch (error) {
      throw new Error(`Failed to upload image: ${error.message}`);
    }
  };

  console.log(formData)

    const handleEditCenter =async (e) => {
    e.preventDefault();

    try{
      let cloudinaryImageUrl
          try {
               if(formData.Photo){
                cloudinaryImageUrl=await uploadImageToCloudinary(formData.Photo)
               }else{
                cloudinaryImageUrl=editingCenter.Photo
               }
              
           } catch (error) {
               console.log(error)
            }
           const updateData={
            ...formData,
            Photo:cloudinaryImageUrl,
            Facilities: formData.Facilities,
           Services: formData.Services
           }
          const response=await adminService.updateCenter(updateData,editingCenter._id)
          console.log(response,"response in editing center");
          if(response?.data?.updatedcenter){
            const updatedCenter=response?.data?.updatedcenter;
            setDialysisCenters(
                 dialysisCenters.map((dialysisCenter)=>{
                if(dialysisCenter._id==editingCenter._id){
            return{
              ...dialysisCenter,
              ...updatedCenter
            }
          }
          return dialysisCenter
        })
      )
          }
    }catch(error){
   console.log(error)
    }
   
    
    setEditingCenter(null);
  };
  console.log(formData,"formdata in edit dialysis center")
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleEditCenter}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Edit Dialysis Center
                      </h3>
                      <div className="mt-4 space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Center Name
                      </label>
                      <input
                        type="text"
                        value={formData.CenterName}
                        onChange={handleChange}
                        name="CenterName"
                        id="name"
                        
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Center Address
                      </label>
                      <input
                        type="text"
                        name="CenterAddress"
                        value={formData.CenterAddress}
                        onChange={handleChange}
                        id="name"
                        
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        city
                      </label>
                      <input
                        type="text"
                        name="CenterCity"
                        value={formData.CenterCity}
                        onChange={handleChange}
                        id="address"
                        
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="ContactNumber"
                        value={formData.ContactNumber}
                        onChange={handleChange}
                        id="phone"
                        
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="slots"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Total Slots
                      </label>
                      <input
                        type="number"
                        name="Slots"
                        value={formData.Slots}
                        onChange={handleChange}
                        id="slots"
                        min="1"
                        
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="slots"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Dialysis charge
                      </label>
                      <input
                        type="number"
                        name="DialysisCharge"
                        value={formData.DialysisCharge}
                        onChange={handleChange}
                        
                        id="slots"
                        min="1"
                        
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                      />
                    </div>

                    {/* service adding section starts */}
                    <div>
                      <label className="block text-gray-600 font-semibold">
                        Services<span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={newSpeciality}
                          onChange={(e) => setNewSpeciality(e.target.value)}
                          placeholder="Add a speciality"
                          className={`flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none `}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={handleAddServices}
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                          disabled={isSubmitting}
                        >
                          Add
                        </button>
                      </div>

                      {/* List of added services */}
                      {formData.Services.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 mb-1">
                            Added specialities:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {formData.Services.map((Service, index) => (
                              <div
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                              >
                                <span>{Service}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveServices(index)}
                                  className="ml-2 text-blue-800 hover:text-red-500"
                                  disabled={isSubmitting}
                                >
                                  &times;
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* facilities added section starts*/}
                    <div>
                      <label className="block text-gray-600 font-semibold">
                        facilities<span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={newFacility}
                          onChange={(e) => setnewFacility(e.target.value)}
                          placeholder="Add a speciality"
                          className={`flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none `}
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={handleAddFacilities}
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                          disabled={isSubmitting}
                        >
                          Add
                        </button>
                      </div>

                      {/* List of added facilities */}
                      {formData.Facilities.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 mb-1">
                            Added facilities:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {formData.Facilities.map((Facility, index) => (
                              <div
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                              >
                                <span>{Facility}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFacilities(index)}
                                  className="ml-2 text-blue-800 hover:text-red-500"
                                  disabled={isSubmitting}
                                >
                                  &times;
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* photo upload section */}
                    <div>
                      <label
                        htmlFor="photo"
                        className="block text-gray-600 font-semibold"
                      >
                        Upload Photo<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`w-full p-2 border rounded-lg border-gray-300 focus:outline-none`}
                        disabled={isSubmitting}
                      />
                   
                      {preview && (
                        <div className="mt-2 relative">
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-lg border"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              URL.revokeObjectURL(preview);
                              setPreview(null);
                              setformData({ ...formData, photo: null });
                            }}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 
                                hover:bg-red-600 focus:outline-none"
                            disabled={isSubmitting}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Accepted formats: JPG, PNG, GIF, WEBP. Maximum size: 5MB
                      </p>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingCenter(null)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default EditCenter
