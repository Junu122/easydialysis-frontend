import React, { useState } from 'react'
import {  User, Calendar, MapPin, AlertTriangle } from 'lucide-react';
const Dahboard = ({Appoinments,centers,Users}) => {
  const [Today,setToday]=useState()
useState(()=>{
  const newdate=new Date();
 const todayFormat= newdate.toISOString().split("T")[0];
 setToday(todayFormat)
 
},[])
console.log(Today)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="rounded-full bg-blue-100 p-3">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 text-sm font-medium">Total Centers</h2>
            <p className="text-2xl font-semibold text-gray-900">{centers.length}</p>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-green-500 text-sm font-medium">
            {centers.filter(c => c.Status === 'active').length} Active Centers
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="rounded-full bg-green-100 p-3">
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 text-sm font-medium">Appointments for (Today)</h2>
            <p className="text-2xl font-semibold text-gray-900">
              {Appoinments.filter(a => a.appoinmentDate.split("T")[0] === Today).length}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-blue-500 text-sm font-medium">
            {Appoinments?.filter(a => a.bookingStatus=== 'pending').length} pending
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="rounded-full bg-purple-100 p-3">
            <User className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 text-sm font-medium">Total Users</h2>
            <p className="text-2xl font-semibold text-gray-900">{Users?.length}</p>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-red-500 text-sm font-medium">
            {Users.filter(u => u.status===false).length} Blocked users 
          </span> 
          
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="rounded-full bg-yellow-100 p-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 text-sm font-medium">Available Slots</h2>
            <p className="text-2xl font-semibold text-gray-900">
              {/* {centers.reduce((total, center) => center.status === 'active' ? total + center.availableSlots : total, 0)} */}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-yellow-500 text-sm font-medium">
            {/* Across {centers.filter(c => c.status === 'active').length} active centers */}
          </span>
        </div>
      </div>
      
      <div className="md:col-span-2 lg:col-span-4 bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Appointments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Center</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Appoinments?.slice(0, 5).map((appointment) => (
                <tr key={appointment._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{appointment?.userId?.username}</div>
                    <div className="text-sm text-gray-500">{appointment?.stripePaymentId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment?.dialysisCenterId?.CenterName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{appointment?.appoinmentDate.split('T')[0]}</div>
                    <div className="text-sm text-gray-500">{appointment?.appoinmentTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${appointment?.bookingStatus === 'confirmed' ? 'bg-green-100 text-green-800' : 
                        appointment?.bookingStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {appointment?.bookingStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dahboard
