import React from 'react'
import { Routes, Route } from "react-router-dom";
import NotFound from '@/pages/common/NotFound';
import AdminAuth from '@/pages/admin/AdminAuth';

const AdminRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<AdminAuth />} />
    
    {/* <Route path="/appointments" element={<Appointments />} />
      <Route path="/patients" element={<PatientsList />} /> */}

    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default AdminRoutes