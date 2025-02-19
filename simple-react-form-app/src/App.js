import "./App.css";
import { useState } from "react";

function App() {
    const [authForm, setAuthForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthForm({
            ...authForm,
            [name]: value,
        });
    };

    const validateAuthForm = (form) => {
        const formErrors = {};
        if (!form.email.trim()) {
            formErrors.email = "Email Address is required.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            formErrors.email = "Email address invalid";
        }

        if (!form.password) {
            formErrors.password = "Password is required";
        } else if (form.password.length < 8) {
            formErrors.password = "Password must be at least 8 characters long";
        }
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("authform >>", authForm);
        const newErrors = validateAuthForm(authForm);
        setErrors(newErrors);

        if (Object.keys(newErrors).length == 0) {
            // Form submission logic here
            console.log("Form submitted successfully!");
        } else {
            console.log("Form submission failed due to validation errors.");
        }
    };

    return (
        <div className="App">
            <div className="auth__container">
                <div className="auth__form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email"> Email Address </label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Ex: example@xyz.com"
                                value={authForm.email}
                                onChange={handleChange}
                            />
                            {errors?.email && (
                                <div className="error__feedback">
                                    <p className="error__message"> {errors.email} </p>
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <br />
                            <input type="password" name="password" value={authForm.password} onChange={handleChange} />
                            {errors?.password && (
                                <div className="error__feedback">
                                    <p className="error__message"> {errors.password} </p>
                                </div>
                            )}
                        </div>
                        <button type="submit"> Submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;