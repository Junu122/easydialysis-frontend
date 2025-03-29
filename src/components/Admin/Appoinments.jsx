import React from 'react'
import { useState } from "react";
import AdminNavbar from './AdminNavbar';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Calendar, CheckCircle, XCircle } from "lucide-react";
import { NavLink } from 'react-router-dom';
const appointmentsData = [
    { id: 1, patient: "John Doe", date: "2025-03-05", time: "08:00 AM", status: "Pending" },
    { id: 2, patient: "Jane Smith", date: "2025-03-06", time: "10:00 AM", status: "Confirmed" },
    { id: 3, patient: "Mark Wilson", date: "2025-03-07", time: "02:00 PM", status: "Completed" },
  ];
  
  const stats = [
    { title: "Registered Centers", value: 150, icon: Calendar },
    { title: "Appoinments", value: 120, icon: CheckCircle },
    { title: "Registered Users", value: 20, icon: Users },
    { title: "Canceled", value: 10, icon: XCircle },
  ];
  
  const chartData = [
    { year: "2000", appointments: 10 },
    { year: "2001", appointments: 40 },
    { year: "2002", appointments: 50 },
    { year: "2002", appointments: 50 },
  ];
const Appoinments = () => {
     const [appointments, setAppointments] = useState(appointmentsData);
    
        const updateStatus = (id, newStatus) => {
          setAppointments((prev) =>
            prev.map((appt) => (appt.id === id ? { ...appt, status: newStatus } : appt))
          );
        };
  return (
    <div>
    <AdminNavbar />
       <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Bookings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="year" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="appointments" fill="#8884d8" barRadius={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((appt) => (
          <div key={appt.id} className="p-4 space-y-2 bg-white shadow-md rounded-lg border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">{appt.patient}</h2>
            <p className="text-gray-600">Date: {appt.date}</p>
            <p className="text-gray-600">Time: {appt.time}</p>
            <p className="font-medium text-gray-700">Status: {appt.status}</p>
            <select
             onChange={(e) => updateStatus(appt.id, e.target.value)}
              defaultValue={appt.status}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appoinments
