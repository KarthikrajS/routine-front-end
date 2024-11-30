// components/Alert.jsx
import React, { useState, useEffect } from "react";

const Alert = ({ message, type, duration = 3000 }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => setShow(false), duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration]);

    if (!show) return null;

    const alertClasses = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
    };

    return (
        <div className={`p-4 rounded-md fixed top-4 left-1/2 transform -translate-x-1/2 ${alertClasses[type]}`}>
            <p>{message}</p>
        </div>
    );
};

export default Alert;
