// import React, { useState,useEffect } from 'react';
// import { Trash2, Edit, Eye, Search, LogOut, PlusCircle, User, Calendar, MapPin, Menu, X, AlertTriangle } from 'lucide-react';
// import { authService } from '../../services/authService';
// import Dashboard from '../../components/Admin/Dahboard';
// import CentersView from '../../components/Admin/CentersView';
// import AppoinmentsView from '../../components/Admin/AppoinmentsView';
// import UsersView from '../../components/Admin/UsersView';
// import AddCenterModal from '../../components/Admin/AddCenterModal';
// import EditCenter from '../../components/Admin/EditCenter';
// import DeleteConfirmModal from '../../components/Admin/DeleteConfirmModal';
// // Main App Component
// const AdminPanel = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const [currentView, setCurrentView] = useState('dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [editingCenter, setEditingCenter] = useState(null);
//   const [showAddCenterModal, setShowAddCenterModal] = useState(false);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [centerToDelete, setCenterToDelete] = useState(null);
//   const [DialysisCenters,setDialysisCenters]=useState([])
// useEffect(()=>{
//     const fetchDialysisCenters=async()=>{
//         const response=await authService.dialysisCenters()
//        setDialysisCenters(response?.data?.data)
//     }
//     fetchDialysisCenters()
// },[])
// console.log(DialysisCenters,"dialysis centers")
  
//   // Mock data
//   const [centers, setCenters] = useState([
//     { id: 1, name: 'Renal Care Center', address: '123 Main St, New York, NY', phone: '(555) 123-4567', status: 'active', slots: 12, availableSlots: 5 },
//     { id: 2, name: 'Kidney Health Clinic', address: '456 Oak Ave, Boston, MA', phone: '(555) 987-6543', status: 'active', slots: 8, availableSlots: 2 },
//     { id: 3, name: 'Metro Dialysis Center', address: '789 Pine Blvd, Chicago, IL', phone: '(555) 456-7890', status: 'blocked', slots: 15, availableSlots: 0 }
//   ]);
  
//   const [appointments] = useState([
//     { id: 1, patientName: 'John Doe', patientId: 'P12345', center: 'Renal Care Center', date: '2025-03-31', time: '09:00 AM', status: 'confirmed' },
//     { id: 2, patientName: 'Jane Smith', patientId: 'P23456', center: 'Kidney Health Clinic', date: '2025-03-31', time: '10:30 AM', status: 'pending' },
//     { id: 3, patientName: 'Robert Johnson', patientId: 'P34567', center: 'Renal Care Center', date: '2025-04-01', time: '02:00 PM', status: 'confirmed' },
//     { id: 4, patientName: 'Maria Garcia', patientId: 'P45678', center: 'Metro Dialysis Center', date: '2025-04-02', time: '11:00 AM', status: 'cancelled' },
//     { id: 5, patientName: 'kalan', patientId: 'P45678', center: 'Metro Dialysis Center', date: '2025-04-02', time: '11:00 AM', status: 'cancelled' },
//     { id: 6, patientName: 'koran', patientId: 'P45678', center: 'Metro Dialysis Center', date: '2025-04-02', time: '11:00 AM', status: 'cancelled' },
//   ]);
  
//   const [users] = useState([
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '(555) 123-4567', appointments: 12, lastVisit: '2025-03-25' },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(555) 987-6543', appointments: 8, lastVisit: '2025-03-26' },
//     { id: 3, name: 'Robert Johnson', email: 'robert.j@example.com', phone: '(555) 456-7890', appointments: 15, lastVisit: '2025-03-28' },
//     { id: 4, name: 'Maria Garcia', email: 'maria.g@example.com', phone: '(555) 789-0123', appointments: 5, lastVisit: '2025-03-29' },
//     { id: 5, name: 'kalan', email: 'maria.g@example.com', phone: '(555) 789-0123', appointments: 5, lastVisit: '2025-03-29' },
//     { id: 6, name: 'koran', email: 'maria.g@example.com', phone: '(555) 789-0123', appointments: 5, lastVisit: '2025-03-29' }
//   ]);

//   // Login handler
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsAuthenticated(true);
//   };

//   // Toggle center status (active/blocked)


//   // Delete center handler


//   // Add new center

