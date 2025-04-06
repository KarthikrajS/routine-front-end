import { createContext, useState, useContext, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask, fetchTodayTasks } from '../api';
import { useUser } from './UserContext';

export const RoutineContext = createContext({
    tasks: [], todayTasks: [], view: "", totalTasks: 0, addTask: () => { }, updateExistingTask: () => { }, removeTask: () => { }, setPage: () => { }, setView: () => { }
});

export const RoutineProvider = ({ children }) => {
    const { token, user } = useUser();
    const [tasks, setTasks] = useState([]);
    const [todayTasks, setTodayTasks] = useState([]);
    const [page, setPage] = useState(1);
    // const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [totalPages, setTotalPages] = useState(1);
    const [totalTasks, setTotalTasks] = useState(0);
    const [view, setView] = useState("list");

    useEffect(() => {
        if (token) {
            fetchTasks(token, view, page)
                .then((tasks) => {
                    console.log(tasks, "tasks");
                    setTasks(tasks?.tasks);
                    setTotalPages(tasks?.totalPages);
                    setTotalTasks(tasks?.totalTasks);
                })
                .catch(console.error);



        }
    }, [token, page]);

    useEffect(() => {
        console.log(user?._id, "userasdsd");
        if (user)
            fetchTodayTasks(token, user._id)
                .then((tasks) => {
                    console.log(tasks, "asdsadtasks");
                    setTodayTasks(tasks);
                })
                .catch(console.error);
    }, [user, token]);

    const addTask = async (data) => {
        console.log(data, "data");
        const newTask = await createTask(data, token);
        console.log(newTask, "newTask");
        setTasks((prev) => [...prev, newTask?.data]);
    };

    const updateExistingTask = async (id, data) => {
        console.log(data, "data");
        const updatedTask = await updateTask(id, data, token);
        setTasks((prev) => prev.map((task) => (task._id === id ? updatedTask?.data : task)));
    };


    const removeTask = async (id, data) => {
        const deletedTask = await deleteTask(id, data, token);
        setTasks((prev) => prev.map((task) => (task._id === id ? deletedTask?.data : task)));
    };



    return (
        <RoutineContext.Provider value={{ tasks, todayTasks, view, totalTasks, setView, setPage, addTask, updateExistingTask, removeTask }}>
            {children}
        </RoutineContext.Provider>
    );
};
