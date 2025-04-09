import {useraxiosInstance} from '../utils/axios'

export const authService = {

  async sendOtp(email){
      try {
        const response=await useraxiosInstance.post('/send-otp',email)
        return response
      } catch (error) {
        return error
      }
  },
  async verifyOtp(data){
       try {
        const response=await useraxiosInstance.post('/verify-otp',data)
        return response
       
       } catch (error) {
       
        return error
       }
  },
  async userRegister(userData) {
    try {
      const response = await useraxiosInstance.post('/register', userData);
      return response;
    } catch (error) {
      
      return error
    }
  },

  async userLogin(userData) {
    
    try {
      const response = await useraxiosInstance.post('/login', userData, { withCredentials: true });
      return response;
    } catch (error) {
     
     return error
    }
  },

  async refreshaccesstoken() {
    try {
      const response = await useraxiosInstance.get("/refreshaccesstoken", { withCredentials: true });
      return response;
    } catch (error) {
      console.error("Token refresh error:", error);
      throw error;
    }
  },

  async userdata() {
    
    try {
      console.log("entered userdata")
      const response = await useraxiosInstance.get('/userdata', { withCredentials: true });
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
      const response = await useraxiosInstance.post('/logout');
      return response;
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  async dialysisCenters(){
    try {
      const response=await useraxiosInstance.get('/dialysis-centers');
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async makePayment(bookingData){
    try {
      const response=await useraxiosInstance.post('/make-payment',bookingData,{withCredentials:true});
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async getPaymentDetails(sessionId){
    try {
      const response=await useraxiosInstance.get(`/booking-details?session_id=${sessionId}`);
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async getBookingDetails(){
    try {
      const response=await useraxiosInstance.get('/my-bookings',{withCredentials:true})
      return response
    } catch (error) {
      console.log(response)
    }
  },
  async cancelBooking(updateData){
    try {
      const response=await useraxiosInstance.put('/cancel-booking',updateData,{withCredentials:true});
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async googleAuth(credential){
    try {
      const response=await useraxiosInstance.post('/google-auth',{credential})
      return response
    } catch (error) {
      console.log(error)
    }
  }
};