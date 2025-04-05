import React, { useState,useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import AppointmentsView from '../../components/Admin/AppoinmentsView';
import { adminService } from '../../services/adminService';
const AppointmentsPage = () => {
 const [dialysisCenters, setDialysisCenters] = useState([]);
 const [Appoinments,setAppoinments]=useState([])
  useEffect(() => {
     const fetchDialysisCenters = async () => {
       try {
         const response = await adminService.allDialysisCenters()
         setDialysisCenters(response?.data?.dialysisCenters);

         const appoinmentResponse=await adminService.getAppoinments();
         setAppoinments(appoinmentResponse?.data?.Appoinments)

       } catch (error) {
         console.error("Error fetching dialysis centers:", error);
       }
     };
     fetchDialysisCenters();
   }, []);
  console.log(dialysisCenters,"dialysis centers in apppoinment page")
  console.log(Appoinments,"appoinments in apppoinment page")
  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <AppointmentsView dialysisCenters={dialysisCenters} Appoinments={Appoinments} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AppointmentsPage;
