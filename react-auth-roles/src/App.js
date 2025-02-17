import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./utills/hooks/AuthProvider";
import Header from "./components/Header";

const App = () => {
    return (
        <main className="main__app">
            <AuthProvider>
                <Header />
                <RouterProvider router={AppRoutes} />
            </AuthProvider>
        </main>
    );
};

export default App;
