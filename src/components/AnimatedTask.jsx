// components/AnimatedTask.jsx
import { motion } from 'framer-motion';
// import { useMood } from '../contexts/MoodContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { MoodContext } from '../context/MoodContext';


const useMood = () => useContext(MoodContext)

const TaskCard = styled(motion.div)`
  background-color: ${props => props.primary};
  color: ${props => props.text};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const AnimatedTask = ({ task }) => {
    const { settings } = useMood();

    console.log(task, "task");
    return (
        <TaskCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.02 }}
            theme={settings}
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span style={{ color: settings?.taskPriority[task?.priority] }}>
                Priority: {task.priority}
            </span>
        </TaskCard>
    );
};