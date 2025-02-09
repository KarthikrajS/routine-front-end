import React, { useState } from "react";

const Dropdown = ({ items, buttonName, buttonIcon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all ease-in-out flex items-center"
            >
                {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
                {buttonName && <span>{buttonName}</span>}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                    <ul className="list-none">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 text-gray-700 hover:bg-indigo-100 cursor-pointer flex items-center"
                                onClick={item.action}
                            >
                                {item.icon && <span className="mr-2">{item.icon}</span>}
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
