// // // import React from 'react';
// // // import Button from '../components/Button';

// // // const Home = (props) => {
// // //     const { isDark, toggleTheme } = props;

// // //     return (
// // //         <div className={`min-h-screen bg-light dark:bg-dark text-dark dark:text-light`}>
// // //             <header className="p-4">
// // //                 <Button onClick={toggleTheme}>
// // //                     Toggle to {isDark ? "Light" : "Dark"} Theme
// // //                 </Button>
// // //             </header>

// // //             <main className="flex justify-center items-center h-full">
// // //                 <h1 className="text-4xl">Welcome to Dual Theme App</h1>
// // //                 <div className="bg-light dark:bg-dark text-dark dark:text-light">
// // //                     This div changes color based on the current theme.
// // //                 </div>
// // //             </main>
// // //         </div>
// // //     );
// // // }

// // // export default Home;

// // // pages/Home.jsx
// // // import React, { useState } from "react";
// // // import Button from "../components/Button.jsx";
// // // import Card from "../components/Card.jsx";
// // // import Modal from "../components/Modal.jsx";
// // // import Alert from "../components/Alert.jsx";
// // // import Navbar from "../components/Navbar";

// // // const Home = () => {
// // //     const [isModalOpen, setModalOpen] = useState(false);
// // //     const [alertMessage, setAlertMessage] = useState(null);

// // //     const toggleModal = () => setModalOpen((prev) => !prev);

// // //     return (
// // //         <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">

// // //             <header className="p-4">
// // //                 <Button onClick={() => setAlertMessage("Welcome to the Dual Theme App!")}>
// // //                     Show Alert
// // //                 </Button>
// // //                 <Button onClick={toggleModal}>Open Modal</Button>
// // //             </header>

// // //             <main className="flex justify-center items-center h-full space-x-6">
// // //                 <Card title="Card Title" description="This is a simple card.">
// // //                     <Button onClick={() => setAlertMessage("Card button clicked!")}>Click me</Button>
// // //                 </Card>
// // //             </main>

// // //             <Modal isOpen={isModalOpen} closeModal={toggleModal}>
// // //                 <h2 className="text-xl">This is a Modal</h2>
// // //                 <Button onClick={toggleModal}>Close Modal</Button>
// // //             </Modal>

// // //             {alertMessage && <Alert message={alertMessage} type="info" />}
// // //         </div>
// // //     );
// // // };

// // // export default Home;
// // import React, { useState } from "react";
// // import Button from "../components/Button.jsx";
// // import Card from "../components/Card.jsx";
// // import Modal from "../components/Modal.jsx";
// // import Alert from "../components/Alert.jsx";
// // import Navbar from "../components/Navbar";
// // import { useSwipeable } from "react-swipeable"; // For swipe gestures
// // import { jwtDecode } from "jwt-decode";
// // import { useUser } from "../context/UserContext.jsx";
// // import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// // import { useTheme } from "../context/ThemeContext"; // Assuming this is where your theme context is

// // const Home = () => {
// //     const [isModalOpen, setModalOpen] = useState(false);
// //     const [alertMessage, setAlertMessage] = useState(null);
// //     const { googleLogin } = useUser();
// //     const { isDark } = useTheme(); // Get current theme (dark or light)
// //     const toggleModal = () => setModalOpen((prev) => !prev);

// //     // Swipeable settings for mobile
// //     const handlers = useSwipeable({
// //         onSwipedLeft: () => setAlertMessage("Task Completed!"),
// //         preventDefaultTouchmoveEvent: true,
// //     });

// //     const handleGoogleLoginSuccess = async (credentialResponse) => {
// //         try {
// //             // Decode Google ID token to get user details
// //             const decodedToken = jwtDecode(credentialResponse.credential);
// //             await googleLogin({ credentials: credentialResponse.credential, decodedToken });
// //             alert("Google Login Successful!");
// //         } catch (err) {
// //             console.error(err);
// //             alert("Google login failed. Please try again.");
// //         }
// //     };

// //     return (
// //         <div
// //             className={`min-h-screen ${isDark ? 'bg-monkMode-primary text-monkMode-text' : 'bg-minimalist-primary text-minimalist-text'} font-sans`}
// //         >
// //             {/* Hero Section */}
// //             <main className="container mx-auto p-4">
// //                 <section className="mb-8 text-center">
// //                     <img
// //                         alt="Background image of a calendar and productivity tools"
// //                         className="w-full h-64 object-cover rounded-lg mb-4"
// //                         src="https://storage.googleapis.com/a1aa/image/793qGbCV9fURUa4wB6lWRlyPyL1qdTo0vBd6VR66MYB9vQfTA.jpg"
// //                     />

