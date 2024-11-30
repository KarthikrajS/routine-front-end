import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
// import { Button } from 'magic-ui';

const TaskItem = ({ task, onComplete }) => {
    return (
        <motion.div
            className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
            layout
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <small>{new Date(task.dueDate).toLocaleDateString()}</small>

            <Button onClick={() => onComplete(task.id)}>
                Mark as {task.status === 'completed' ? 'Incomplete' : 'Completed'}
            </Button>
        </motion.div>
    );
};

export default TaskItem;
