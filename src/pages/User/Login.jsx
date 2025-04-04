import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogin } from "../../features/auth/authSlice";

const Login = () => {
 const dispatch=useDispatch()
  const navigate = useNavigate();
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [ErrorMessage, setErrorMessage] = useState("");
  console.log(ErrorMessage,"errormessage")

  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // vadidate data on frontend
  const ValidateData = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  };

  // handling while submit
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const error = ValidateData(Data);

    if (error.email || error.password ) {
      setErrorMessage(error);
      return
    }

    const response = await dispatch(userLogin(Data));
    console.log(response,"response in login")
    if(response?.error?.message==='Network Error'){
      error.networkerror="internal server error"
      setErrorMessage(error);
    }
    if (response?.payload?.passerror || response?.payload?.usererror ) {
      error.email = response.payload.usererror;
      error.password = response?.payload?.passerror;
      
      setErrorMessage(error);
    }
    if (response?.payload?.success) {
      navigate("/");
    }
  };
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="bg-white rounded-lg sm:border-t-0 md:border-2 shadow-lg w-full max-w-md p-6">
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
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none   ${
                ErrorMessage.email
                  ? "border-red-500 ring-red-500 ring-2"
                  : "focus:ring-primary focus:ring-2"
              }`}
            />
            <p className="text-red-500">{ErrorMessage.email}</p>
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
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none   ${
                ErrorMessage.password
                  ? "border-red-500 ring-red-500 ring-2"
                  : "focus:ring-primary focus:ring-2"
              }`}
            />
            <p className="text-red-500">{ErrorMessage.password}</p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-red-400 text-white font-medium rounded-md transition duration-300"
          >
            Log In
          </button>
          <p className="text-red-500">{ErrorMessage.networkerror}</p>
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

export default Login;
