// import { useState } from 'react';

// const TaskForm = ({ onSubmit, initialTask }) => {
//     const [task, setTask] = useState(initialTask || { title: '', description: '', dueDate: '', status: 'pending' });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTask((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(task); // Pass task data to the parent component for saving
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" required />
//             <textarea name="description" value={task.description} onChange={handleChange} placeholder="Task Description" />
//             <input type="datetime-local" name="dueDate" value={task.dueDate} onChange={handleChange} required />
//             <select name="status" value={task.status} onChange={handleChange}>
//                 <option value="pending">Pending</option>
//                 <option value="in_progress">In Progress</option>
//                 <option value="completed">Completed</option>
//             </select>
//             <button type="submit">Save Task</button>
//         </form>
//     );
// };

// export default TaskForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';



const TaskForm = ({ onCreate }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleCreate = () => {
        if (!taskTitle || !taskDescription || !dueDate) return;

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            dueDate: new Date(dueDate),
            status: 'pending',
        };

        // Call the onCreate function passed as prop (task creation handler)
        onCreate(newTask);

        // Reset the form
        setTaskTitle('');
        setTaskDescription('');
        setDueDate('');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4"
        >
            <input
                type="text"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <Button onClick={(e) => { e.preventDefault(); handleCreate() }}>Create</Button>
        </motion.div>
    );
};

export default TaskForm;
