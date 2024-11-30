import { useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

const MoodToggle = () => {
    const { changeMood } = useContext(MoodContext);

    return (
        <div>
            <button onClick={() => changeMood('minimalist')}>Minimalist</button>
            <button onClick={() => changeMood('monkMode')}>Monk Mode</button>
            <button onClick={() => changeMood('energetic')}>Energetic</button>
        </div>
    );
};

export default MoodToggle;
