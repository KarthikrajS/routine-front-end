import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../hooks/axiosInstance';
import { redirect } from 'react-router-dom'

// Create the User Context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initial user state
    const [token, setToken] = useState(localStorage.getItem("token"));
    const login = (email, password) => {
        axiosInstance
            .post("/users/api/auth/login", { email, password }, { credentials: "include" })
            .then((response) => {
                console.log(response, "response1");
                const { token } = response.data;
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                localStorage.setItem("token", token);
                setToken(token);
                setUser({ email });
                redirect("/dashboard")

            })
            .catch((err) => console.log(err));
    };

    const googleLogin = async ({ credentials, decodedToken }) => {
        console.log(decodedToken);
        const { email, name, picture, locale, gender, age, email_verified } = decodedToken
        // Send data to the backend
        const response = await axiosInstance.post("/users/api/auth/google-login", {
            token: credentials,
            email,
            name,
            picture,
            locale,
            is_verified: email_verified,
            gender, // May require additional steps to get this info
            age,    // May require additional steps to get this info
        });

        const { token } = response.data
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("token", token);
        setToken(token);
        setUser({ email });
        redirect("/dashboard")
    }

    const register = async (data) => {
        const { name, email, password } = data
        axiosInstance
            .post('/users/api/auth/register', { name, email, password })
            .then((response) => {
                console.log(response, "response1");
                const { user } = response;
                if (user?.status) redirect("/login")
            })
            .catch((err) => console.log(err));
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    const updateMood = async (mood) => {
        try {
            const response = await axiosInstance.put('/users/mood', { mood });
            setUser((prev) => ({ ...prev, mood: response.data.mood }));
        } catch (error) {
            console.error("Failed to update mood:", error);
        }
    };



    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            // You can use token to fetch user data or check if the token is valid
            console.log(token, "rokeasdasd");
            if (axios.defaults.headers.common["Authorization"]) {
                console.log(axios.defaults.headers, "axios.defaults.headers");
                axiosInstance
                    .get("/users/api/protected/profile")
                    .then((response) => {
                        console.log(response, "response2");
                        setUser(response.data?.user)
                    })
                    .catch(() => setUser(null));
            }
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ user, token, login, googleLogin, logout, updateMood, register }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use User Context
export const useUser = () => {
    return useContext(UserContext);
};
