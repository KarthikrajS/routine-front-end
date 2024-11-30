// components/Modal.jsx
import React from "react";
import Button from "./Button";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-dark-light text-dark dark:text-light p-6 rounded-lg w-96"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    className="absolute top-2 right-2 text-xl font-bold text-gray-700 dark:text-gray-300"
                    onClick={onClose}
                >
                    &times;
                </Button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
