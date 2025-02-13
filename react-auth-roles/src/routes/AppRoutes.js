// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import SigninPage from "../features/auth/signin/SigninPage";
// import AuthLayout from "../features/auth/layout/AuthLayout";

// const Auth = lazy(() => import("../features/auth"));

// function AppLazyRoutes() {
//     return (
//         <section className="page_main_content_section">
//             <Suspense fallback={<div className="page_loading">Loading...</div>}>
//                 <Routes>
//                     <Route path="auth" element={<AuthLayout />}>
//                         <Route path="signon" element={<SigninPage />} />;
//                     </Route>
//                 </Routes>
//             </Suspense>
//         </section>
//     );
// }

// export default AppLazyRoutes;

// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../features/auth/layout/AuthLayout";
import SigninPage from "../features/auth/signin/SigninPage";
import NotFound from "../components/NotFound";
import SignupPage from "../features/auth/signup/SignupPage";

const AppRoutes = createBrowserRouter([
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            { path: "signin", element: <SigninPage /> },
            { path: "signup", element: <SignupPage /> },
        ],
    },
    {
        path: "*", // Wildcard route (Catch-all)
        element: <NotFound />,
    },
]);

export default AppRoutes;
