import { createSlice } from '@reduxjs/toolkit';


const adminAuth=createSlice({
    name:'admin',
    initialState:{
        token:null
    },
    reducers:{
        addAdminDetails(state,action){
           
            const adminDetails = action.payload;
            state.AdminToken = adminDetails.token;
            console.log("adminDetails in redux : ",adminDetails)
            console.log("admdinTooken",state.AdminToken)
        }
    }
})

export const {addAdminDetails} = adminAuth.actions;
export default adminAuth