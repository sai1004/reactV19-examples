import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../features/auth/AuthLayout";
import SigninPage from "../features/auth/signin/SigninPage";
import NotFound from "../components/NotFound";
import SignupPage from "../features/auth/signup/SignupPage";

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
        path: "*", 
        element: <NotFound />,
    },
]);

export default AppRoutes;
