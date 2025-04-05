import React, { useState, useEffect } from 'react';
import { Eye, Search } from 'lucide-react';
import { adminService } from '../../services/adminService';

const AppointmentsView = ({ dialysisCenters, Appoinments }) => {
  // Create a local copy of Appointments that we can modify
  const [allAppointments, setAllAppointments] = useState(Appoinments);
  const [filteredAppointments, setFilteredAppointments] = useState(Appoinments);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Update local state when props change
  useEffect(() => {
    setAllAppointments(Appoinments);
  }, [Appoinments]);

  useEffect(() => {
    // Use the local copy for filtering instead of the prop
    let filtered = allAppointments;

    //filter by searching
    if (searchQuery) {
      filtered = filtered.filter((Appoinment) => 
        Appoinment.userId?.username?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // filter by dialysis center
    if (selectedCenter) {
      filtered = filtered.filter((appoinment) => 
        appoinment.dialysisCenterId?._id === selectedCenter
      );
    }

    // filter by the status
    if (selectedStatus) {
      filtered = filtered.filter((appoinment) => 
        appoinment.bookingStatus === selectedStatus
      );
    }

    // Filter the appoinment by date
    if (selectedDate) {
      filtered = filtered.filter((appoinment) => 
        appoinment.appoinmentDate.split('T')[0] === selectedDate
      );
    }

    setFilteredAppointments(filtered);
  }, [searchQuery, selectedCenter, selectedStatus, selectedDate, allAppointments]);

  const openStatusModal = (appointment) => {
    setSelectedAppointment(appointment);
    setStatusModalOpen(true);
  };

  const handleStatusChange = async(newStatus) => {
    try {
      const updateData = {
        ...selectedAppointment,
        bookingStatus: newStatus
      }
      
      const response = await adminService.updateAppoinment(updateData, selectedAppointment._id);
      console.log(response, "response in update appoinment");
      
      // Update both the filtered list and the main list
      const updatedAppointment = {...selectedAppointment, bookingStatus: newStatus};
      
      // Update the main appointments list
      setAllAppointments(prevAppointments => 
        prevAppointments.map(app => 
          app._id === selectedAppointment._id ? updatedAppointment : app
        )
      );
      
      setStatusModalOpen(false);
      setSelectedAppointment(null);
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Appointments</h3>
      </div>
      
      <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative rounded-md shadow-sm flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
            placeholder="Search patients..."
          />
        </div>
        
        <div className="flex space-x-4">
          <select 
            className="block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            value={selectedCenter}
            onChange={(e) => setSelectedCenter(e.target.value)}
          >
            <option value="">All Centers</option>
            {dialysisCenters.map(center => (
              <option key={center._id} value={center._id}>{center?.CenterName}</option>
            ))}
          </select>
          
          <select 
            className="block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
          
          <input
            type="date"
            className="block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Center</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAppointments?.length > 0 ? (
              filteredAppointments?.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{appointment?.userId?.username}</div>
                    <div className="text-sm text-gray-500">{appointment?.stripePaymentId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment?.dialysisCenterId?.CenterName} 
                     <div>
                        {appointment?.dialysisCenterId?.Status==="blocked"? 
                         <span className='bg-red-100 text-red-800'>{appointment?.dialysisCenterId?.Status}
                  </span>: "" }
                  </div></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{appointment?.appoinmentDate}</div>
                    <div className="text-sm text-gray-500">{appointment?.appoinmentTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${appointment.bookingStatus === 'confirmed' ? 'bg-green-100 text-green-800' : 
                        appointment.bookingStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {appointment?.bookingStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => openStatusModal(appointment)}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                  No appointments found matching your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredAppointments?.length}</span> of{' '}
              <span className="font-medium">{filteredAppointments?.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Status Change Modal */}
      {statusModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Change Appointment Status</h3>
            <p className="mb-4 text-sm text-gray-600">
              Patient: <span className="font-medium">{selectedAppointment?.userId?.username}</span><br />
              Current Status: <span className="font-medium">{selectedAppointment?.bookingStatus}</span>
            </p>
            <div className="grid grid-cols-1 gap-3 mb-4">
              <button 
                onClick={() => handleStatusChange('confirmed')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Confirm Appointment
              </button>
              <button 
                onClick={() => handleStatusChange('pending')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
              >
                Set to Pending
              </button>
              <button 
                onClick={() => handleStatusChange('cancelled')}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Cancel Appointment
              </button>
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => {
                  setStatusModalOpen(false);
                  setSelectedAppointment(null);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsView;