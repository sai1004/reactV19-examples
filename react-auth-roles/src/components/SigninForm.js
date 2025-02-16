import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utills/hooks/AuthProvider";

const SigninForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login successful", data);
        if (data) {
            login(data);
            navigate("/dashboard");
        }
    };

    return (
        <div className="signin__form">
            <div className="signin__form-container">
                <div className="signin__form-logo">
                    <h2>Logo</h2>
                </div>
                <div className="signin__form-greet">
                    <h1>Welcome Back.</h1>
                    <p>
                        New to Logo? <b>Sign Up</b>
                    </p>
                </div>
                <div className="signin__form-section">
                    <form className="signin__form-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Your email address</label>
                            <br />
                            <input
                                type="text"
                                name="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                                placeholder="Ex: example@xyz.com"
                            />
                            {errors.email && (
                                <p role="alert" className="error-message">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Your password</label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                {...register("password", { required: true })}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            {errors.password?.type === "required" && (
                                <p role="alert" className="error-message">
                                    Password is required
                                </p>
                            )}
                        </div>

                        <button type="submit"> Signin </button>
                    </form>
                    <div className="signin__page-flex-row">
                        <div className="signin__page-flex-column">
                            <input type="checkbox" />
                            <label htmlFor="remember"> Remember me</label>
                        </div>
                        <div className="signin__page-flex-column">
                            <p>Trouble signin?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninForm;
