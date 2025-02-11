import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninPage from "./signin/SigninPage";

const routes = [
    {
        path: "/auth/signin",
        component: <SigninPage />,
    },
];

const childRoutes = () => {
    return (
        <>
            {routes.map((routes, i) => {
                return <Route key={i} exact path={routes.path} element={routes.component} />;
            })}
        </>
    );
};

export default childRoutes;
