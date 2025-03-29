import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { checkAuth } from '../features/auth/authSlice';
import { jsx } from 'react/jsx-runtime';
const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    // Check auth status when component mounts
    setTimeout(()=>{
      dispatch(checkAuth())
        .finally(() => {
          console.log("response succeed : ")
        });
        setInitialCheckDone(true);
        console.log(initialCheckDone,"555555")
        console.log(isAuthenticated,"666666")
    },1000)
  }, [dispatch]);

  // Show loading only during initial auth check
  if (!initialCheckDone) {
    return <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="flex flex-col items-center">
        
        <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
       
        <p class="mt-4 text-gray-700">Loading...</p>
    </div>
</div>;
  }

  // After initial check, redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;