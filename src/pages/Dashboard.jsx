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
import TaskUpdateModal from '../components/TaskUpdateForm';
import { redirect } from 'react-router-dom';
import TabsRender from '../components/Tabs';
import { useUser } from '../context/UserContext';


const Dashboard = () => {
    const { mood, settings } = useContext(MoodContext);
    // const [tasks, setTasks] = useState([]);
    const { user } = useUser();
    console.log(user, "Asddasddddasdasd");
    const [isModalOpen, setModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const toggleModal = () => setModalOpen((prev) => !prev);
    const toggleUpdateModal = () => setIsUpdateModalOpen((prev) => !prev)
    const { addTask, tasks, removeTask, updateExistingTask, view, page, totalTasks, setView, setPage } = useContext(RoutineContext);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleCreateTask = async (newTask) => {

        const newTaskPayload = {
            "userId": user?._id,
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

    const handleCompleteTask = async (taskId) => {

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

    const handleTaskUpdate = async (updatedTask) => {

        console.log(updatedTask, "updatedTask");
        const updateResult = await updateExistingTask(updatedTask?.id || updatedTask?._id, updatedTask)

        if (updateResult?.data) {
            redirect("/dashboard")
        }
        // fetch(`/api/tasks/update`, {
        //     method: "PUT",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(updatedTask),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setTasks((prev) =>
        //             prev.map((task) => (task._id === data._id ? data : task))
        //         );
        //     });
    };
    const [sortKey, setSortKey] = useState('dueDate');

    const sortedTasks = [...[...tasks].sort((a, b) => {
        if (sortKey === 'priority') return b.priority - a.priority;
        // if (sortKey === 'status') return a.status.localeCompare(b.status);
        return new Date(a.dueDate.startDate) - new Date(b.dueDate.startDate);
    })];


    const tabData = [
        {
            title: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>, data: <CalendarView tasks={tasks} setTasks={updateExistingTask} openModal={toggleUpdateModal} setSelectedTask={setSelectedTask} />
        },
        {
            title: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>, data: <ListView tasks={sortedTasks} setSelectedTask={setSelectedTask} onComplete={updateExistingTask} toggleUpdateModal={toggleUpdateModal} page={page} totalTasks={totalTasks} setPage={setPage} />
        },

    ]

    return (
        // <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light"></div>
        <div className={`min-h-screen ${settings.theme}  items-center justify-center flex flex-col p-4`}>
            {/* <h1>Dashboard - Mood: {mood}</h1> */}
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <TaskForm onSubmit={handleCreateTask} />
            </Modal>

            <Modal isOpen={isUpdateModalOpen} onClose={toggleUpdateModal}>
                <TaskUpdateModal task={selectedTask} isOpen={isUpdateModalOpen} onClose={toggleUpdateModal} etSelectedTask={setSelectedTask} onUpdate={handleTaskUpdate} />
            </Modal>
            {/* <MoodToggle /> */}


            <div className="task-container">
                <div className='flex flex-row justify-between items-center'>
                    <select onChange={(e) => setSortKey(e.target.value)} className="mb-4">
                        <option value="dueDate">Due Date</option>
                        <option value="priority">Priority</option>
                        <option value="status">Status</option>
                    </select>
                    <Button onClick={(e) => { e.preventDefault(); toggleModal() }}> Create Task</Button>
                </div>

                <TabsRender view={view} setView={setView} tabData={tabData} />


                {/* <TaskForm onCreate={handleCreateTask}  /> */}
                {/* <ListView tasks={tasks} /> */}



            </div>
        </div>
    );
};

export default Dashboard;
