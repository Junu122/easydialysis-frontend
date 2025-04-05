import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import Dashboard from '../../components/Admin/Dahboard'
import { authService } from '../../services/authService';
import { adminService } from '../../services/adminService';

const DashboardPage = () => {

  
  const [dialysisCenters, setDialysisCenters] = useState([]);
  const [Appoinments,setAppoinments]=useState([])
  const [Users,setUsers]=useState([])
  useEffect(() => {
    const fetchAllDatas= async () => {
      try {
        const response = await authService.dialysisCenters();
        setDialysisCenters(response?.data?.dialysisCenters);
        console.log(response?.data?.dialysisCenters,"centers in dashboard page")
       console.log(dialysisCenters)

        const appoinmentResponse=await adminService.getAppoinments();
        console.log(appoinmentResponse?.data?.Appoinments,"appoinemts in dashboard page")
        setAppoinments(appoinmentResponse?.data?.Appoinments)
        console.log(Appoinments)

        const usersResponse=await adminService.usersData();
        console.log(usersResponse)
        setUsers(usersResponse?.data?.Users)
        console.log(Users)
       
      } catch (error) {
        console.error("Error fetching dialysis centers:", error);
      }
    };
    fetchAllDatas();
  }, []);

  

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <Dashboard centers={dialysisCenters} Appoinments={Appoinments} Users={Users} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;