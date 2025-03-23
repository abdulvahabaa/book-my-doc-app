import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";
import NotFound from "./pages/common/NotFound";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoute allowedRoles={['doctor']} />}> */}
        <Route path="/doctor/*" element={<DoctorRoutes />} />
        {/* </Route> */}

        {/* <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route> */}

        {/* Catch-All Route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </Router>
  );
};

export default App;
