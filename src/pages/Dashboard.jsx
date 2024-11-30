import { useContext, useEffect, useState } from 'react';
import { MoodContext } from '../context/MoodContext';

// import TaskForm from '../Forms/TaskForm';
import MoodToggle from '../components/MoodToggle';
import ListView from '../components/ListView';
import { TaskList } from '../components/TaskList';
import { MoodSelector } from '../components/MoodSelector';
import { TaskForm } from '../components/AnimatedForm';
import Button from '../components/Button';
import Modal from '../components/Modal';
import CalendarView from '../components/Calendar';
import { RoutineContext } from '../context/RoutineContext';


const Dashboard = () => {
    const { mood, settings } = useContext(MoodContext);
    // const [tasks, setTasks] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen((prev) => !prev);
    const {addTask, tasks, removeTask, updateExistingTask} = useContext(RoutineContext);

    const handleCreateTask = async (newTask) => {

        const newTaskPayload = {
            "userId": "674761fdf2e05f89435a0338",
            "title": newTask?.title,
            "description": newTask?.description,
            "priority": newTask?.priority,
            "dueDate": {
                "startDate": new Date(newTask?.dueDate?.startDate),
                "endDate": new Date(newTask?.dueDate?.endDate)
            },
            // "plannedStartTime": {
            //     "date": "2024-11-28T14:45:15",
            //     "time": "6:00"
            // },
            // "actualStartAt": {
            //     "date": "2024-11-28T14:45:15",
            //     "time": "6:00"
            // },
            // "completedAt": {
            //     "date": "2024-11-28T14:45:15",
            //     "time": "9:00"
            // },
            "status": 'pending',
            "assigntTo": {
                "_id": "674761fdf2e05f89435a0338",
                "username": "KJ"
            }
        }

        const taskResult = await addTask(newTaskPayload);
        console.log(taskResult, "taskResult");
        // if (taskResult?.ok) {
        //     setTasks((prevTasks) => [
        //         ...prevTasks,
        //         { ...taskResult?.data, id: Date.now(), status: 'pending' }
        //     ]);
        // }

    };

    const handleCompleteTask = async(taskId) => {

        const removerSesult = await removeTask(taskId);
        console.log(removerSesult, "removerSesult");
        // setTasks((prevTasks) =>
        //     prevTasks.map((task) =>
        //         task.id === taskId
        //             ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        //             : task
        //     )
        // );
    };

    // Fetch tasks from backend API
    useEffect(() => {
        // Call backend API to get tasks
        // fetchTasks().then((data) => setTasks(data));
    }, []);
    console.log(settings, "settings");

    return (
        <div className={`dashboard-container ${settings.theme} container items-center justify-center flex flex-col`}>
            <h1>Dashboard - Mood: {mood}</h1>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <TaskForm onSubmit={handleCreateTask} />
            </Modal>
            {/* <MoodToggle /> */}


            <div className="task-container">
                <Button onClick={(e) => { e.preventDefault(); toggleModal() }}> Create Task</Button>
                {/* <TaskForm onCreate={handleCreateTask}  /> */}
                {/* <ListView tasks={tasks} /> */}

                <ListView tasks={tasks} onComplete={handleCompleteTask} />
                <CalendarView tasks={tasks} setTasks={updateExistingTask} />
            </div>
        </div>
    );
};

export default Dashboard;
