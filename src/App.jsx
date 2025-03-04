import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard.jsx';
import { useTheme } from "./context/ThemeContext.jsx";
import Button from "./components/Button"; // Button component import
import { useState } from 'react';
import Modal from './components/Modal';
import Register from './Forms/Registration';
import AuthModal from './Forms/AuthModal';
import Navbar from './components/Navbar.jsx';
import { useUser } from './context/UserContext.jsx';
import Footer from './pages/Footer.jsx';
import TaskManager from './pages/TaskManager.jsx';
import Sidebar from './components/SideNav.jsx';

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
    return user ? (
      <div className="flex min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
        {/* Sidebar should only appear for logged-in users */}
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
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>

    </div>
  );

}

export default App;
