import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { MoodContext } from '../context/MoodContext';
import Button from './Button';
import Datepicker from "react-tailwindcss-datepicker";
import WeekdayPicker from './WeekdayPicker';

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

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TaskForm = ({ selectedDays, setSelectedDays, weeks, setWeeks, onSubmit }) => {
    const { settings } = useMood();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(1.0);
    const [taskType, setTaskType] = useState("--Select--");
    const [dueDate, setDueDate] = useState({
        startDate: null,
        endDate: null
    });

    const [isRoutine, setIsRoutine] = useState(false);


    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const handleDaySelection = (day) => {
        setSelectedDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    return (
        <Form
            theme={settings}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <Input type="text" placeholder="Task title" onChange={e => setTitle(e.target.value)} theme={settings} />
            <Input type="text" placeholder="Description" theme={settings} onChange={e => setDescription(e.target.value)} />

            <div className='flex flex-col gap-2 p-2 align-middle items-start justify-center'>
                <label>Priority:</label>
                <select onChange={(e) => { setPriority(e.target.value) }}>
                    <option value={1.0}>High Priority</option>
                    <option value={0.5}>Medium Priority</option>
                    <option value={0.25}>Low Priority</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 p-2 align-middle items-start justify-center'>
                <label>Task Type:</label>
                <select value={taskType} onChange={(e) => { setTaskType(e.target.value) }}>
                    <option value="--Select--">--Select--</option>
                    <option value="Personal care">Personal care</option>
                    <option value="Meals">Meals</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Household chores">Household chores</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Exercise">Exercise</option>
                    <option value="Work">Work</option>
                    <option value="Social">Social</option>
                    <option value="Incidental">Incidental</option>
                    <option value="Coordinated">Coordinated</option>
                    <option value="Planned">Planned</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 p-2 align-middle items-start justify-center'>
                <label>Planned Date:</label>
                <Datepicker
                    value={dueDate}
                    onChange={newValue => setDueDate(newValue)}
                    showShortcuts={true}
                />
            </div>

            <div className='flex flex-col gap-2 p-2 align-middle items-start justify-center'>
                <Checkbox
                    type="checkbox"
                    checked={isRoutine}
                    onChange={() => setIsRoutine(!isRoutine)}
                />
                <label>Set as a routine</label>
            </div>

            {isRoutine && (
                <div className='flex flex-col gap-2 p-2 align-middle items-start justify-center'>
                    <div className="mb-4 w-[285px]">
                        <label className="block  text-gray-700 font-bold mb-2">Select Days</label>
                        <WeekdayPicker onChange={setSelectedDays} />
                    </div>
                    <label>
                        Repeat for weeks:
                        <Input
                            type="number"
                            min="1"
                            value={weeks}
                            onChange={(e) => setWeeks(Number(e.target.value))}
                        />
                    </label>
                </div>
            )}

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
            >
                <Button
                    color="bg-[#f5f5f5]"
                    onClick={(e) => {
                        e.preventDefault();
                        if (taskType === "--Select--") {
                            alert("Select task type");
                        } else {
                            onSubmit({
                                title,
                                description,
                                priority,
                                dueDate,
                                taskType,
                                isRoutine,
                                selectedDays: isRoutine ? selectedDays : null,
                                weeks: isRoutine ? weeks : null,
                            });
                        }
                    }}
                >
                    Create Task
                </Button>
            </motion.button>
        </Form>
    );
};

export default TaskForm