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

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeletModalOpen, setIsDeletModalOpen] = useState(false);
    const { addTask, tasks, removeTask, updateExistingTask, view, page, totalTasks, setView, setPage } = useContext(RoutineContext);
    const [selectedTask, setSelectedTask] = useState(null);


    const [sortKey, setSortKey] = useState('dueDate');
    const { isDark } = useTheme();


    const toggleUpdateModal = () => setIsUpdateModalOpen((prev) => !prev);
    const toggleDeleteModal = () => setIsDeletModalOpen(prev => !prev);

    // Sorting tasks
    const sortedTasks = [...[...tasks].sort((a, b) => {
        if (sortKey === 'priority') return b.priority - a.priority;
        return new Date(a.dueDate.startDate) - new Date(b.dueDate.startDate);
    })];


    // const tabData = [
    //     {
    //         title: "📅 Calendar View",
    //         data: <CalendarView tasks={tasks} setTasks={updateExistingTask} openModal={toggleUpdateModal} setSelectedTask={setSelectedTask} />
    //     },
    //     {
    //         title: "📋 List View",
    //         data: <ListView tasks={sortedTasks} setSelectedTask={setSelectedTask} onComplete={removeTask} toggleUpdateModal={toggleUpdateModal} toggleDeleteModal={toggleDeleteModal} page={page} totalTasks={totalTasks} setPage={setPage} />
    //     }
    // ];

    return (
        <>


            <Modal isOpen={isUpdateModalOpen} onClose={toggleUpdateModal}>
                <TaskUpdateModal task={selectedTask} isOpen={isUpdateModalOpen} onClose={toggleUpdateModal} setSelectedTask={setSelectedTask} onUpdate={updateExistingTask} />
            </Modal>

            <Modal isOpen={isDeletModalOpen} onClose={toggleDeleteModal}>
                <TaskDeleteModal task={selectedTask} isOpen={isDeletModalOpen} onClose={toggleDeleteModal} setSelectedTask={setSelectedTask} onUpdate={removeTask} />
            </Modal>

            <main>
                <div className="mb-6">
                    <div className="relative w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md h-32">
                                <StreakMeter />
                            </div>
                            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md h-32">
                                <ConfettiAnimation height={25} width={45} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                <ListView tasks={sortedTasks} setSelectedTask={setSelectedTask} onComplete={removeTask} toggleUpdateModal={toggleUpdateModal} toggleDeleteModal={toggleDeleteModal} page={page} totalTasks={totalTasks} setPage={setPage} NoDataConst="Congratulation! You have completed all your tasks!" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <TabsRender view={view} setView={setView} tabData={tabData} tabsRenderSpace={
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md h-32">
                                <StreakMeter />
                            </div>
                            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-md h-32">
                                <ConfettiAnimation height={25} width={45} />
                            </div>
                        </div>} /> */}
                </div>

            </main>




        </>
    );
};

export default TaskManager;