// components/MoodSelector.jsx
import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { MoodContext } from '../context/MoodContext';
import Dropdown from './DropDown';

const useMood = () => useContext(MoodContext);
const MoodButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.isActive ? props.theme.accent : props.theme.secondary};
  color: ${props => props.theme.text};
`;

export const MoodSelector = () => {
    const { mood, changeMood, settings } = useMood();
    const selectMood = (item) => {
        changeMood(item)
    }
    const items = [
        {
            label: "minimalist",
            action: () => selectMood("minimalist"), // Pass the function as an action
        },
        {
            label: "monkMode",
            action: () => selectMood("monkMode"),
        },
        {
            label: "energetic",
            action: () => selectMood("energetic"),
        },
    ];
    return (
        <div>
            <Dropdown items={items} buttonName="Select Mood" />
        </div>
    );
};