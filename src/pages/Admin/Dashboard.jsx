import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
const Dashboard = () => {
  return (
    <>

    <AdminNavbar />
    <div className="bg-blue-600 text-white py-6 px-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">Dialysis Booking Admin Dashboard</h1>
      <p className="mt-2 text-lg">Manage patient bookings, schedules, and dialysis center operations efficiently.</p>
    </div>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Total Bookings</h2>
        <p className="text-3xl font-bold mt-2">1,234</p>
        <p className="text-gray-500">+12% this month</p>
      </div>

  
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
        <p className="text-3xl font-bold mt-2">56</p>
        <p className="text-gray-500">Next 7 days</p>
      </div>

     
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Available Slots</h2>
        <p className="text-3xl font-bold mt-2">24</p>
        <p className="text-gray-500">Today</p>
      </div>

    
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Patient Feedback</h2>
        <p className="text-3xl font-bold mt-2">4.8/5</p>
        <p className="text-gray-500">Average Rating</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard
