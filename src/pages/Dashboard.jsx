// import { useContext, useEffect, useState } from 'react';
// import { MoodContext } from '../context/MoodContext.jsx';

// // import TaskForm from '../Forms/TaskForm';
// // import MoodToggle from '../components/MoodToggle';
// import ListView from '../components/ListView.jsx';
// // import { TaskList } from '../components/TaskList';
// // import { MoodSelector } from '../components/MoodSelector';
// import TaskForm from '../components/AnimatedForm.jsx';
// import Button from '../components/Button.jsx';
// import Modal from '../components/Modal.jsx';
// import CalendarView from '../components/Calendar.jsx';
// import { RoutineContext } from '../context/RoutineContext.jsx';
// import TaskUpdateModal from '../components/TaskUpdateForm.jsx';
// import { redirect } from 'react-router-dom';
// import TabsRender from '../components/Tabs.jsx';
// import { useUser } from '../context/UserContext.jsx';
// import TaskDeleteModal from '../components/TaskDeleteForm.jsx';


// const Dashboard = () => {
//     const { mood, settings } = useContext(MoodContext);
//     // const [tasks, setTasks] = useState([]);
//     const { user } = useUser();
//     // console.log(user, "Asddasddddasdasd");
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//     const [isDeletModalOpen, setIsDeletModalOpen] = useState(false);
//     const toggleModal = () => setModalOpen((prev) => !prev);
//     const toggleUpdateModal = () => setIsUpdateModalOpen((prev) => !prev)
//     const toggleDeleteModal = () => setIsDeletModalOpen(prev => !prev)
//     const { addTask, tasks, removeTask, updateExistingTask, view, page, totalTasks, setView, setPage } = useContext(RoutineContext);
//     const [selectedTask, setSelectedTask] = useState(null);
//     const [selectedDays, setSelectedDays] = useState([]);
//     const [weeks, setWeeks] = useState(1);

//     // const handleCreateTask = async (newTask) => {

//     //     const newTaskPayload = {
//     //         "userId": user?._id,
//     //         "title": newTask?.title,
//     //         "description": newTask?.description,
//     //         "priority": newTask?.priority,
//     //         "dueDate": {
//     //             "startDate": new Date(newTask?.dueDate?.startDate),
//     //             "endDate": new Date(newTask?.dueDate?.endDate)
//     //         },
//     //         // "plannedStartTime": {
//     //         //     "date": "2024-11-28T14:45:15",
//     //         //     "time": "6:00"
//     //         // },
//     //         // "actualStartAt": {
//     //         //     "date": "2024-11-28T14:45:15",
//     //         //     "time": "6:00"
//     //         // },
//     //         // "completedAt": {
//     //         //     "date": "2024-11-28T14:45:15",
//     //         //     "time": "9:00"
//     //         // },
//     //         "status": 'pending',
//     //         "taskType": newTask?.taskType,
//     //         "assigntTo": {
//     //             "_id": "674761fdf2e05f89435a0338",
//     //             "username": "KJ"
//     //         }
//     //     }

//     //     const taskResult = await addTask(newTaskPayload);
//     //     console.log(taskResult, "taskResult");
//     //     // if (taskResult?.ok) {
//     //     //     setTasks((prevTasks) => [
//     //     //         ...prevTasks,
//     //     //         { ...taskResult?.data, id: Date.now(), status: 'pending' }
//     //     //     ]);
//     //     // }

//     // };
//     const handleCreateTask = async (newTask) => {
//         // Convert the days into date objects across the selected weeks
//         const currentDate = new Date();
//         const tasks = [];

//         for (let week = 0; week < weeks; week++) {
//             for (const day of selectedDays) {
//                 const dayOffset = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(day);
//                 const nextDate = new Date(currentDate);

//                 // Calculate the target date for the day in the week
//                 nextDate.setDate(currentDate.getDate() + week * 7 + (dayOffset - currentDate.getDay() + 7) % 7);

//                 const newTaskPayload = {
//                     userId: user?._id,
//                     title: newTask?.title,
//                     description: newTask?.description,
//                     priority: newTask?.priority,
//                     dueDate: {
//                         startDate: nextDate,
//                         endDate: nextDate, // Same day, modify if needed
//                     },
//                     status: "pending",
//                     taskType: newTask?.taskType,
//                     assigntTo: {
//                         _id: "674761fdf2e05f89435a0338",
//                         username: "KJ",
//                     },
//                 };

//                 tasks.push(newTaskPayload);
//             }
//         }

//         // Make API calls for each task
//         const taskPromises = tasks.map((task) => addTask(task));
//         const taskResults = await Promise.all(taskPromises);

//         // console.log(taskResults, "All tasks created");

//         // Handle responses if needed
//         const successfulTasks = taskResults.filter((result) => result?.ok);
//         if (successfulTasks.length) {
//             console.log(`${successfulTasks.length} tasks were successfully created.`);
//         } else {
//             console.error("No tasks were created successfully.");
//         }
//     };

//     const handleCompleteTask = async (taskId) => {

//         const removerSesult = await removeTask(taskId);
//         console.log(removerSesult, "removerSesult");
//         // setTasks((prevTasks) =>
//         //     prevTasks.map((task) =>
//         //         task.id === taskId
//         //             ? { ...task, status: task.status === 'completed' dark:? 'pending completed' }
//         //             : task
//         //     )
//         // );
//     };

