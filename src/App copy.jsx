import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button"; // Button component import
import { useState } from 'react';
import Modal from './components/Modal';
import Register from './Forms/Registration';
import AuthModal from './Forms/AuthModal';
import Navbar from './components/Navbar';

function App() {
  const { isDark, toggleTheme } = useTheme(); // Accessing theme context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`min-h-screen bg-light dark:bg-dark text-dark dark:text-light`}>
      <BrowserRouter>
        <Navbar openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen}/>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
