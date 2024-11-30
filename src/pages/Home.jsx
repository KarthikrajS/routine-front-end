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
import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    const toggleModal = () => setModalOpen((prev) => !prev);

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
            
            <header className="p-4">
                <Button onClick={() => setAlertMessage("Welcome to the Dual Theme App!")}>
                    Show Alert
                </Button>
                <Button onClick={toggleModal}>Open Modal</Button>
            </header>

            <main className="flex justify-center items-center h-full space-x-6">
                <Card title="Card Title" description="This is a simple card.">
                    <Button onClick={() => setAlertMessage("Card button clicked!")}>Click me</Button>
                </Card>
            </main>

            <Modal isOpen={isModalOpen} closeModal={toggleModal}>
                <h2 className="text-xl">This is a Modal</h2>
                <Button onClick={toggleModal}>Close Modal</Button>
            </Modal>

            {alertMessage && <Alert message={alertMessage} type="info" />}
        </div>
    );
};

export default Home;