//     // Fetch tasks from backend API
//     useEffect(() => {
//         // Call backend API to get tasks
//         // fetchTasks().then((data) => setTasks(data));
//     }, []);
//     console.log(settings, "settings");

//     const handleTaskUpdate = async (updatedTask) => {

//         // console.log(updatedTask, "updatedTask");
//         const updateResult = await updateExistingTask(updatedTask?.id || updatedTask?._id, updatedTask)

//         if (updateResult?.data) {
//             redirect("/dashboard")
//         }
//     };

//     const handleTaskDelete = async (updatedTask) => {

//         // console.log(updatedTask, "updatedTask");
//         updatedTask.status = "deferred"
//         const updateResult = await removeTask(updatedTask?.id || updatedTask?._id, updatedTask)

//         if (updateResult?.data) {
//             redirect("/dashboard")
//         }
//     };

//     const [sortKey, setSortKey] = useState('dueDate');

//     const sortedTasks = [...[...tasks].sort((a, b) => {
//         if (sortKey === 'priority') return b.priority - a.priority;
//         // if (sortKey === 'status') return a.status.localeCompare(b.status);
//         return new Date(a.dueDate.startDate) - new Date(b.dueDate.startDate);
//     })];


//     const tabData = [
//         {
//             title: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
//             </svg>, data: <CalendarView tasks={tasks} setTasks={updateExistingTask} openModal={toggleUpdateModal} setSelectedTask={setSelectedTask} />
//         },
//         {
//             title: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
//             </svg>, data: <ListView tasks={sortedTasks} setSelectedTask={setSelectedTask} onComplete={removeTask} toggleUpdateModal={toggleUpdateModal} toggleDeleteModal={toggleDeleteModal} page={page} totalTasks={totalTasks} setPage={setPage} />
//         },

//     ]

//     return (
//         // <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light"></div>
//         <div className={`min-h-screen ${settings.theme}  items-center justify-center flex flex-col p-4`}>
//             {/* <h1>Dashboard - Mood: {mood}</h1> */}
//             <Modal isOpen={isModalOpen} onClose={toggleModal}>
//                 <TaskForm onSubmit={handleCreateTask} selectedDays={selectedDays} setSelectedDays={setSelectedDays} weeks={weeks} setWeeks={setWeeks} />
//             </Modal>

//             <Modal isOpen={isUpdateModalOpen} onClose={toggleUpdateModal}>
//                 <TaskUpdateModal task={selectedTask} isOpen={isUpdateModalOpen} onClose={toggleUpdateModal} setSelectedTask={setSelectedTask} onUpdate={handleTaskUpdate} />
//             </Modal>

//             <Modal isOpen={isDeletModalOpen} onClose={toggleDeleteModal}>
//                 <TaskDeleteModal task={selectedTask} isOpen={isDeletModalOpen} onClose={toggleDeleteModal} setSelectedTask={setSelectedTask} onUpdate={handleTaskDelete} />
//             </Modal>
//             {/* <MoodToggle /> */}


//             <div className="task-container">
//                 <div className='flex flex-row justify-between items-center'>
//                     <select onChange={(e) => setSortKey(e.target.value)} className="mb-4">
//                         <option value="dueDate">Due Date</option>
//                         <option value="priority">Priority</option>
//                         <option value="status">Status</option>
//                     </select>
//                     <Button onClick={(e) => { e.preventDefault(); toggleModal() }}> Create Task</Button>
//                 </div>

//                 <TabsRender view={view} setView={setView} tabData={tabData} />


//                 {/* <TaskForm onCreate={handleCreateTask}  /> */}
//                 {/* <ListView tasks={tasks} /> */}



//             </div>
//         </div>
//     );
// };

// export default Dashboard;

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

const Dashboard = () => {
    const [motivationMessage, setMotivationMessage] = useState("You're on fire! Keep it up!");
    const { settings } = useContext(MoodContext); // Access theme settings
    const { isDark } = useTheme();
    const { user } = useUser();

    return (
        <div className={`min-h-screen ${isDark ? "bg-monkMode-primary text-monkMode-text" : "bg-minimalist-primary text-minimalist-text"
            } font-sans p-4`}>
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
                    <StreakMeter user={user}/>
                </div>
                {/* Quick Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className={`p-4 rounded shadow dark:bg-gray-800 dark:text-white bg-white text-black'}`}>
                        <h3 className="text-lg font-bold">⭐ This Week's Best Streak</h3>
                        <p className="text-2xl">5 days</p>
                    </div>
                    <div className={`p-4 rounded shadow dark:bg-gray-800 dark:text-white bg-white text-black'}`}>
                        <h3 className="text-lg font-bold">✔️ Tasks Completed Today</h3>
                        <p className="text-2xl">8 tasks</p>
                    </div>
                    <div className={`p-4 rounded shadow dark:bg-gray-800 dark:text-white bg-white text-black'}`}>
                        <h3 className="text-lg font-bold">🏅 Next Badge</h3>
                        <img
                            alt="Next badge preview"
                            className="mx-auto"
                            height="100"
                            src="https://storage.googleapis.com/a1aa/image/HljydiuD7YpNEdYt"
                        />
                    </div>
                </div>
            </div>

            {/* Motivation Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-4 rounded shadow dark:bg-gray-800 dark:text-white bg-white text-black'}`}
            >
                <h2 className="text-2xl text-center">{motivationMessage}</h2>
            </motion.div>

            {/* Confetti Animation */}
            <ConfettiAnimation height={42} width={68} />
        </div>
    );
};

export default Dashboard;
