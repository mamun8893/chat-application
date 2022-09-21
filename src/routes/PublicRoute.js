import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? <Navigate to="/inbox" /> : children;
};

export default PublicRoute;
