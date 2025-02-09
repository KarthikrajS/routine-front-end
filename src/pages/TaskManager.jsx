import { useContext, useEffect, useState } from 'react';
import { MoodContext } from '../context/MoodContext.jsx';
import ListView from '../components/ListView.jsx';
import TaskForm from '../components/AnimatedForm.jsx';
import Button from '../components/Button.jsx';
import Modal from '../components/Modal.jsx';
import CalendarView from '../components/Calendar.jsx';
import { RoutineContext } from '../context/RoutineContext.jsx';
import TaskUpdateModal from '../components/TaskUpdateForm.jsx';
import { redirect } from 'react-router-dom';
import TabsRender from '../components/Tabs.jsx';
import { useUser } from '../context/UserContext.jsx';
import TaskDeleteModal from '../components/TaskDeleteForm.jsx';
import StreakMeter from '../components/StreakMeter.jsx';
import ConfettiAnimation from '../components/ConfettiAnimation.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const TaskManager = () => {
    const { mood, settings } = useContext(MoodContext);
    const { user } = useUser();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeletModalOpen, setIsDeletModalOpen] = useState(false);
    const { addTask, tasks, removeTask, updateExistingTask, view, page, totalTasks, setView, setPage } = useContext(RoutineContext);
    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const [weeks, setWeeks] = useState(1);
    const [sortKey, setSortKey] = useState('dueDate');
    const { isDark } = useTheme();

    const toggleModal = () => setModalOpen((prev) => !prev);
    const toggleUpdateModal = () => setIsUpdateModalOpen((prev) => !prev);
    const toggleDeleteModal = () => setIsDeletModalOpen(prev => !prev);

    // Sorting tasks
    const sortedTasks = [...[...tasks].sort((a, b) => {
        if (sortKey === 'priority') return b.priority - a.priority;
        return new Date(a.dueDate.startDate) - new Date(b.dueDate.startDate);
    })];

    const handleCreateTask = async (newTask) => {
        const currentDate = new Date();

        if (newTask.isRoutine) {
            // Handle routine tasks
            const tasksToCreate = [];

            for (let week = 0; week < weeks; week++) {
                for (const day of selectedDays) {
                    const dayOffset = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(day);
                    const nextDate = new Date(currentDate);
                    nextDate.setDate(currentDate.getDate() + week * 7 + (dayOffset - currentDate.getDay() + 7) % 7);

                    const newTaskPayload = {
                        userId: user?._id,
                        title: newTask?.title,
                        description: newTask?.description,
                        priority: newTask?.priority,
                        dueDate: {
                            startDate: nextDate,
                            endDate: nextDate,
                        },
                        status: "pending",
                        taskType: newTask?.taskType,
                        assigntTo: { _id: "674761fdf2e05f89435a0338", username: "KJ" },
                    };

                    tasksToCreate.push(newTaskPayload);
                }
            }

            const taskPromises = tasksToCreate.map((task) => addTask(task));
            await Promise.all(taskPromises);
        } else {
            // Handle single task
            const newTaskPayload = {
                userId: user?._id,
                title: newTask?.title,
                description: newTask?.description,
                priority: newTask?.priority,
                dueDate: {
                    startDate: newTask?.dueDate?.startDate,
                    endDate: newTask?.dueDate?.endDate,
                },
                status: "pending",
                taskType: newTask?.taskType,
                assigntTo: { _id: "674761fdf2e05f89435a0338", username: "KJ" },
            };

            await addTask(newTaskPayload);
        }
    };

    const tabData = [
        {
            title: "📅 Calendar View",
            data: <CalendarView tasks={tasks} setTasks={updateExistingTask} openModal={toggleUpdateModal} setSelectedTask={setSelectedTask} />
        },
        {
            title: "📋 List View",
            data: <ListView tasks={sortedTasks} setSelectedTask={setSelectedTask} onComplete={removeTask} toggleUpdateModal={toggleUpdateModal} toggleDeleteModal={toggleDeleteModal} page={page} totalTasks={totalTasks} setPage={setPage} />
        }
    ];

    return (
        <div
            className={`min-h-screen ${isDark ? "bg-monkMode-primary text-monkMode-text" : "bg-minimalist-primary text-minimalist-text"
                } font-sans p-4`}
        >
            <button onClick={toggleModal} className="bg-blue-500 dark:bg-[#1A1A1A] text-white px-4 py-2 rounded-full fixed top-24 right-4 shadow-lg z-50">
                ⚡ Quick Add Task
            </button>


            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <TaskForm onSubmit={handleCreateTask} selectedDays={selectedDays} setSelectedDays={setSelectedDays} weeks={weeks} setWeeks={setWeeks} />
            </Modal>

            <Modal isOpen={isUpdateModalOpen} onClose={toggleUpdateModal}>
                <TaskUpdateModal task={selectedTask} isOpen={isUpdateModalOpen} onClose={toggleUpdateModal} setSelectedTask={setSelectedTask} onUpdate={updateExistingTask} />
            </Modal>

            <Modal isOpen={isDeletModalOpen} onClose={toggleDeleteModal}>
                <TaskDeleteModal task={selectedTask} isOpen={isDeletModalOpen} onClose={toggleDeleteModal} setSelectedTask={setSelectedTask} onUpdate={removeTask} />
            </Modal>

            <main>
                <div className="mb-6">
                    <TabsRender view={view} setView={setView} tabData={tabData} tabsRenderSpace={
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md h-32">
                                <StreakMeter />
                            </div>
                            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md h-32">
                                <ConfettiAnimation height={25} width={45} />
                            </div>
                        </div>} />
                </div>

            </main>




        </div>
    );
};

export default TaskManager;
