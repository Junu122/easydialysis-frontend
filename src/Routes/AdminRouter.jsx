import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { adminService } from '../services/adminService'
import Appoinments from '../components/Admin/Appoinments'
import AddCenter from '../components/Admin/AddCenter'
import Dashboard from '../pages/Admin/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import AdminLogin from '../pages/Admin/adminLogin'
import { addAdminDetails } from '../features/auth/adminAuth'
import DialysisCentersPage from '../pages/Admin/DialysisCentersPage'
import DialysisCenterEdit from '../pages/Admin/DialysisCenterEdit'
const AdminRouter = () => {
  const [initialcheck, setinitialcheck] = useState(false)
  const dispatch = useDispatch()
  const admintoken = useSelector((state) => state.admin.AdminToken);
  console.log(admintoken, "admin token")
  console.log(initialcheck,"initial check")

  useEffect(() => {
    setTimeout(() => {
      const checkadminauth = async () => {

        try {
          const response = await adminService.getAdminData();
          
          
          if (response?.data?.success) {
            dispatch(addAdminDetails({ "token": response.data.admin.userName }))
             
            setinitialcheck(true)
            console.log(response.data,"response data")
          }
        } catch (error) {
          setinitialcheck(true)
          console.log(error,"error in adminrouter")
        }
      }
      checkadminauth()
    }, 1000)

  }, [dispatch])

  setTimeout(() => {
    if (!initialcheck) {
      return <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
  
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  
  
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      </div>;
    }
  }, 1000);

  console.log(admintoken)
  return (
    <>

      <Routes>
        <Route path="/" element={admintoken ? <Dashboard /> : <Navigate to='/admin/admin-login' />} />
        <Route path="/appoinments" element={admintoken?<Appoinments /> : <Navigate to='/admin/admin-login' />} />
        <Route path='/addcenter' element={admintoken?<AddCenter /> :<Navigate to='/admin/admin-login' /> } />
        <Route path='/admin-login' element={admintoken?<Navigate to='/admin' /> : <AdminLogin />} />
        <Route path='/centers' element={admintoken? <DialysisCentersPage /> : <Navigate to='/admin/admin-login' />} />
        <Route path='/edit-centers/:centerid' element={admintoken? <DialysisCenterEdit /> : <Navigate to='/admin/admin-login' />} />
      </Routes>
    </>
  )
}

export default AdminRouter
