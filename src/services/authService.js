import axiosInstance from "../utils/axios";

export const authService = {
  async userRegister(userData) {
    try {
      const response = await axiosInstance.post('/register', userData);
      return response;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  async userLogin(userData) {
    
    try {
      const response = await axiosInstance.post('/login', userData, { withCredentials: true });
      return response;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  async refreshaccesstoken() {
    try {
      const response = await axiosInstance.get("/refreshaccesstoken", { withCredentials: true });
      return response;
    } catch (error) {
      console.error("Token refresh error:", error);
      throw error;
    }
  },

  async userdata() {
    
    try {
      console.log("entered userdata")
      const response = await axiosInstance.get('/userdata', { withCredentials: true });
      console.log("response in userdata : ",response)
      if(response.data.success){
        console.log(response.data)
        
      }
      return response;
    } catch (error) {
      console.error("User data error:", error);
      throw error;
    }
  },

  async logout() {
    try {
      const response = await axiosInstance.post('/logout');
      return response;
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
};