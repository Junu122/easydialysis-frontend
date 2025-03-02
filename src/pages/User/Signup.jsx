import React, { useState } from 'react'
import { authService } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [Data,setData]=useState({
    username:"",
    email:"",
    password:""
  })

  const navigate=useNavigate()

  const [ErrorMessage,setErrorMessage]=useState("")

  const HandleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(prev => ({ ...prev, [name]: value }))
  }
  console.log(Data,"data in signup")

  const ValidateData=(values)=>{
    const errors={};
    if(!values.username){
      errors.username="username is required"
    }
    if(!values.email){
      errors.email="email is required"
    }
    if(!values.password){
      errors.password="password is required"
    }
    return errors
  }

  const HandleSubmit=async(e)=>{
    e.preventDefault()
    const error=ValidateData(Data)

    if(error.username || error.password || error.email){
         setErrorMessage(error)
    }

    const response=await authService.userRegister(Data)
    if(response.data.success){
      navigate("/login")
    }else{
      console.log(response,"fail response")
      error.email=response.data.message;
      setErrorMessage(error)
    }
  }
  return (
    <div className=" flex items-center justify-center  ">

    <div className="bg-white rounded-lg shadow-lg w-[80%] max-w-md p-6 border-2 mt-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Create an Account
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Join us to book your dialysis appointments seamlessly
      </p>

    
      <form onSubmit={HandleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
          onChange={HandleChange}
          name='username'
            type="text"
            id="username"
            placeholder="Enter your username"
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ErrorMessage.username?"ring-2 ring-red-500" : ""}`}
          />
          <p className='text-red-500'>{ErrorMessage.username}</p>
        </div>

 
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            onChange={HandleChange}
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ErrorMessage.email?"ring-2 ring-red-500" : ""}`}
          />
          <p className='text-red-500'>{ErrorMessage.email}</p>
        </div>

   
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
           onChange={HandleChange}
            name="password"
            type="password"
            id="password"
            placeholder="Create a password"
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ErrorMessage.password?"ring-2 ring-red-500" : ""}`}
          />
          <p className='text-red-500'>{ErrorMessage.password}</p>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition duration-300"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="login" className="text-green-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup
