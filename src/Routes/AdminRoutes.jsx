import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminSignIn from "../pages/Admin/AdminSignIn"
import DashboardPage from '../pages/Admin/DashboardPage';
import CentersPage from '../pages/Admin/CentersPage';
import AppointmentsPage from '../pages/Admin/AppoinmentsPage';
import UsersPage from '../pages/Admin/UsersPage';
import ProtectedRoute from "../components/Auth/ProtectedRoute"

const AdminRoutes = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<AdminSignIn />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/centers" element={
          <ProtectedRoute>
            <CentersPage />
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute>
            <AppointmentsPage />
          </ProtectedRoute>
        } />
        <Route path="//users" element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/" element={<Navigate to="/admin/login" replace />} />
      </Routes>

  );
};

export default AdminRoutes;