import { createContext, useState } from 'react';

export const MoodContext = createContext();

const moodSettings = {
    minimalist: {
        primary: '#f5f5f5',
        secondary: '#e0e0e0',
        text: '#2c3e50',
        accent: '#95a5a6',
        danger: '#F60004',
        taskPriority: {
            high: '#34495e',
            medium: '#7f8c8d',
            low: '#bdc3c7'
        },
        theme: "bg-gray-100 text-gray-900 shadow-md border-gray-300",
        priorityMultiplier: 1.0,
    },
    monkMode: {
        primary: '#2c3e50',
        secondary: '#34495e',
        text: '#ecf0f1',
        accent: '#95a5a6',
        danger: '#F60004',
        taskPriority: {
            high: '#e74c3c',
            medium: '#f39c12',
            low: '#27ae60'
        },
        theme: "bg-black text-blue-400 shadow-lg border-gray-700",
        priorityMultiplier: 1.5,
    },
    energetic: {
        primary: '#6346FB', // Replace with your vibrant purple
        secondary: '#FE3AF1', // Pinkish accent
        text: '#ffffff', // White text
        accent: '#FE7AE2', // Lighter pink for accents
        danger: '#F60004',
        taskPriority: {
            high: '#FE7AE2', // High priority tasks in pink
            medium: '#00D8FE', // Medium priority tasks in light blue
            low: '#2ecc71', // Low priority tasks in green
        },
        theme: "bg-gradient-to-r from-[#6346FB] to-[#FE7AE2] text-white", // Gradient background
        priorityMultiplier: 1.2,
    }
};

export const MoodProvider = ({ children }) => {
    const [mood, setMood] = useState('minimalist');

    const changeMood = (newMood) => {
        setMood(newMood);
    };

    return (
        <MoodContext.Provider value={{ mood, settings: moodSettings[mood], changeMood }}>
            {children}
        </MoodContext.Provider>
    );
};
