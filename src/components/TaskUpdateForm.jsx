import React, { useState } from "react";
import Button from "./Button";

import dayjs from "dayjs";

const TaskUpdateModal = ({ task, isOpen, onClose, onUpdate }) => {
    console.log(task, "taskwadssd");
    const [actualTask, setActualTask] = useState(task);
    const [status, setStatus] = useState(task?.status || "");
    const [actualStart, setActualStart] = useState((task?.actualStartAt?.date && dayjs(task?.actualStartAt?.date).format("YYYY-MM-DD")) || "");
    const [actualEnd, setActualEnd] = useState((task?.completedAt?.date && dayjs(task?.completedAt?.date).format("YYYY-MM-DD")) || "");

    const handleSubmit = () => {
        const updatedTask = {
            ...actualTask,
            status,
            actualStartAt: { date: new Date(actualStart) },
            completedAt: { date: new Date(actualEnd) },
        };
        console.log(updatedTask, "updatedTask");
        onUpdate(actualTask?._id, updatedTask);
        onClose();
    };

    if (!isOpen) return null;


    return (

        <div className="bg-white p-6 rounded shadow-lg sm:w-96">
            <h2 className="text-lg font-semibold mb-4">Update Task</h2>
            <div className="mb-4">
                <label className="block mb-1 font-medium">{actualTask?.title}</label>

            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Planned Start Date</label>
                <input
                    type="date"
                    value={dayjs(actualTask?.dueDate?.startDate).format("YYYY-MM-DD")}
                    onChange={(e) => setActualTask({
                        ...task, // Copy the old fields
                        dueDate: { ...task.dueDate, startDate: e.target.value } // But override this one
                    })}
                    className="w-full border rounded p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Planned End Date</label>
                <input
                    type="date"
                    value={dayjs(actualTask?.dueDate?.endDate).format("YYYY-MM-DD")}
                    onChange={(e) => setActualTask({
                        ...task, // Copy the old fields
                        dueDate: { ...task.dueDate, endDate: e.target.value } // But override this one
                    })}
                    className="w-full border rounded p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Actual Start Date</label>
                <input
                    type="date"
                    value={actualStart}
                    onChange={(e) => setActualStart(e.target.value)}
                    className="w-full border rounded p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Actual End Date</label>
                <input
                    type="date"
                    value={actualEnd}
                    onChange={(e) => setActualEnd(e.target.value)}
                    className="w-full border rounded p-2"
                />
            </div>
            <div className="flex justify-end">
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    onClick={onClose}
                >
                    Cancel
                </button>
                <Button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleSubmit}
                >
                    Update Task
                </Button>

            </div>

        </div>
    );
};

export default TaskUpdateModal;
