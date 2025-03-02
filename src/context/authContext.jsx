import React, { createContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
 
    checkAuth();
   console.log("checkauth")
   console.log(isAuthenticated,"isauth")
   console.log(loading,"loading")
   if(!isAuthenticated){
      setLoading(false)
   }else{
    setLoading(true)
   }
   console.log(isAuthenticated,"isauth")
   console.log(loading,"loading")
  
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const response = await authService.userdata();
      if (response.data.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        setAccessToken(response.data.accessToken);
        setLoading(true)
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setAccessToken(null);
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsAuthenticated(false);
      setUser(null);
      setAccessToken(null);
    } finally {
      setLoading(false);
    }
  };

  // User login
  const userLogin = async (userData) => {
    try {
      const response = await authService.userLogin(userData);
      if (response.data.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        setAccessToken(response.data.accessToken);
      }
      return response;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // User logout
  const logout = async () => {
    try {
      const response = await authService.logout();
      if (response.data.success) {
        setIsAuthenticated(false);
        setUser(null);
        setAccessToken(null);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Refresh access token
  const refreshToken = async () => {
    try {
      const response = await authService.refreshaccesstoken();
      if (response.data.success) {
        setAccessToken(response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      console.error("Token refresh error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        accessToken,
        loading,
        userLogin,
        logout,
        refreshToken,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};