import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { adminService } from "../../services/adminService";
import { addAdminDetails } from "../../features/auth/adminAuth";
import { ClipLoader } from "react-spinners"; 

const AdminLogin = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading,setLoading]=useState(false)
console.log(Data)

  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // vadidate data on frontend
//   const ValidateData = (values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = "email is required";
//     }
//     if (!values.password) {
//       errors.password = "password is required";
//     }
//     return errors;
//   };

  // handling while submit
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("admin clicked")
    try {
      const response = await adminService.adminLogin(Data);
      console.log(response,"response in login")
      if(response.data.success===false){
        alert(response.statusText)
      }
      if(response?.data?.success){
           dispatch(addAdminDetails({ "token": response.data.token }))
           setLoading(false)
         navigate('/admin')
      }
    } catch (error) {
      console.log(error,"error in admin login")
     
    }finally{
      setTimeout(()=>{
        setLoading(false)
      },10000)
    }
   
  
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Log in to book your dialysis appointment
        </p>

        {/* Login Form */}
        <form onSubmit={HandleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              onChange={onHandleChange}
              name="userName"
              type="text"
              id="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none   ${
                // ErrorMessage.email
                  
                  "focus:ring-primary focus:ring-2"
              }`}
            />
            {/* <p className="text-red-500">{ErrorMessage.email}</p> */}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              onChange={onHandleChange}
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none'  
                // ErrorMessage.password
              
             
              
            />
          
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading} // Disable button during loading
            className="w-full py-2 px-4 bg-primary hover:bg-red-400 text-white font-medium rounded-md transition duration-300 flex items-center justify-center"
          >
            {loading ? (
              <ClipLoader color="#ffffff" size={20} /> // Show spinner during loading
            ) : (
              "Log In"
            )}
          </button>
       
        </form>

        {/* Forgot Password and Sign Up */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Reset here
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
