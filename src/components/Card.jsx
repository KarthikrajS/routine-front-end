// components/Card.jsx
import React from "react";

const Card = ({ title, description, children, className }) => {
    return (
        <div
            className={`bg-white dark:bg-dark-light text-dark dark:text-light rounded-lg shadow-lg p-6 space-y-4 ${className}`}
        >
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
            <div>{children}</div>
        </div>
    );
};

export default Card;
