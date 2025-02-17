import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(JSON.stringify(localStorage.getItem("token"))) || null);

    const login = (userToken) => {
        console.log("login from AuthProvider!!");
        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    };

    const logOut = () => {
        localStorage.removeItem("token")
        setToken(null);
    };

    const isAuthenticated = !!token;

    return <AuthContext.Provider value={{ isAuthenticated, login, logOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("usAuth Must be used within AuthProvider!!");
    }

    return context;
};
