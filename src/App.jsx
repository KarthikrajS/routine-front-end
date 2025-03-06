import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard.jsx';
import { useTheme } from "./context/ThemeContext.jsx";
import Button from "./components/Button"; // Button component import
import { useContext, useState } from 'react';
import Modal from './components/Modal';
import Register from './Forms/Registration';
import AuthModal from './Forms/AuthModal';
import Navbar from './components/Navbar.jsx';
import { useUser } from './context/UserContext.jsx';
import Footer from './pages/Footer.jsx';
import TaskManager from './pages/TaskManager.jsx';
import Sidebar from './components/SideNav.jsx';
import CalendarView from './components/Calendar.jsx';
import CalendarWrapper from './pages/CalendarWrapper.jsx';
import { RoutineContext } from './context/RoutineContext.jsx';
import TaskForm from './components/AnimatedForm.jsx';

function App() {
  const { user, logout } = useUser()
  const { isDark, toggleTheme } = useTheme(); // Accessing theme context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const GuestRoute = ({ children }) => {
    return user ? <Navigate to="/dashboard" /> : children;
  };

  const UserRoute = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [weeks, setWeeks] = useState(1);
    const { addTask } = useContext(RoutineContext);

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


    const toggleModal = () => setModalOpen((prev) => !prev);
    return user ? (
      <div className="flex min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
        {/* Sidebar should only appear for logged-in users */}
        <button onClick={toggleModal} className="bg-blue-500 dark:bg-[#1A1A1A] text-white px-4 py-2 rounded-full fixed top-24 right-4 shadow-lg z-50">
          ⚡ Quick Add Task
        </button>


        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <TaskForm onSubmit={handleCreateTask} selectedDays={selectedDays} setSelectedDays={setSelectedDays} weeks={weeks} setWeeks={setWeeks} />
        </Modal>
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* <Navbar user={user} logout={logout} openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} /> */}
          <div
            className={`min-h-screen ${isDark ? "bg-monkMode-primary text-monkMode-text" : "bg-minimalist-primary text-minimalist-text"
              } font-sans p-1 rounded-lg`}
          >
            <div className="flex-1 p-4">
              {children}
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    ) : (
      <Navigate to="/" />
    );
  };


  return (
    <div className={`min-h-screen bg-light dark:bg-dark text-dark dark:text-light flex`}>
      <BrowserRouter basename="/routine-front-end">
        {/* Sidebar takes up space on the left */}
        {/* <Sidebar /> */}

        {/* Main content area should grow to take remaining space */}
        <div className="flex-1 flex flex-col">
          <Navbar user={user} logout={logout} openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />

          <div className="flex-1 p-4"> {/* Ensures Routes take the remaining space */}
            <Routes>
              <Route path="/" element={<GuestRoute><Home isDark={isDark} toggleTheme={toggleTheme} /></GuestRoute>} />
              <Route path="/dashboard" element={<UserRoute><Dashboard /></UserRoute>} />
              <Route path="/task-manager" element={<UserRoute><TaskManager /></UserRoute>} />
              <Route path="/calendar" element={<UserRoute><CalendarWrapper /></UserRoute>} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>

    </div>
  );

}

export default App;
