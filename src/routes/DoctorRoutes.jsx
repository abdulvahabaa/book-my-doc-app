import React from "react";
import { Routes, Route } from "react-router-dom";

import DoctorDashboard from "@/pages/doctor/DoctorDashboard";
import DoctorAuth from "@/pages/doctor/DoctorAuth";
import DoctorAnalytics from "@/pages/doctor/DoctorAnalytics";
import NotFound from "@/pages/common/NotFound";
import DoctorBookings from "@/pages/doctor/DoctorBookings";
// import Appointments from "../pages/doctors/Appointments";
// import PatientsList from "../pages/doctors/PatientsList";

const DoctorRoutes = () => {
  return (
    // <DoctorLayout>
    <Routes>
      <Route path="/" element={<DoctorAuth />} />
      <Route path="/dashboard" element={<DoctorDashboard />} />
      <Route path="/analytics" element={<DoctorAnalytics />} />
      <Route path="/bookings" element={<DoctorBookings />} />
      {/* <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<PatientsList />} /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
    //  </DoctorLayout>
  );
};

export default DoctorRoutes;
