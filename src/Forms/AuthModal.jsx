import React, { useState } from "react";
import Register from "./Registration";
import Login from "./Login";

const AuthModal = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div>
            {isLogin ? (
                <Login onClose={onClose} toggleForm={toggleForm} />
            ) : (
                <Register onClose={onClose} toggleForm={toggleForm} />
            )}
        </div>
    );
};

export default AuthModal;
