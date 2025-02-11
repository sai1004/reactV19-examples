import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Auth = lazy(() => import("../features/auth"));

function AppLazyRoutes() {
    return (
        <section className="page_main_content_section">
            <Suspense fallback={<div className="page_loading">Loading...</div>}>
                <Routes>
                    <Route index path="/auth" element={<Auth />} />
                </Routes>
            </Suspense>
        </section>
    );
}

export default AppLazyRoutes;
