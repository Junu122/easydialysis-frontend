import React, { useState,useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import UsersView from '../../components/Admin/UsersView';
import { adminService } from '../../services/adminService';

const UsersPage = () => {
 const [Users,setUsers]=useState([]);

 useEffect(()=>{
   const fetchUsers=async()=>{
    try {
      const response=await adminService.usersData()
      console.log(response,"response in userpage")
      if(response?.data?.Users){
        setUsers(response?.data?.Users)
      }
    } catch (error) {
      console.log(error)
    }
   }
   fetchUsers()
 },[])

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <UsersView Users={Users} setUsers={setUsers}/>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UsersPage;