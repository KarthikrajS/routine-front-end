    // components/MoodSelector.jsx
    import { motion } from 'framer-motion';
    import { useContext } from 'react';
    import styled from 'styled-components';
    import { MoodContext } from '../context/MoodContext.jsx';
    import Dropdown from './DropDown.jsx';

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
            changeMood(item);
        };
    
        const items = [
            {
                label: "Minimalist",
                icon: "🎨",
                action: () => selectMood("minimalist"),
            },
            {
                label: "Monk Mode",
                icon: "🧘",
                action: () => selectMood("monkMode"),
            },
            {
                label: "Energetic",
                icon: "⚡",
                action: () => selectMood("energetic"),
            },
        ];
    
        return (
            <div>
                <Dropdown
                    items={items}
                    buttonName=""
                    buttonIcon="🎭" // Icon for the dropdown button
                />
            </div>
        );
    };
    