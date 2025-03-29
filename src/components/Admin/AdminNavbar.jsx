import React from 'react'
import { useState } from "react";


import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Calendar, CheckCircle, XCircle,SquarePen,ShieldCheck } from "lucide-react";
import { NavLink } from 'react-router-dom';

const AdminNavbar = ({number}) => {
   const activestyle=(style)=>
    style.isActive==true ? "selected" :"";
   
   
  return (
    <div className="p-6 space-y-6 bg-gray-100 ">
    <div className='flex justify-between'>
    <h1 className="text-[15px] md:text-[30px] font-bold text-gray-800">Admin Dashboard</h1>
    <div className="w-7 h-7 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer">j</div>
    </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
          <NavLink to={'/admin/centers'} className={activestyle} >
          <div className="p-4 flex items-center space-x-4 bg-white shadow-md rounded-lg bgcolor ">
            <ShieldCheck className="w-10 h-10 text-blue-600" />
            <div >
              <h2 className="text-lg font-semibold text-gray-700">Registered centers</h2>
              <p className="text-xl font-bold text-gray-900">{number}</p>
            </div>
          </div>
          </NavLink>
          <NavLink to={'/admin/user'} className={activestyle}>
          <div className="p-4 flex items-center space-x-4 bg-white shadow-md rounded-lg bgcolor">
            <Users className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Users</h2>
              <p className="text-xl font-bold text-gray-900"></p>
            </div>
          </div>
          </NavLink>
          <NavLink to={'/admin/appoinments'} className={activestyle}>
          <div className="p-4 flex items-center space-x-4 bg-white shadow-md rounded-lg bgcolor">
            <Calendar className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Appoinments</h2>
              <p className="text-xl font-bold text-gray-900"></p>
            </div>
          </div>
          </NavLink>
          <NavLink to={'/admin/addcenter'} className={activestyle}>
          <div className="p-4 flex items-center space-x-4 bg-white shadow-md rounded-lg bgcolor">
            <SquarePen className="w-10 h-10 text-blue-600"/>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Add a center</h2>
              <p className="text-xl font-bold text-gray-900"></p>
            </div>
          </div>
          </NavLink>
   
      </div>
     
    </div>
  )
}

export default AdminNavbar
