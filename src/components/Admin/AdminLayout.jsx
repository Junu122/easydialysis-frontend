import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, User, Calendar, MapPin, Menu, X } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin/login');
  };
  
  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:flex-shrink-0`}>
        <div className="h-full w-64 flex flex-col bg-blue-700">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-blue-800">
            <h1 className="text-xl font-bold text-white">Dialysis Admin</h1>
            <button 
              className="md:hidden ml-auto text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <Link
                to="/admin/dashboard"
                className={`${
                  isActive('/admin/dashboard') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
              >
                <svg className="mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </Link>
              
              <Link
                to="/admin/centers"
                className={`${
                  isActive('/admin/centers') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
              >
                <MapPin className="mr-3 h-6 w-6" />
                Centers
              </Link>
              
              <Link
                to="/admin/appointments"
                className={`${
                  isActive('/admin/appointments') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Appointments
              </Link>
              
              <Link
                to="/admin/users"
                className={`${
                  isActive('/admin/users') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
              >
                <User className="mr-3 h-6 w-6" />
                Users
              </Link>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-blue-800 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <div className="inline-block h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <span className="text-xl font-medium">A</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <button 
                    onClick={handleLogout}
                    className="text-xs font-medium text-blue-200 group-hover:text-white flex items-center"
                  >
                    <LogOut className="mr-1 h-4 w-4" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile header */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Main content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
