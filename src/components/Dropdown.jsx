import React, { useState } from "react";
import Button from "./Button";

const Dropdown = ({ items, onLogout, buttonName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleItemClick = (item) => {
        if (item.action) item.action();
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div className="relative">
            <Button
                onClick={toggleDropdown}
            >
                {buttonName}
            </Button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
