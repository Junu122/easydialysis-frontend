import React, { useState,useEffect } from 'react';
import { Calendar, Clock, Check, X, AlertCircle, Trash2,MapPin ,Wallet  } from 'lucide-react';
import { authService } from '../../services/authService';

const Myappoinments = () => {
 

  const [BookingData,setBookingData]=useState()

  useEffect(()=>{
   const getmybookings=async()=>{ 
    const response=await authService.getBookingDetails();
    console.log(response)
    setBookingData(response?.data?.myBookingData)
  }
  getmybookings()

  },[setBookingData])
  console.log("BookingData of user :",BookingData)

  const getStatusBadge = (status) => {
    switch(status) {
      case 'confirmed':
        return <span className="flex items-center text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm"><Check className="w-4 h-4 mr-1" /> Confirmed</span>;
      case 'pending':
        return <span className="flex items-center text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm"><AlertCircle className="w-4 h-4 mr-1" /> Pending</span>;
      case 'completed':
        return <span className="flex items-center text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-sm"><Check className="w-4 h-4 mr-1" /> Completed</span>;
      case 'cancelled':
        return <span className="flex items-center text-red-600 bg-red-100 px-2 py-1 rounded-full text-sm"><X className="w-4 h-4 mr-1" /> Cancelled</span>;
      default:
        return null;
    }
  };

  const cancelAppointment =async (id) => {
    const canceldata={
      appoinmentId:id
    }
    const response=await authService.cancelBooking(canceldata)
    console.log(response,"response from canceldata")
    setBookingData(BookingData.map(app => 
      app._id === id ? {...app, bookingStatus
        : 'cancelled'} : app
    ));
    
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
      
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-600 mt-2">Manage your upcoming appointments</p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Upcoming</p>
              <p className="text-xl font-semibold">{BookingData?.filter(a => a.bookingStatus === 'confirmed').length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-xl font-semibold">{BookingData?.filter(a => a.bookingStatus === 'pending').length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-xl font-semibold">{BookingData?.filter(a => a.bookingStatus === 'completed').length}</p>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Your Appointments</h2>
          </div>
          {
            !BookingData?<div>no appoinments found</div>:(
              <div className="divide-y divide-gray-200">
            {BookingData?.map(appointment => (
              <div key={appointment?._id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-medium text-gray-900">{appointment?.dialysisCenterId?.CenterName}</h3>
                    <div className="mt-1 text-gray-600">
                      <p className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {appointment?.appoinmentDate} at {appointment?.appoinmentTime}
                      </p>
                      <p className="flex items-center mt-1">
                      <MapPin  className="w-4 h-4 mr-2"/>
                      {appointment?.dialysisCenterId?.CenterAddress +  "," + appointment?.dialysisCenterId?.CenterCity}</p>
                      <p className=" flex items-center mt-1 text-green-500">
                      <Wallet className='w-4 h-4 mr-2'/>
                      {appointment.paymentStatus}
                      </p>
                    </div>
                    {/* {appointment.notes && (
                      <p className="mt-2 text-sm text-gray-500 italic">{appointment.notes}</p>
                    )} */}
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end">
                    <div className="mb-3">
                      {getStatusBadge(appointment?.bookingStatus )}
                    </div>
                    
                    {(appointment?.bookingStatus === 'confirmed' || appointment?.bookingStatus === 'pending') && (
                      <button 
                        onClick={() => cancelAppointment(appointment?._id)}
                        className="flex items-center text-red-600 hover:text-red-800 transition-colors duration-150"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Cancel Appointment
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
            )
          }
        
        </div>
      </div>
    </div>
  );
};

export default Myappoinments;