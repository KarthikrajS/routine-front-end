import { createContext, useState } from 'react';

export const MoodContext = createContext();

const moodSettings = {
    minimalist: {
        primary: '#f5f5f5',
        secondary: '#e0e0e0',
        text: '#2c3e50',
        accent: '#95a5a6',
        danger:'#F60004',
        taskPriority: {
            high: '#34495e',
            medium: '#7f8c8d',
            low: '#bdc3c7'
        },
        // theme: 'bg-gray-100 text-gray-900',
        theme: "bg-gray-100 text-gray-900 shadow-md border-gray-300",
        priorityMultiplier: 1.0,
    },
    monkMode: {
        primary: '#2c3e50',
        secondary: '#34495e',
        text: '#ecf0f1',
        accent: '#95a5a6',
        danger:'#F60004',
        taskPriority: {
            high: '#e74c3c',
            medium: '#f39c12',
            low: '#27ae60'
        },
        // theme: 'bg-gray-900 text-white',
        theme: "bg-black text-blue-400 shadow-lg border-gray-700",
        priorityMultiplier: 1.5,
    },
    energetic: {
        primary: '#3498db',
        secondary: '#2980b9',
        text: '#ffffff',
        accent: '#e74c3c',
        danger:'#f60004',
        taskPriority: {
            high: '#e74c3c',
            medium: '#f1c40f',
            low: '#2ecc71'

        },
        // theme: 'bg-yellow-300 text-yellow-900',
        theme: "bg-gradient-to-r from-yellow-300 to-red-400 text-black",
        priorityMultiplier: 1.2,
    }
};

export const MoodProvider = ({ children }) => {
    const [mood, setMood] = useState('minimalist');

    const changeMood = (newMood) => {
        console.log(newMood, "newMood");
        setMood(newMood);
    };
    console.log(moodSettings[mood], mood, "moodSettings[mood]");
    return (
        <MoodContext.Provider value={{ mood, settings: moodSettings[mood], changeMood }}>
            {children}
        </MoodContext.Provider>
    );
};
