import React from "react";
import { Routes, Route } from "react-router-dom";

import DoctorDashboard from "@/pages/doctor/DoctorDashboard";
import DoctorAuth from "@/pages/doctor/DoctorAuth";
import DoctorAnalytics from "@/pages/doctor/DoctorAnalytics";
import NotFound from "@/pages/common/NotFound";
import DoctorBookings from "@/pages/doctor/DoctorBookings";
import DoctorLayout from "@/layouts/DoctorLayout";

const DoctorRoutes = () => {
  return (
    <Routes>
      {/* Auth Route - Without Layout */}
      <Route path="/" element={<DoctorAuth />} />

      {/* Protected Routes - Wrapped in Layout */}
      <Route
        path="/*"
        element={
          <DoctorLayout>
            <Routes>
              <Route path="dashboard" element={<DoctorDashboard />} />
              <Route path="analytics" element={<DoctorAnalytics />} />
              <Route path="bookings" element={<DoctorBookings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DoctorLayout>
        }
      />
    </Routes>
  );
};

export default DoctorRoutes;
