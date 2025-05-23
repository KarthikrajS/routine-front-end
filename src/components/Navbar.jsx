// import React, { useContext } from "react";
// import clsx from "clsx";
// import Button from "./Button";
// import { useTheme } from "../context/ThemeContext";
// import { Link, useNavigate } from "react-router-dom";
// import Modal from "./Modal.jsx";
// import AuthModal from "../Forms/AuthModal";
// import Dropdown from "./DropDown.jsx";
// import { MoodSelector } from "./MoodSelector.jsx";
// import { MoodContext } from "../context/MoodContext"; // Importing MoodContext for dynamic mood-based theming

// const Navbar = (props) => {
//     const { user, logout, openModal, closeModal, isModalOpen } = props;
//     const { isDark, toggleTheme } = useTheme(); // Using ThemeContext for dark mode
//     const { mood, settings } = useContext(MoodContext); // Using MoodContext to get selected mood's settings
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate("/"); // Redirect to homepage after logout
//     };

//     const dropdownItems = [
//         { label: "Profile", action: () => navigate("/profile") },
//         { label: "Settings", action: () => navigate("/settings") },
//         { label: "Logout", action: handleLogout },
//     ];

//     // Determine the mood-based theme and dark mode.
//     const currentTheme = settings?.theme || "bg-white"; // Default to white if no theme is found
//     const moodBasedClass = settings?.mood ? `${settings.mood}` : "minimalist"; // Default to "minimalist" mood if none selected

//     // Classnames for Navbar dynamically set from MoodContext and dark mode toggle
//     const navClassNames = clsx(
//         "flex justify-between items-center p-6 transition-all bg-gradient-to-r from-[#356B7F] to-[#55B7A7]",
//         currentTheme, // Applying the dynamic theme (bg, text, border) from MoodContext
//         `dark:${moodBasedClass}-dark`, // Add dark mode variant for mood
//         "shadow-md"
//     );

//     const buttonClassNames = clsx(
//         "transition-all p-3 rounded-full transform hover:scale-110",
//         isDark ? "bg-yellow-500 text-white" : "bg-gray-800 text-white hover:bg-opacity-90"
//     );

//     const loginButtonClassNames = clsx(
//         "bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110"
//     );

//     return (
//         <nav className={navClassNames}>
//             <div className="flex items-center space-x-8">
//                 <Link to="/task-manager" className="font-extrabold text-white text-3xl hover:text-yellow-400 transition-all">
//                     Routine App
//                 </Link>
//             </div>

//             <div className="flex gap-6 items-center">
//                 {/* Theme Toggle Button */}
//                 <Button onClick={toggleTheme} className={buttonClassNames} >
//                     {isDark ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
//                         </svg>
//                     )}
//                 </Button>
//                 {/* Mood Selector (only visible when user is logged in) */}
//                 {user !== null && <MoodSelector />}


//                 {/* ]/Register or Dropdown for logged-in user */}
//                 {user == null ? (
//                     <Button onClick={openModal} className={loginButtonClassNames}>
//                         Login/Register
//                     </Button>
//                 ) : (
//                     <Dropdown items={dropdownItems} buttonName={user?.name} />
//                 )}


//                 {/* Modal for Authentication */}
//                 <Modal isOpen={isModalOpen} onClose={closeModal}>
//                     <AuthModal onClose={closeModal} />
//                 </Modal>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useContext } from "react";
import clsx from "clsx";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";
import AuthModal from "../Forms/AuthModal";
import Dropdown from "./DropDown.jsx";
import { MoodSelector } from "./MoodSelector.jsx";
import { MoodContext } from "../context/MoodContext"; // Importing MoodContext for dynamic mood-based theming

const Navbar = (props) => {
    const { user, logout, openModal, closeModal, isModalOpen } = props;
    const { isDark, toggleTheme } = useTheme(); // Using ThemeContext for dark mode
    const { mood, settings } = useContext(MoodContext); // Using MoodContext to get selected mood's settings
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // Redirect to homepage after logout
    };

    const dropdownItems = [
        { label: "Profile", action: () => navigate("/profile") },
        { label: "Settings", action: () => navigate("/settings") },
        { label: "Logout", action: handleLogout },
    ];

    // Determine the mood-based theme and dark mode.
    const currentTheme = settings?.theme || "bg-white"; // Default to white if no theme is found
    const moodBasedClass = settings?.mood ? `${settings.mood}` : "minimalist"; // Default to "minimalist" mood if none selected

    // Classnames for Navbar dynamically set from MoodContext and dark mode toggle
    const navClassNames = clsx(
        "flex justify-between items-center p-6 transition-all bg-white shadow-sm",
        currentTheme, // Applying the dynamic theme (bg, text, border) from MoodContext
        `dark:${moodBasedClass}-dark` // Add dark mode variant for mood
    );

    const buttonClassNames = clsx(
        "transition-all p-3 rounded-full transform hover:scale-110",
        isDark ? "bg-yellow-500 text-white" : "bg-gray-800 text-white hover:bg-opacity-90"
    );

    const loginButtonClassNames = clsx(
        "bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-110"
    );

    return (
        <nav className={navClassNames}>
            <div className="flex items-center space-x-8">
                <Link to="/" className="font-extrabold text-xl text-gray-900 hover:text-yellow-400 transition-all">
                    <h1 className="text-xl font-bold flex items-center ">
                        <span className="text-blue-500 mr-2">⚡</span> TaskFlow
                    </h1>
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            </div>

            <div className="flex gap-6 items-center">
                {/* Theme Toggle Button */}
                <Button onClick={toggleTheme} className={buttonClassNames} >
                    {isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    )}
                </Button>
                {/* Mood Selector (only visible when user is logged in) */}
                {/* {user !== null && <MoodSelector />} */}

                {/* Login/Register or Dropdown for logged-in user */}
                {user == null ? (
                    <Button onClick={openModal} className={loginButtonClassNames}>
                        Login/Register
                    </Button>
                ) : (
                    <Dropdown items={dropdownItems} buttonName={user?.name} />
                )}

                {/* Modal for Authentication */}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <AuthModal onClose={closeModal} />
                </Modal>
            </div>
        </nav>
    );
};

export default Navbar;
