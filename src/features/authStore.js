import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'
import adminAuth from './auth/adminAuth'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin:adminAuth.reducer,

 
  },
});