import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.user);

  return allowedRoles.includes(user?.role) ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