//   // Edit center handler
//   const handleEditCenter = (e) => {
//     e.preventDefault();
//     setCenters(centers.map(center => {
//       if (center.id === editingCenter.id) {
//         return {
//           ...center,
//           name: e.target.name.value,
//           address: e.target.address.value,
//           phone: e.target.phone.value,
//           slots: parseInt(e.target.slots.value),
//           availableSlots: center.availableSlots
//         };
//       }
//       return center;
//     }));
//     setEditingCenter(null);
//   };


  

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8">
//           <div>
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
//             <p className="mt-2 text-center text-sm text-gray-600">
//               Dialysis Booking System
//             </p>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div>
//                 <label htmlFor="email-address" className="sr-only">Email address</label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">Password</label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                   Forgot your password?
//                 </a>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   // Main layout with sidebar and content
//   return (
//     <div className="h-screen flex overflow-hidden bg-gray-100">
//       {/* Sidebar */}
//       <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:flex-shrink-0`}>
//         <div className="h-full w-64 flex flex-col bg-blue-700">
//           <div className="flex items-center h-16 flex-shrink-0 px-4 bg-blue-800">
//             <h1 className="text-xl font-bold text-white">Dialysis Admin</h1>
//             <button 
//               className="md:hidden ml-auto text-white"
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//             >
//               <X className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="flex-1 flex flex-col overflow-y-auto">
//             <nav className="flex-1 px-2 py-4 space-y-1">
//               <button
//                 onClick={() => setCurrentView('dashboard')}
//                 className={`${
//                   currentView === 'dashboard' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
//                 } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
//               >
//                 <svg className="mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                 </svg>
//                 Dashboard
//               </button>
              
//               <button
//                 onClick={() => setCurrentView('centers')}
//                 className={`${
//                   currentView === 'centers' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
//                 } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
//               >
//                 <MapPin className="mr-3 h-6 w-6" />
//                 Centers
//               </button>
              
//               <button
//                 onClick={() => setCurrentView('appointments')}
//                 className={`${
//                   currentView === 'appointments' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
//                 } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
//               >
//                 <Calendar className="mr-3 h-6 w-6" />
//                 Appointments
//               </button>
              
//               <button
//                 onClick={() => setCurrentView('users')}
//                 className={`${
//                   currentView === 'users' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
//                 } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
//               >
//                 <User className="mr-3 h-6 w-6" />
//                 Users
//               </button>
//             </nav>
//           </div>
//           <div className="flex-shrink-0 flex border-t border-blue-800 p-4">
//             <div className="flex-shrink-0 w-full group block">
//               <div className="flex items-center">
//                 <div>
//                   <div className="inline-block h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
//                     <span className="text-xl font-medium">A</span>
//                   </div>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-white">Admin User</p>
//                   <button 
//                     onClick={() => setIsAuthenticated(false)}
//                     className="text-xs font-medium text-blue-200 group-hover:text-white flex items-center"
//                   >
//                     <LogOut className="mr-1 h-4 w-4" />
//                     Sign out
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile header */}
//       <div className="flex flex-col w-0 flex-1 overflow-hidden">
//         <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//           >
//             <span className="sr-only">Open sidebar</span>
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
        
//         {/* Main content */}
//         <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
//           <div className="py-6">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//               <h1 className="text-2xl font-semibold text-gray-900">
//                 {currentView === 'dashboard' && 'Dashboard'}
//                 {currentView === 'centers' && 'Dialysis Centers'}
//                 {currentView === 'appointments' && 'Appointments'}
//                 {currentView === 'users' && 'Users'}
//               </h1>
//             </div>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
//               {currentView === 'dashboard' && <Dashboard centers={centers} appointments={appointments} users={users}/>}
//               {currentView === 'centers' && <CentersView setShowAddCenterModal={setShowAddCenterModal} centers={centers} setCenters={setCenters} setEditingCenter={setEditingCenter} setCenterToDelete={setCenterToDelete} setShowDeleteConfirmation={setShowDeleteConfirmation}/>}
//               {currentView === 'appointments' && <AppoinmentsView centers={centers} appointments={appointments} />}
//               {currentView === 'users' && <UsersView />}
//             </div>
//           </div>
//         </main>
//       </div>
      
//       {/* Add Center Modal */}
//       {showAddCenterModal && <AddCenterModal setShowAddCenterModal={setShowAddCenterModal} setCenters={setCenters} centers={centers}/>}
      
//       {/* Edit Center Modal */}
//       {editingCenter && <EditCenter editingCenter={editingCenter} centers={centers} setCenters={setCenters} setEditingCenter={setEditingCenter}/>}
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirmation && <DeleteConfirmModal setShowDeleteConfirmation={setShowDeleteConfirmation} setCenterToDelete={setCenterToDelete} setCenters={setCenters} centerToDelete={centerToDelete} centers={centers}/> }
//     </div>
//   );
// };

// export default AdminPanel;