// //                     <div className=" items-center justify-center self-center flex ">
// //                         <GoogleLogin
// //                             onSuccess={handleGoogleLoginSuccess}
// //                             onError={() => console.log('Login Failed')}
// //                             render={(renderProps) => (
// //                                 <div
// //                                     onClick={renderProps.onClick}
// //                                     disabled={renderProps.disabled}
// //                                     className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all cursor-pointer"
// //                                 >
// //                                     <i className="fab fa-google"></i> Login with Google
// //                                 </div>
// //                             )}
// //                         />
// //                     </div>
// //                 </section>

// //                 {/* Feature Cards */}
// //                 <section className="mb-8">
// //                     <h2 className="text-xl font-semibold mb-4">Features</h2>
// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                         <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
// //                             <i className="fas fa-tasks text-blue-600 text-3xl mb-2"></i>
// //                             <h3 className="font-bold">Organize Tasks Effortlessly</h3>
// //                             <p className="text-gray-400">Manage your tasks with ease and efficiency.</p>
// //                         </div>
// //                         <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
// //                             <i className="fas fa-chart-line text-blue-600 text-3xl mb-2"></i>
// //                             <h3 className="font-bold">Track Your Progress</h3>
// //                             <p className="text-gray-400">Monitor your daily productivity and achievements.</p>
// //                         </div>
// //                         <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
// //                             <i className="fas fa-bell text-blue-600 text-3xl mb-2"></i>
// //                             <h3 className="font-bold">Stay Notified</h3>
// //                             <p className="text-gray-400">Get reminders and notifications to stay on track.</p>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* Testimonials Section */}
// //                 <section className="mb-8">
// //                     <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
// //                     <div className="carousel gap-4 flex-col flex">
// //                         <div {...handlers} className="carousel-item bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
// //                             <p className="dark:text-white mb-2 ">"Routines has completely transformed how I manage my day. Highly recommend!"</p>
// //                             <p className="font-bold text-gray-400">- Jane Doe</p>
// //                         </div>
// //                         <div {...handlers} className="carousel-item bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
// //                             <p className="dark:text-white mb-2">"The insights feature is a game-changer. I can see my progress at a glance."</p>
// //                             <p className="font-bold text-gray-400">- John Smith</p>
// //                         </div>
// //                         <div {...handlers} className="carousel-item bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
// //                             <p className="dark:text-white mb-2">"I love the notifications. They keep me on track without being intrusive."</p>
// //                             <p className="font-bold text-gray-400">- Emily Johnson</p>
// //                         </div>
// //                     </div>
// //                 </section>
// //             </main>

// //             {/* Modal Section */}
// //             <Modal isOpen={isModalOpen} closeModal={toggleModal}>
// //                 <h2 className="text-xl">This is a Modal</h2>
// //                 <Button onClick={toggleModal}>Close Modal</Button>
// //             </Modal>

// //             {/* Floating Add Routine Button */}
// //             <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all">
// //                 <i className="fas fa-plus"></i>
// //             </button>

// //             {/* Alert */}
// //             {alertMessage && <Alert message={alertMessage} type="info" />}
// //         </div>
// //     );
// // };

// // export default Home;

// import React, { useState } from "react";
// import Button from "../components/Button.jsx";
// import Modal from "../components/Modal.jsx";
// import Alert from "../components/Alert.jsx";
// import { useSwipeable } from "react-swipeable";
// import { jwtDecode } from "jwt-decode";
// import { useUser } from "../context/UserContext.jsx";
// import { GoogleLogin } from "@react-oauth/google";
// import { useTheme } from "../context/ThemeContext";

// const Home = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [alertMessage, setAlertMessage] = useState(null);
//     const { googleLogin } = useUser();
//     const { isDark } = useTheme();
//     const toggleModal = () => setModalOpen((prev) => !prev);

//     const handlers = useSwipeable({
//         onSwipedLeft: () => setAlertMessage("Task Completed!"),
//         preventDefaultTouchmoveEvent: true,
//     });

//     const handleGoogleLoginSuccess = async (credentialResponse) => {
//         try {
//             const decodedToken = jwtDecode(credentialResponse.credential);
//             await googleLogin({ credentials: credentialResponse.credential, decodedToken });
//             alert("Google Login Successful!");
//         } catch (err) {
//             console.error(err);
//             alert("Google login failed. Please try again.");
//         }
//     };

//     return (
//         <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-sans`}>
//             {/* Hero Section */}
//             <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
//                 <h1 className="text-4xl font-bold mb-2">Elevate Your Mood</h1>
//                 <p className="text-lg mb-4">Discover daily motivation and positivity to brighten your day.</p>
//                 {/* Google Login */}
//                 <div className="flex justify-center p-8">
//                     <GoogleLogin
//                         onSuccess={handleGoogleLoginSuccess}
//                         onError={() => console.log('Login Failed')}
//                         className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition cursor-pointer"
//                     />
//                 </div>
//             </section>

