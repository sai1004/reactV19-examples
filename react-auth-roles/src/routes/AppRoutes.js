import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../features/auth/AuthLayout";
import PrivateRoutes from "../utills/hooks/PrivateRoutes";

const SigninPage = lazy(() => import("../features/auth/signin/SigninPage"));
const SignupPage = lazy(() => import("../features/auth/signup/SignupPage"));
const DashboardPage = lazy(() => import("../features/dashboard/DashboardPage"));
const AdminPage = lazy(() => import("../features/admin/AdminPage"));
const ProfilePage = lazy(() => import("../features/profile/ProfilePage"));
const NotFound = lazy(() => import("../components/NotFound"));

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth/signin" replace />,
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "signin",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SigninPage />
                    </Suspense>
                ),
            },
            {
                path: "signup",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SignupPage />
                    </Suspense>
                ),
            },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "dashboard",
                element: (
                    <Suspense
                        fallback={
                            <div className="circle">
                                <div className="quarter"></div>
                                <div className="quarter"></div>
                                <div className="quarter"></div>
                                <div className="quarter"></div>
                            </div>
                        }
                    >
                        <DashboardPage />
                    </Suspense>
                ),
            },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "admin",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPage />
                    </Suspense>
                ),
            },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "profile",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProfilePage />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
            </Suspense>
        ),
    },
]);

export default AppRoutes;
