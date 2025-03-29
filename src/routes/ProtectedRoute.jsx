import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.user);
  
  const userRole = user?.role || "guest";  

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
