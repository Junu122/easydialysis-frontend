import React from 'react'
import { useState,useEffect } from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import DialysisCenters from '../../components/Admin/DialysisCenters'
import { authService } from '../../services/authService'
const DialysisCentersPage = () => {
    const [centers, setCenters] = useState([]);

       useEffect(() => {
          const fetchcenters=async()=>{
            const response=await authService.dialysisCenters();
            console.log('response in dialysis centers',response.data.data)
           
            setCenters(response?.data?.data)
           
           
          }
          fetchcenters()
        }, []);

        const centercount=centers.length
  return (
    <div>
      <AdminNavbar number={centercount}/>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Dialysis Centers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers.map((center,index) => (
            <DialysisCenters key={index} center={center} />
        ))}
      </div>
    </div>
  </div>
     
    </div>
  )
}

export default DialysisCentersPage
