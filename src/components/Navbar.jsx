// // components/Navbar.jsx
// import React from "react";
// import Button from "./Button";
// import { useTheme } from "../context/ThemeContext";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const { isDark, toggleTheme } = useTheme();

//     return (
//         <nav className="flex justify-between items-center p-4 bg-light dark:bg-dark-dark text-dark dark:text-light shadow-md">
//             <div className="flex items-center space-x-6">
//                 <Link to="/" className="font-bold text-2xl">Brand</Link>
//                 <Link to="/" className="text-lg">Home</Link>
//                 <Link to="/about" className="text-lg">About</Link>
//             </div>
//             <Button onClick={toggleTheme}>
//                 Toggle to {isDark ? "Light" : "Dark"} Theme
//             </Button>
//         </nav>
//     );
// };

// export default Navbar;

// components/Navbar.jsx
import React from "react";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import AuthModal from "../Forms/AuthModal";
import Dropdown from "./DropDown";
import MoodToggle from "./MoodToggle";
import { MoodSelector } from "./MoodSelector";


const Navbar = (props) => {
    const { user, logout, openModal, closeModal, isModalOpen } = props
    const { isDark, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // Redirect to homepage
    };

    const dropdownItems = [
        { label: "Profile", action: () => navigate("/profile") },
        { label: "Settings", action: () => navigate("/settings") },
        { label: "Logout", action: handleLogout },
    ];

    return (
        <nav className="flex justify-between items-center p-4 bg-light dark:bg-dark-dark text-dark dark:text-light shadow-md">
            <div className="flex items-center space-x-6">
                <Link to="/" className="font-bold text-2xl">Brand</Link>
                <Link to="/" className="text-lg">Home</Link>
                <Link to="/about" className="text-lg">About</Link>
            </div>
            <div className="flex gap-2">
                <Button onClick={toggleTheme}>
                    {isDark ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    }
                </Button>

                {user == null ? <Button
                    onClick={openModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Login/Register
                </Button> : <Dropdown items={dropdownItems} buttonName={user?.name} />}
                {user == null && <MoodSelector />}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <AuthModal onClose={closeModal} />
                </Modal>
            </div>
        </nav>
    );
};

export default Navbar;

