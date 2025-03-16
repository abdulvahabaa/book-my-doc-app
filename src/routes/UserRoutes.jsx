import React from "react";
import { Routes, Route } from "react-router-dom";
// import UserLayout from "../layouts/UserLayout";
import Home from "../pages/users/Home";
import DoctorsPage from "../pages/users/DoctorsPage";
import DoctorProfilePage from "../pages/users/DoctorProfilePage";
import BookingPage from "../pages/users/BookingPage";
import NotFound from "../pages/common/NotFound";

const UserRoutes = () => {
  return (
    // <UserLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/doctors/profile" element={<DoctorProfilePage />} />
      <Route path="/doctors/profile/book" element={<BookingPage />} />

      {/* Catch-All Route for Invalid User Routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </UserLayout>
  );
};

export default UserRoutes;
