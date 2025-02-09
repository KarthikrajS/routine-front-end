import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../hooks/axiosInstance';

const StreakMeter = (props) => {
    const [streak, setStreak] = useState({ count: 0, lastUpdated: null });

    useEffect(() => {
        const fetchStreak = async () => {
            try {
                const { data } = await axiosInstance.get('/users/api/protected/rewards');
                setStreak(data.streak);
            } catch (err) {
                console.error('Failed to fetch streak data:', err);
            }
        };

        fetchStreak();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-semibold text-indigo-600 mb-3">📈 Streak Meter</h2>
            <p className="text-gray-700">You’re on a {streak.count}-day streak!</p>
        </div>
    );
};

export default StreakMeter;
