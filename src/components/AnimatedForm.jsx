// components/TaskForm.jsx
import { motion } from 'framer-motion';
// import { useMood } from '../contexts/MoodContext';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MoodContext } from '../context/MoodContext';
import Button from './Button';
import Datepicker from "react-tailwindcss-datepicker";


const useMood = () => useContext(MoodContext);
const Form = styled(motion.form)`
  background-color: ${props => props.theme.primary};
  padding: 1rem;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid ${props => props.theme.accent};
  border-radius: 4px;
`;

export const TaskForm = ({ onSubmit }) => {
    const { settings } = useMood();

    const [title, setTile] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPrioriry] = useState("1.0");
    const [dueDate, setDueDate] = useState({
        startDate: null,
        endDate: null
    });
    return (
        <Form
            theme={settings}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // onSubmit={(e) => { e.preventDefault(); onSubmit({ title, description, priority, dueDate }) }}
        >
            <Input type="text" placeholder="Task title" onChange={e => setTile(e.target.value)} theme={settings} />
            <Input type="text" placeholder="Description" theme={settings} onChange={e => setDescription(e.target.value)} />
            <div className='flex  flex-col gap-2 p-2 align-middle items-start justify-center'>
                <label>Priority:</label>
                <select onSelect={(e) => setPrioriry(e.target.value)}>
                    <option value="1.0">High Priority</option>
                    <option value="0.5">Medium Priority</option>
                    <option value="0.25">Low Priority</option>
                </select>
            </div>
            <div className='flex  flex-col gap-2 p-2 align-middle items-start justify-center'>
                <label>Planned Date:</label>
                <Datepicker
                    value={dueDate}
                    onChange={newValue => setDueDate(newValue)}
                    showShortcuts={true}
                />
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
            >
                <Button onClick={(e) => { e.preventDefault(); onSubmit({ title, description, priority, dueDate }) }}> Create Task</Button>
            </motion.button>
        </Form>
    );
};