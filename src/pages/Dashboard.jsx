// Import existing components
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import ConfettiAnimation from '../components/ConfettiAnimation';
import StreakMeter from '../components/StreakMeter';
import { MoodContext } from '../context/MoodContext.jsx'; // Assuming this holds theme settings
import { useTheme } from '../context/ThemeContext.jsx';
import { useUser } from '../context/UserContext.jsx';
import { Line } from "react-chartjs-2";
import { RoutineContext } from '../context/RoutineContext.jsx';

const Dashboard = () => {
    const [motivationMessage, setMotivationMessage] = useState("You're on fire! Keep it up!");
    const { settings } = useContext(MoodContext); // Access theme settings
    const { isDark } = useTheme();
    const { user } = useUser();
    const { tasks } = useContext(RoutineContext);

    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;

    // Generate weekly activity data
    const weeklyData = tasks.reduce((acc, task) => {

        console.log(task, "task.createdAt");
        const date = new Date(task.createdAt);
        const week = date.toLocaleDateString("en-US", { weekday: "short" });
        acc[week] = (acc[week] || 0) + 1;
        return acc;
    }, {});


    console.log(weeklyData,"weeklyData");
    const chartData = {
        labels: Object.keys(weeklyData),
        datasets: [
            {
                label: "Tasks Created",
                data: Object.values(weeklyData),
                fill: false,
                borderColor: "#4CAF50",
                backgroundColor: "#4CAF50",
                tension: 0.3,
            },
        ],
    };

    console.log(chartData, "chartData");
    return (
        <div className={`p-6 ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} font-sans p-4`}>
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">📊 Dashboard</h1>
                <div className="flex space-x-4">
                    <Link to="/add-routine">
                        <button className={`px-4 py-2 rounded dark:bg-blue-700 dark:text-white bg-blue-500 text-white'}`}>
                            ➕ Add Routine
                        </button>
                    </Link>
                    <Link to="/track-mood">
                        <button className={`px-4 py-2 rounded dark:bg-green-700 dark:text-white bg-green-500 text-white'}`}>
                            😊 Track Mood
                        </button>
                    </Link>
                </div>
            </header>

            {/* Progress Bar Section */}
            <div className="flex flex-col gap-8">
                <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md">
                    <StreakMeter user={user} />
                </div>

                {/* Quick Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className={`p-4 rounded shadow dark:bg-gray-800 dark:text-white bg-white text-black'}`}>
                        <h3 className="text-lg font-semibold">Completed Tasks</h3>
                        <p className="text-3xl font-bold">{completedTasks}</p>
                    </div>
                    <div className={`p-4 rounded shadow dark:bg-gray-800 dark:text-white bg-white text-black'}`}>
                        <h3 className="text-lg font-semibold">Pending Tasks</h3>
                        <p className="text-3xl font-bold">{pendingTasks}</p>
                    </div>
                </div>

                {/* Weekly Activity Graph */}
                {/* This part of the code in the Dashboard component is rendering a section that
                displays the weekly activity graph. Here's a breakdown of what it does: */
                /* <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white mb-6">
                    <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
                    <Line data={chartData} />
                </div> */}

                {/* Recent Tasks */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                    <h3 className="text-lg font-semibold mb-4">Recent Tasks</h3>
                    <ul>
                        {tasks.filter(task => new Date(task.dueDate.endDate) < new Date()).slice(0, 5).map((task, index) => (
                            <li key={index} className="flex justify-between py-2 border-b border-gray-700">
                                <span>{task.title}</span>
                                <span className={task.completed ? "text-green-400" : "text-red-400"}>
                                    {task.completed ? "Completed" : "Pending"}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
