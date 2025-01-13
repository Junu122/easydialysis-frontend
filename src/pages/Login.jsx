import React, { useState } from 'react'

const Login = () => {
  const [Data,setData]=useState({
    email:"",
    password:""
  })
  const [ErrorMessage,setErrorMessage]=useState("")

  const onHandleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setData(prev => ({ ...prev, [name]: value }))
  }
  console.log(Data,"data in login")


  const ValidateData = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = "email is required"
    }
    if (!values.password) {
      errors.password = "password is required"
    }
    return errors
  }

  const HandleSubmit=(e)=>{
    e.preventDefault()
    console.log("submit")

    const error=ValidateData(Data)
  console.log(error,"error")
    if(error.email || error.password){
      setErrorMessage(error)
    }
  }
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
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            onChange={onHandleChange}
            name='email'
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none   ${ErrorMessage.email?"border-red-500 ring-red-500 ring-2" : "focus:ring-primary focus:ring-2"}` }
          />
          <p className='text-red-500'>{ErrorMessage.email}</p>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
          onChange={onHandleChange}
            name='password'
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none   ${ErrorMessage.password?"border-red-500 ring-red-500 ring-2" : "focus:ring-primary focus:ring-2"}`}
          />
           <p className='text-red-500'>{ErrorMessage.password}</p>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary hover:bg-red-400 text-white font-medium rounded-md transition duration-300"
        >
          Log In
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
  )
}

export default Login
