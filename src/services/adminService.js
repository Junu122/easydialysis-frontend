import { adminaxiosInstance } from "../utils/axios";

export const adminService={
    async addDialysisCenter(data){
        try {
            const response=await adminaxiosInstance.post('/add-dialysis-center',data)
            return response
        } catch (error) {
            console.log(error)
        }
    },
    async getAdminData(){
        try {
            const response=await adminaxiosInstance.get('/get-admin',{withCredentials:true})
            return response
        } catch (error) {
            
        }
    },
    async adminLogin(data){
        console.log(data,"admin input data in adminservice")
        try {
            const response=await adminaxiosInstance.post('/admin-login',data);
            console.log(response,"resppnse in service")
            return response
        } catch (error) {
            console.log(error,"error in admin service")
            return error.response
          
        }
    },
    async updateCenter(data,clickedcenter){
        try {
            const response=await adminaxiosInstance.put(`/update-center/${clickedcenter._id}`,data,{withCredentials:true});
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}