import React from "react";
import { useAuth } from "../utills/hooks/AuthProvider";

const Header = () => {
    const { isAuthenticated, logOut } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                <header>
                    <div className="logo">
                        <h2> App Logo </h2>
                    </div>
                    <span className="spacer"></span>
                    <div>
                        <button onClick={logOut}> Log Out </button>
                    </div>
                </header>
            ) : (
                ""
            )}
        </>
    );
};

export default Header;
