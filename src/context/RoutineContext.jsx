import { createContext, useState, useContext, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';
import { useUser } from './UserContext';

export const RoutineContext = createContext({
    tasks: [], view: "", totalTasks: 0, addTask: () => { }, updateExistingTask: () => { }, removeTask: () => { }, setPage: () => { }, setView: () => { }
});

export const RoutineProvider = ({ children }) => {
    const { token } = useUser();
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalTasks, setTotalTasks] = useState(0);
    const [view, setView] = useState("list");

    useEffect(() => {
        if (token) {
            fetchTasks(token, view, page).then((tasks) => { console.log(tasks, "tasks"); setTasks(tasks?.tasks); setTotalPages(tasks?.totalPages); setTotalTasks(tasks?.totalTasks) }).catch(console.error);
        }
    }, [token, page]);

    const addTask = async (data) => {
        console.log(data, "data");
        const newTask = await createTask(data, token);
        console.log(newTask, "newTask");
        setTasks((prev) => [...prev, newTask?.data]);
    };

    const updateExistingTask = async (id, data) => {
        const updatedTask = await updateTask(id, data, token);
        setTasks((prev) => prev.map((task) => (task._id === id ? updatedTask?.data : task)));
    };

    const removeTask = async (id) => {
        await deleteTask(id, token);
        setTasks((prev) => prev.filter((task) => task._id !== id));
    };



    return (
        <RoutineContext.Provider value={{ tasks, view, totalTasks, setView, setPage, addTask, updateExistingTask, removeTask }}>
            {children}
        </RoutineContext.Provider>
    );
};
