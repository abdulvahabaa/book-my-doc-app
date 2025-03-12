import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/users/Home";
import DoctorsPage from "./pages/users/DoctorsPage";
import DoctorProfilePage from "./pages/users/DoctorProfilePage";
import DoctorBookingPage from "./pages/users/DoctorBookingPage";
import BookingPage from "./pages/users/BookingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/profile" element={<DoctorProfilePage />} />
        <Route path="/doctors/profile/book" element={<DoctorBookingPage />} />
        <Route path="/doctors/profile/book/create" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
