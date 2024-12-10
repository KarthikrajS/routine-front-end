// components/Modal.jsx
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-md shadow-lg w-3/4 max-w-md"
            >
                <div
                    className="bg-white sm:w-96 dark:bg-dark-light text-dark dark:text-light p-6 rounded-lg w-96"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Button
                        color="bg-primary"
                        className="absolute top-2 right-2 text-xl font-bold text-gray-700 dark:text-gray-300"
                        onClick={onClose}
                    >
                        &times;
                    </Button>
                    <div>{children}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
