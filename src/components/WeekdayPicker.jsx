import { useState } from "react";

const WeekdayPicker = ({ onChange }) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [selectedDays, setSelectedDays] = useState([]);

    const toggleDay = (e, day) => {
        e.preventDefault();
        const updatedDays = selectedDays.includes(day)
            ? selectedDays.filter((d) => d !== day)
            : [...selectedDays, day];
        setSelectedDays(updatedDays);
        onChange(updatedDays); // Notify parent of changes
    };

    return (
        <div className="flex justify-center space-x-2 bg-blue-500 p-4 rounded-lg">
            {weekdays.map((day) => (
                <button
                    key={day}
                    className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white ${selectedDays.includes(day) ? "bg-white text-blue-500" : "bg-blue-500"
                        }`}
                    onClick={(e) => toggleDay(e, day)}
                >
                    {day}
                </button>
            ))}
        </div>
    );
};

export default WeekdayPicker;
