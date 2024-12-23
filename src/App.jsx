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
    return user ? children : <Navigate to="/" />;
  };

  return (
    <div className={`min-h-screen bg-light dark:bg-dark text-dark dark:text-light`}>
      <BrowserRouter>
        <Navbar user={user} logout={logout} openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
        <Routes>
          {/* <Route path="/login" element={<GuestRoute><Login /></GuestRoute>}/> */}
          <Route path="/" element={<GuestRoute><Home isDark={isDark} toggleTheme={toggleTheme} /></GuestRoute>} />
          <Route path="/dashboard" element={<UserRoute><Dashboard /></UserRoute>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
