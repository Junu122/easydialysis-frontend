import React from 'react'

const Signup = () => {
  return (
    <div className=" flex items-center justify-center  ">

    <div className="bg-white rounded-lg shadow-lg w-[80%] max-w-md p-6 border-2 mt-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Create an Account
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Join us to book your dialysis appointments seamlessly
      </p>

    
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

 
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

   
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
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
