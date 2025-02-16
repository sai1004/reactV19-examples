import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./utills/hooks/AuthProvider";

const App = () => {
    return (
        <main className="main__app">
            <AuthProvider>
                <RouterProvider router={AppRoutes} />
            </AuthProvider>
        </main>
    );
};

export default App;
