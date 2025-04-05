import React ,{useEffect, useState}from 'react'
import {  Eye, Search} from 'lucide-react';
import { adminService } from '../../services/adminService';
const UsersView = ({Users,setUsers}) => {
const [filteredUsers,setfilteredUsers]=useState(Users)
 const [searchQuery,setSearchQuery]=useState("")
 const [statusModalOpen,setStatusModalOpen]=useState(false)
 const [selectedUser,setselectedUser]=useState(null)

useEffect(()=>{
   const filtered=Users?.filter((user)=>
    user?.username.toLowerCase().includes(searchQuery.toLowerCase())
   )
   setfilteredUsers(filtered)
},[searchQuery,Users])



const openStatusModal=(user)=>{
   setselectedUser(user)
   setStatusModalOpen(true)
}

const handleStatusChange=async(status)=>{

  try {
    const updatedData={
      ...selectedUser,
      status:status
    }

    const response=await adminService.updateUser(updatedData,selectedUser._id);
    console.log(response,"response in user view")
    if(response?.data?.updateData){
      const updatedUser=response?.data?.updateData;
     

      setfilteredUsers(filteredUsers.map((user) => {
        if (user._id === selectedUser._id) {
          return updatedUser;
        }
        return user;
      }));
    }
    setStatusModalOpen(false)
    setselectedUser(null)
  } catch (error) {
    console.log(error)
  }
  
}
    
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Users</h3>
      </div>
      
      <div className="p-6 border-b border-gray-200">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
            placeholder="Search users..."
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
         {
          filteredUsers.length>0?(
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{user.username}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                  {/* <div className="text-sm text-gray-500">{user.phone}</div> */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user?.status === true ? 'bg-green-100 text-green-800' : 
                        user?.status  === false ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-gray-800'}`}>
                      {user?.status === true ? "active" : "block" }
                    </span>
                  </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={()=>openStatusModal(user)} className="text-blue-600 hover:text-blue-900">
                    <Eye className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))
          ):<tr>no user found .try search another correct user</tr>
         }
          
          </tbody>
        </table>
      </div>
      {statusModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Change user Status</h3>
            <p className="mb-4 text-sm text-gray-600">
              Patient: <span className="font-medium">{selectedUser?.username}</span><br />
              Current Status: <span className="font-medium">{selectedUser?.status == true ? "active" : "Block"}</span>
            </p>
            <div className="grid grid-cols-1 gap-3 mb-4">

            {
              selectedUser?.status === true ? (
                <button 
                onClick={() => handleStatusChange(false)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Block
              </button>
              ) :<button 
                onClick={() => handleStatusChange(true)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                unblock
              </button>
            }
              
             
            
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => {
                  setStatusModalOpen(false);
                  setselectedUser(null);
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
  )
}

export default UsersView