//             {/* Feature Cards */}
//             <section className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                     { title: "Easy Management", desc: "Effortlessly manage tasks.", icon: "fas fa-tasks" },
//                     { title: "Data Security", desc: "Your data is protected.", icon: "fas fa-shield-alt" },
//                     { title: "Team Collaboration", desc: "Work seamlessly with others.", icon: "fas fa-users" }
//                 ].map((feature, index) => (
//                     <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//                         <i className={`${feature.icon} text-3xl mb-4`}></i>
//                         <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                         <p>{feature.desc}</p>
//                     </div>
//                 ))}
//             </section>

//             {/* Testimonials Section */}
//             <section className="container mx-auto p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4">Hear from our awesome users!</h2>
//                 <div className="flex gap-4 overflow-x-auto">
//                     {[
//                         { name: "Alex Johnson", review: "Transformed my daily routine!" },
//                         { name: "Samantha Lee", review: "Incredible app for uplifting spirits!" },
//                         { name: "Michael Chen", review: "A must-have for mental wellness." }
//                     ].map((testimonial, index) => (
//                         <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-md min-w-[250px]">
//                             <p className="mb-2">"{testimonial.review}"</p>
//                             <h4 className="font-semibold">- {testimonial.name}</h4>
//                         </div>
//                     ))}
//                 </div>
//             </section>



//             {/* Floating Add Routine Button */}
//             <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition">
//                 <i className="fas fa-plus"></i>
//             </button>

//             {/* Modal */}
//             <Modal isOpen={isModalOpen} closeModal={toggleModal}>
//                 <h2 className="text-xl">This is a Modal</h2>
//                 <Button onClick={toggleModal}>Close Modal</Button>
//             </Modal>

//             {/* Alert */}
//             {alertMessage && <Alert message={alertMessage} type="info" />}
//         </div>
//     );
// };

// export default Home;

import React, { useState } from "react";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import Alert from "../components/Alert.jsx";
import { useSwipeable } from "react-swipeable";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/UserContext.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const { googleLogin } = useUser();
    const { isDark } = useTheme();
    const toggleModal = () => setModalOpen((prev) => !prev);

    const handlers = useSwipeable({
        onSwipedLeft: () => setAlertMessage("Task Completed!"),
        preventDefaultTouchmoveEvent: true,
    });

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const decodedToken = jwtDecode(credentialResponse.credential);
            await googleLogin({ credentials: credentialResponse.credential, decodedToken });
            alert("Google Login Successful!");
        } catch (err) {
            console.error(err);
            alert("Google login failed. Please try again.");
        }
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-sans`}>
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Manage Tasks with Ease and Efficiency</h1>
                    <p className="text-gray-600 mb-6">Streamline your workflow, boost productivity, and achieve your goals with our intuitive task management platform.</p>
                    <div className="flex flex-row items-center align-middle space-x-4">

                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => console.log('Login Failed')}
                            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition cursor-pointer"
                        />

                        
                        <a className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700" href="#">Learn More</a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img alt="Dashboard screenshot showing task management features" className="rounded-lg shadow-lg" height="400" src="https://storage.googleapis.com/a1aa/image/NJVPgw3x4oVwlbuUyEvs_08FfbCg4GX8kivgXpJRqyk.jpg" width="600" />
                </div>
            </section>

            {/* Key Features Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <i className="fas fa-chart-line text-4xl text-purple-600 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Analytics</h3>
                            <p className="text-gray-600">Track your progress with detailed analytics and insights.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <i className="fas fa-shield-alt text-4xl text-purple-600 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h3>
                            <p className="text-gray-600">Your data is protected.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <i className="fas fa-bell text-4xl text-purple-600 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Notifications</h3>
                            <p className="text-gray-600">Stay updated with intelligent notification system.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Powerful Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tasks Completed</h3>
                            <p className="text-4xl font-bold text-gray-900 mb-2">248</p>
                            <p className="text-gray-600">Last 30 days</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Streak</h3>
                            <p className="text-4xl font-bold text-gray-900 mb-2">12 days</p>
                            <p className="text-gray-600">Personal best</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Members</h3>
                            <p className="text-4xl font-bold text-gray-900 mb-2">8</p>
                            <p className="text-gray-600">Active now</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Add Routine Button */}
            <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition">
                <i className="fas fa-plus"></i>
            </button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} closeModal={toggleModal}>
                <h2 className="text-xl">This is a Modal</h2>
                <Button onClick={toggleModal}>Close Modal</Button>
            </Modal>

            {/* Alert */}
            {alertMessage && <Alert message={alertMessage} type="info" />}
        </div>
    );
};

export default Home;