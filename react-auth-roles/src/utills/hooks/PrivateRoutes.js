import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to={"auth/signin"} replace />;
};

export default PrivateRoutes;
