import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../hooks/axiosInstance";
import Button from "../components/Button";
import { useUser } from "../context/UserContext";

const Login = ({ onClose, toggleForm }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password)
            //     const response = await axiosInstance.post("/api/auth/login", {
            //         email,
            //         password,
            //     });
            //     alert("Login successf    ul!");
            onClose(); // Close the modal
            navigate("/dashboard"); // Redirect to dashboard
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || "Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
                <label className="block text-sm mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="you@example.com"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Login
            </Button>
            <p className="mt-4 text-sm text-center">
                Don't have an account?{" "}
                <span
                    onClick={toggleForm}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    Register
                </span>
            </p>
        </form>
    );
};

export default Login;
