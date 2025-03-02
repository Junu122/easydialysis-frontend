import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  console.log("entered checkauth")
  const response = await authService.userdata();
  console.log("response in checkauth : ",response)
  return response.data;
});

export const userLogin = createAsyncThunk('auth/userLogin', async (userData,{rejectWithValue}) => {
  const response = await authService.userLogin(userData);
  if(!response.data.success){
    return rejectWithValue(response.data);
  }
  console.log(response,"response in slice")
  return response?.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await authService.logout();
  return response?.data;
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
  const response = await authService.refreshaccesstoken();
  return response?.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated:false,
    user: null,
    isLoading:true
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
      state.isLoading = true; 
        })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoading=false
        
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.accessToken = null;
        state.isLoading=false;
        
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(userLogin.rejected,(state,action)=>{
        state.isAuthenticated=false;
        state.user=null;
        state.accessToken=null;
        state.error=action.payload;
        
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.accessToken = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
      });
  },
});

export default authSlice.reducer;