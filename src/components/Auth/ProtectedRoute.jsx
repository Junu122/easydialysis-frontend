import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminService } from '../../services/adminService';
import { addAdminDetails } from '../../features/auth/adminAuth';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const admintoken = useSelector((state) => state.admin.AdminToken);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkadminauth = async () => {
      try {
        const response = await adminService.getAdminData();
        
        if (response?.data?.success) {
          dispatch(addAdminDetails({ "token": response.data.admin.userName }));
          console.log(response.data, "response data");
        }
      } catch (error) {
        console.log(error, "error in adminrouter");
      } finally {
        setIsLoading(false);
      }
    };
    
    checkadminauth();
  }, [dispatch]);

  // Show loading or spinner while checking authentication
  if (isLoading) {
    return <div>Loading...</div>; // You could replace with a spinner component
  }
  
  // Only redirect after authentication check is complete
  if (!admintoken) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;