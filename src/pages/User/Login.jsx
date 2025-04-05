import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogin } from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errorMessage[name]) {
      setErrorMessage(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validate data on frontend
  const validateData = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateData(data);

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    try {
      const response = await dispatch(userLogin(data));
      
      if (response?.error?.message === 'Network Error') {
        setErrorMessage({ networkError: "Unable to connect to server. Please try again." });
        return;
      }
      
      if (response?.payload?.passerror || response?.payload?.usererror) {
        setErrorMessage({
          email: response.payload.usererror || "",
          password: response.payload.passerror || "",
        });
        return;
      }
      
      if (response?.payload?.success) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage({ networkError: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
          <p className="text-center text-blue-100 mt-2">
            Log in to book your dialysis appointment
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 text-sm"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none transition-all duration-300 ${
                    errorMessage.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-blue-200 focus:border-blue-500"
                  } focus:ring-4`}
                />
                {errorMessage.email && (
                  <div className="text-red-500 text-sm mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage.email}
                  </div>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium text-sm"
                >
                  Password
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none transition-all duration-300 ${
                    errorMessage.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-blue-200 focus:border-blue-500"
                  } focus:ring-4`}
                />
                {errorMessage.password && (
                  <div className="text-red-500 text-sm mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage.password}
                  </div>
                )}
              </div>
            </div>

            {/* Network Error Message */}
            {errorMessage.networkError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errorMessage.networkError}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up now
              </a>
            </p>
          </div>

          {/* Optional: Social Login */}
       
        </div>
      </div>
    </div>
  );
};

export default Login;