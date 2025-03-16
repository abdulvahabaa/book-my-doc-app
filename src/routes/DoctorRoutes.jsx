import React from "react";
import { Routes, Route } from "react-router-dom";

import DoctorDashboard from "../pages/doctors/DoctorDashboard";
// import Appointments from "../pages/doctors/Appointments";
// import PatientsList from "../pages/doctors/PatientsList";

const DoctorRoutes = () => {
  return (
    // <DoctorLayout>
      <Routes>
        <Route path="/dashboard" element={<DoctorDashboard />} />
        {/* <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<PatientsList />} /> */}
      </Routes>
    //  </DoctorLayout> 
  );
};

export default DoctorRoutes;
