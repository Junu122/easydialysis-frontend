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
    async updateCenter(data,centerid){
        try {
            const response=await adminaxiosInstance.put(`/update-center/${centerid}`,data,{withCredentials:true});
            console.log(response)
            return response
        } catch (error) {
            return error.response
        }
    },
    async getAppoinments(){
        try {
            const response=await adminaxiosInstance.get('/get-appoinments',{withCredentials:true})
            return response
        } catch (error) {
            console.log(error)
        }
    },
    async deleteCenter(centerid){
        try {
            const response=await adminaxiosInstance.delete(`/delete-center/${centerid}`);
            return response
        } catch (error) {
            return error.response
        }
    },
    async updateAppoinment(data,appoinmentid){
        try {
            const response=await adminaxiosInstance.put(`/update-appoinment/${appoinmentid}`,data,{withCredentials:true})
            return response
        } catch (error) {
            console.log(error)
        }
    },
    async usersData(){
        try {
            const response=await adminaxiosInstance.get('/users',{withCredentials:true});
            return response
        } catch (error) {
            console.log(error)
        }
    },
    async updateUser(data,userid){
        try {
            const response=await adminaxiosInstance.put(`/update-user/${userid}`,data,{withCredentials:true})
            return response
        } catch (error) {
            console.log(response)
        }
    },
    async allDialysisCenters(){
        try {
            const response=await adminaxiosInstance.get('/dialysis-centers',{withCredentials:true})
            return response
        } catch (error) {
            console.log(response)
        }
    }
}