// src/pages/Register/RegisterForm.jsx
import React, { useState } from "react";
import "./RegisterForm.css";
import {registerUser} from "../../api/auth";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.password_confirmation) {
            setMessage("Passwords do not match!");
            return;
        }
        try {
            const response = await registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation
            });
            setMessage(response.data.message||"Registration successful!");
            console.log(response);
        }catch (error) {
            setMessage(error.response?.data?.message
            ||error.message
                ||"Registration failed!"
            );
            console.log(error);
        }

    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="password-wrapper">
                    <label>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className="toggle-eye"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? "🙉" : "🙈"}
                    </span>
                </div>
                <div className="password-wrapper">
                    <label>Password:</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className="toggle-eye"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? "🙉" : "🙈"}
                    </span>
                </div>


                <button type="submit">Register</button>
            </form>
            {message && <p className="register-message">{message}</p>}
        </div>
    );
};

export default RegisterForm;