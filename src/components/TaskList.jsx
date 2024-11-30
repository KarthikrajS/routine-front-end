// import React from 'react';
// import { motion } from 'framer-motion';
// import TaskItem from './TaskItem'; // A component for individual tasks

// const TaskList = ({ tasks, onComplete }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="task-list"
//         >
//             {tasks.map((task) => (
//                 <motion.div
//                     key={task.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     <TaskItem task={task} onComplete={onComplete} />
//                 </motion.div>
//             ))}
//         </motion.div>
//     );
// };

// export default TaskList;

// components/TaskList.jsx
import { AnimatePresence } from 'framer-motion';
import { AnimatedTask } from './AnimatedTask';
// import { useMood } from '../contexts/MoodContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { MoodContext } from '../context/MoodContext';


const useMood = () => useContext(MoodContext)
const TaskContainer = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.secondary};
`;

export const TaskList = ({ tasks }) => {
    const { settings } = useMood();
    console.log(tasks, "tasks");

    return (
        <TaskContainer theme={settings}>
            <AnimatePresence>
                {tasks.map(task => (
                    <AnimatedTask key={task.id} task={task} />
                ))}
            </AnimatePresence>
        </TaskContainer>
    );
};
