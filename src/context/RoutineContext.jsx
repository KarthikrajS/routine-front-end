import { createContext, useState, useContext, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';
import {  useUser } from './UserContext';

export const RoutineContext = createContext({
    tasks:[], addTask:()=>{}, updateExistingTask:()=>{}, removeTask:()=>{}
});

export const RoutineProvider = ({ children }) => {
    const { token } = useUser();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (token) {
            fetchTasks(token).then(setTasks).catch(console.error);
        }
    }, [token]);

    const addTask = async (data) => {
        console.log(data, "data");
        const newTask = await createTask(data, token);
        console.log(newTask, "newTask");
        setTasks((prev) => [...prev, newTask?.data]);
    };

    const updateExistingTask = async (id, data) => {
        const updatedTask = await updateTask(id, data, token);
        setTasks((prev) => prev.map((task) => (task._id === id ? updatedTask : task)));
    };

    const removeTask = async (id) => {
        await deleteTask(id, token);
        setTasks((prev) => prev.filter((task) => task._id !== id));
    };

    return (
        <RoutineContext.Provider value={{ tasks, addTask, updateExistingTask, removeTask }}>
            {children}
        </RoutineContext.Provider>
    );
};
