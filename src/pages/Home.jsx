// import React from 'react';
// import Button from '../components/Button';

// const Home = (props) => {
//     const { isDark, toggleTheme } = props;

//     return (
//         <div className={`min-h-screen bg-light dark:bg-dark text-dark dark:text-light`}>
//             <header className="p-4">
//                 <Button onClick={toggleTheme}>
//                     Toggle to {isDark ? "Light" : "Dark"} Theme
//                 </Button>
//             </header>

//             <main className="flex justify-center items-center h-full">
//                 <h1 className="text-4xl">Welcome to Dual Theme App</h1>
//                 <div className="bg-light dark:bg-dark text-dark dark:text-light">
//                     This div changes color based on the current theme.
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default Home;

// pages/Home.jsx
// import React, { useState } from "react";
// import Button from "../components/Button.jsx";
// import Card from "../components/Card.jsx";
// import Modal from "../components/Modal.jsx";
// import Alert from "../components/Alert.jsx";
// import Navbar from "../components/Navbar";

// const Home = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [alertMessage, setAlertMessage] = useState(null);

//     const toggleModal = () => setModalOpen((prev) => !prev);

//     return (
//         <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">

//             <header className="p-4">
//                 <Button onClick={() => setAlertMessage("Welcome to the Dual Theme App!")}>
//                     Show Alert
//                 </Button>
//                 <Button onClick={toggleModal}>Open Modal</Button>
//             </header>

//             <main className="flex justify-center items-center h-full space-x-6">
//                 <Card title="Card Title" description="This is a simple card.">
//                     <Button onClick={() => setAlertMessage("Card button clicked!")}>Click me</Button>
//                 </Card>
//             </main>

//             <Modal isOpen={isModalOpen} closeModal={toggleModal}>
//                 <h2 className="text-xl">This is a Modal</h2>
//                 <Button onClick={toggleModal}>Close Modal</Button>
//             </Modal>

//             {alertMessage && <Alert message={alertMessage} type="info" />}
//         </div>
//     );
// };

// export default Home;
import React, { useState } from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Modal from "../components/Modal.jsx";
import Alert from "../components/Alert.jsx";
import Navbar from "../components/Navbar";
import { useSwipeable } from "react-swipeable"; // For swipe gestures
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/UserContext.jsx";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useTheme } from "../context/ThemeContext"; // Assuming this is where your theme context is

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const { googleLogin } = useUser();
    const { isDark } = useTheme(); // Get current theme (dark or light)
    const toggleModal = () => setModalOpen((prev) => !prev);

    // Swipeable settings for mobile
    const handlers = useSwipeable({
        onSwipedLeft: () => setAlertMessage("Task Completed!"),
        preventDefaultTouchmoveEvent: true,
    });

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            // Decode Google ID token to get user details
            const decodedToken = jwtDecode(credentialResponse.credential);
            await googleLogin({ credentials: credentialResponse.credential, decodedToken });
            alert("Google Login Successful!");
        } catch (err) {
            console.error(err);
            alert("Google login failed. Please try again.");
        }
    };

    return (
        <div
            className={`min-h-screen ${isDark ? 'bg-monkMode-primary text-monkMode-text' : 'bg-minimalist-primary text-minimalist-text'} font-sans`}
        >
            {/* Hero Section */}
            <main className="container mx-auto p-4">
                <section className="mb-8 text-center">
                    <img
                        alt="Background image of a calendar and productivity tools"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        src="https://storage.googleapis.com/a1aa/image/793qGbCV9fURUa4wB6lWRlyPyL1qdTo0vBd6VR66MYB9vQfTA.jpg"
                    />
                 
                    <div className=" items-center justify-center self-center flex ">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => console.log('Login Failed')}
                            render={(renderProps) => (
                                <div
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all cursor-pointer"
                                >
                                    <i className="fab fa-google"></i> Login with Google
                                </div>
                            )}
                        />
                    </div>
                </section>

                {/* Feature Cards */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <i className="fas fa-tasks text-blue-600 text-3xl mb-2"></i>
                            <h3 className="font-bold">Organize Tasks Effortlessly</h3>
                            <p className="text-gray-400">Manage your tasks with ease and efficiency.</p>
                        </div>
                        <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <i className="fas fa-chart-line text-blue-600 text-3xl mb-2"></i>
                            <h3 className="font-bold">Track Your Progress</h3>
                            <p className="text-gray-400">Monitor your daily productivity and achievements.</p>
                        </div>
                        <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <i className="fas fa-bell text-blue-600 text-3xl mb-2"></i>
                            <h3 className="font-bold">Stay Notified</h3>
                            <p className="text-gray-400">Get reminders and notifications to stay on track.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
                    <div className="carousel gap-4 flex-col flex">
                        <div {...handlers} className="carousel-item bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <p className="dark:text-white mb-2 ">"Routines has completely transformed how I manage my day. Highly recommend!"</p>
                            <p className="font-bold text-gray-400">- Jane Doe</p>
                        </div>
                        <div {...handlers} className="carousel-item bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <p className="dark:text-white mb-2">"The insights feature is a game-changer. I can see my progress at a glance."</p>
                            <p className="font-bold text-gray-400">- John Smith</p>
                        </div>
                        <div {...handlers} className="carousel-item bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <p className="dark:text-white mb-2">"I love the notifications. They keep me on track without being intrusive."</p>
                            <p className="font-bold text-gray-400">- Emily Johnson</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Modal Section */}
            <Modal isOpen={isModalOpen} closeModal={toggleModal}>
                <h2 className="text-xl">This is a Modal</h2>
                <Button onClick={toggleModal}>Close Modal</Button>
            </Modal>

            {/* Floating Add Routine Button */}
            <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all">
                <i className="fas fa-plus"></i>
            </button>

            {/* Alert */}
            {alertMessage && <Alert message={alertMessage} type="info" />}
        </div>
    );
};

export default Home;
