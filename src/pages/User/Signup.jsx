import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { authService } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { googleAuth } from '../../features/auth/authSlice';
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Consolidated state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    otp: ""
  });
  const [ui, setUi] = useState({
    step: 1,
    loading: false,
    successMessage: "",
    errors: {},
    verificationId: ""
  });
  
  // Single handler for all form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (ui.errors[name]) {
      setUi(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" }
      }));
    }
  };

  // Unified validation function
  const validateField = (field, value) => {
    if (!value) return `${field} is required`;
    return "";
  };
  
  // Email submission handler
  const submitEmail = async (e) => {
    e.preventDefault();
    
    // Validate email
    const emailError = validateField('email', formData.email);
    if (emailError) {
      setUi(prev => ({
        ...prev,
        errors: { ...prev.errors, email: emailError }
      }));
      return;
    }
    
    // Set loading state
    setUi(prev => ({ ...prev, loading: true }));
    
    try {
      const response = await authService.sendOtp(formData);
      
      if (response?.data?.success) {
        setUi(prev => ({
          ...prev,
          step: 2,
          loading: false,
          successMessage: `OTP has been successfully sent to ${formData.email}`,
          verificationId: response.data.verificationId
        }));
      } else if (response?.success === false) {
        setUi(prev => ({
          ...prev,
          loading: false,
          errors: { ...prev.errors, email: response.message }
        }));
      }
    } catch (error) {
      setUi(prev => ({
        ...prev,
        loading: false,
        errors: { ...prev.errors, email: "Failed to send OTP. Please try again." }
      }));
    }
  };

  // OTP verification handler
  const verifyOtp = async (e) => {
    e.preventDefault();
    
    // Validate OTP
    const otpError = validateField('otp', formData.otp);
    if (otpError) {
      setUi(prev => ({
        ...prev,
        errors: { ...prev.errors, otp: otpError }
      }));
      return;
    }
    
    setUi(prev => ({ ...prev, loading: true, successMessage: "" }));
    
    try {
      const response = await authService.verifyOtp({
        otp: formData.otp,
        VerificationId: ui.verificationId
      });
      
      if (response?.data?.success === true) {
        setUi(prev => ({
          ...prev,
          step: 3,
          loading: false,
          successMessage: "OTP verification successful",
          verifiedEmail: response.data.otpRecord.email
        }));
      } else {
        setUi(prev => ({
          ...prev,
          loading: false,
          errors: { ...prev.errors, otp: response?.message || "Invalid OTP" }
        }));
      }
    } catch (error) {
      setUi(prev => ({
        ...prev,
        loading: false,
        errors: { ...prev.errors, otp: "Failed to verify OTP. Please try again." }
      }));
    }
  };

  // Registration handler
  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validate username and password
    const usernameError = validateField('username', formData.username);
    const passwordError = validateField('password', formData.password);
    
    if (usernameError || passwordError) {
      setUi(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          username: usernameError,
          password: passwordError
        }
      }));
      return;
    }
    
    if (!ui.verifiedEmail) {
      toast.error("Unexpected error occurred. Please re-register");
      return;
    }
    
    setUi(prev => ({ ...prev, loading: true }));
    
    try {
      const response = await authService.userRegister({
        username: formData.username,
        password: formData.password,
        email: ui.verifiedEmail
      });
      
      if (response?.data?.success) {
        toast.success("Registration successful!");
        navigate("/");
      } else {
        const errorMessage = response?.response?.data?.message || response?.message || "Registration failed";
        toast.error(errorMessage);
        setUi(prev => ({
          ...prev,
          loading: false,
          errors: { ...prev.errors, general: errorMessage }
        }));
      }
    } catch (error) {
      setUi(prev => ({
        ...prev,
        loading: false,
        errors: { ...prev.errors, general: "Registration failed. Please try again." }
      }));
    }
  };

  // Google authentication handlers
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      setUi(prev => ({ ...prev, loading: true }));
      const response = await dispatch(googleAuth(credentialResponse.credential));
      
      if (response?.data?.success) {
        toast.success("Google authentication successful!");
        navigate("/");
      } else {
        setUi(prev => ({
          ...prev,
          loading: false,
          errors: { general: response?.data?.message || "Google authentication failed" }
        }));
      }
    } catch (error) {
      setUi(prev => ({
        ...prev,
        loading: false,
        errors: { general: "Failed to authenticate with Google. Please try again." }
      }));
    }
  };

  const handleGoogleLoginError = () => {
    setUi(prev => ({
      ...prev,
      errors: { general: "Google sign-in was unsuccessful. Please try again." }
    }));
  };

  // Render form components based on current step
  const renderFormStep = () => {
    switch (ui.step) {
      case 1:
        return (
          <>
            <div className="mb-6">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
                logo_alignment="center"
                text="signup_with"
              />
            </div>
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-300 w-full"></div>
              <div className="bg-white px-4 text-sm text-gray-500">OR</div>
              <div className="border-t border-gray-300 w-full"></div>
            </div>
            <div className="mb-4">
              <form onSubmit={submitEmail}>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ui.errors.email ? "ring-2 ring-red-500" : ""}`}
                />
                {ui.errors.email && <p className="text-red-500">{ui.errors.email}</p>}
                <button
                  type="submit"
                  disabled={ui.loading}
                  className="w-full mt-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition duration-300"
                >
                  {ui.loading ? "Sending OTP..." : "Send OTP"}
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
          </>
        );
      
      case 2:
        return (
          <div className="mb-4">
            {ui.successMessage && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-green-700">
                {ui.successMessage}
              </div>
            )}
            <form onSubmit={verifyOtp}>
              <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">
                One Time Password
              </label>
              <input
                onChange={handleChange}
                name="otp"
                type="text"
                id="otp"
                value={formData.otp}
                placeholder="Enter your OTP here"
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ui.errors.otp ? "ring-2 ring-red-500" : ""}`}
              />
              {ui.errors.otp && <p className="text-red-500">{ui.errors.otp}</p>}
              <button
                type="submit"
                disabled={ui.loading}
                className="w-full mt-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition duration-300"
              >
                {ui.loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </form>
          </div>
        );
      
      case 3:
        return (
          <div>
            {ui.successMessage && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 text-green-700">
                {ui.successMessage}
              </div>
            )}
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  onChange={handleChange}
                  name="username"
                  type="text"
                  id="username"
                  value={formData.username}
                  placeholder="Enter your username"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ui.errors.username ? "ring-2 ring-red-500" : ""}`}
                />
                {ui.errors.username && <p className="text-red-500">{ui.errors.username}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${ui.errors.password ? "ring-2 ring-red-500" : ""}`}
                />
                {ui.errors.password && <p className="text-red-500">{ui.errors.password}</p>}
              </div>
              <button
                type="submit"
                disabled={ui.loading}
                className="w-full mt-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition duration-300"
              >
                {ui.loading ? "Registering User..." : "Register"}
              </button>
            </form>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[80%] max-w-md p-6 border-2 mt-5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join us to book your dialysis appointments seamlessly
        </p>

        {ui.errors.general && (
          <p className="text-center text-red-500 mb-4">{ui.errors.general}</p>
        )}

        {renderFormStep()}
      </div>
    </div>
  );
};

export default Signup;