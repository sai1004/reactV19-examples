import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../features/auth/AuthLayout";
import SigninPage from "../features/auth/signin/SigninPage";
import NotFound from "../components/NotFound";
import SignupPage from "../features/auth/signup/SignupPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import AdminPage from "../features/admin/AdminPage";
import ProfilePage from "../features/profile/ProfilePage";
import PrivateRoutes from "../utills/hooks/PrivateRoutes";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth/signin" replace />,
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            { path: "signin", element: <SigninPage /> },
            { path: "signup", element: <SignupPage /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [{ path: "dashboard", element: <DashboardPage /> }],
    },
    {
        path: "admin",
        element: <AdminPage />,
    },
    {
        path: "profile",
        element: <ProfilePage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default AppRoutes;
