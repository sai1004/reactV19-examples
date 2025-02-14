import React from "react";
import SigninForm from "../../../components/SigninForm";

const SigninPage = () => {
    return (
        <div className="signin__page">
            <div className="signin__page-container">
                <div className="signin__page-info"></div>
                <div className="signin__page-form">
                    <SigninForm />
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
