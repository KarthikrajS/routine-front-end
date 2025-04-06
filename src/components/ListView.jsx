

import { useState, useContext } from 'react';
import DataTable from 'react-data-table-component';
import Button from './Button';
import { MoodContext } from '../context/MoodContext';
import { useTheme } from '../context/ThemeContext';
// import { useTheme } from './ThemeContext'; // Assuming useTheme is from ThemeContext
// import { MoodContext } from './MoodContext'; // Assuming MoodContext is available

const ListView = ({ tasks, toggleUpdateModal, toggleDeleteModal, setSelectedTask, page, setPage, totalTasks, NoDataConst }) => {
    const { isDark } = useTheme(); // Using ThemeContext for dark mode
    const { mood, settings } = useContext(MoodContext); // Get current mood

    // Determine the appropriate styles based on the current theme and mood
    const currentMood = mood || 'minimalist'; // Fallback to 'minimalist' if mood is not set

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            cell: (row) => (
                <div className={`flex items-center ${isDark === 'dark' ? 'text-white' : 'text-black'}`}>
                    <span>{row.title}</span>
                    {row?.ai_suggestion === true && (
                        <span className="ml-2 text-green-500">✅</span>
                    )}
                    {row?.ai_suggestion === false && (
                        <span className="ml-2 text-red-500">❌</span>
                    )}
                </div>
            )
        },
        {
            name: 'Description',
            selector: row => row.description,
            cell: (row) => (
                <div className={`text-sm ${currentMood === 'energetic' ? 'text-yellow-500' : 'text-gray-600'}`}>
                    {row.description}
                </div>
            )
        },
        {
            name: 'Due Date',
            selector: row => new Date(row?.dueDate?.startDate).toLocaleDateString(),
            cell: (row) => (
                <div className={`text-sm ${isDark !== 'dark' ? 'text-gray-800' : 'text-gray-400'}`}>
                    {new Date(row?.dueDate?.startDate).toDateString()}
                </div>
            )
        },
        {
            name: 'Status',
            selector: row => row.status,
            cell: (row) => {
                let statusIcon;
                let statusColor;
                switch (row.status) {
                    case 'completed':
                        statusIcon = '✅';
                        statusColor = 'bg-green-300';
                        break;
                    case 'pending':
                        statusIcon = '⏳';
                        statusColor = 'bg-yellow-300';
                        break;
                    case 'deferred':
                        statusIcon = '⛔️';
                        statusColor = 'bg-orange-300';
                        break;
                    default:
                        statusIcon = '🔒';
                        statusColor = 'bg-blue-300';
                        break;
                }
                return (
                    <span className={`px-3 py-1 text-gray-700 text-xs font-semibold rounded-full ${statusColor}`}>
                        {statusIcon}{row.status}
                    </span>
                );
            }
        },
        {
            name: 'Priority',
            selector: row => row.priority,
            cell: (row) => {
                let priorityIcon;
                let priorityColor;
                switch (row.priority) {
                    case 1:
                        priorityIcon = '🌟';
                        priorityColor = 'bg-teal-300';
                        break;
                    case 0.5:
                        priorityIcon = '⚡';
                        priorityColor = 'bg-yellow-300';
                        break;
                    default:
                        priorityIcon = '🧘';
                        priorityColor = 'bg-green-300';
                        break;
                }
                return (
                    <span className={`px-3 py-1 text-gray-700 text-xs font-semibold rounded-full ${priorityColor}`}>
                        {priorityIcon} {row.priority === 1 ? 'High' : row.priority === 0.5 ? 'Medium' : 'Low'}
                    </span>
                );
            }
        },
        {
            name: 'Task Type',
            selector: row => row.taskType,
            cell: (row) => <div className={`text-sm ${currentMood === 'energetic' ? 'text-yellow-500' : 'text-gray-600'}`}>{row.taskType}</div>
        },
        {
            name: 'Action',
            selector: row => row,
            cell: (row) => {
                return (
                    <div className="flex gap-4 items-center">
                        <Button
                            color="bg-gradient-to-r from-lime-300 to-yellow-300"
                            onClick={() => { console.log(row, "row");; setSelectedTask(row); toggleUpdateModal() }}
                            className={`text-teal-600 hover:text-teal-800 ${currentMood === 'energetic' ? 'bg-yellow-400' : ''}`}
                        >
                            ✏️ <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                            color="bg-red-300"
                            onClick={() => { setSelectedTask(row); toggleDeleteModal() }}
                            className="text-teal-600 hover:text-teal-800"
                        >
                            🗑️ <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                );
            }
        },
    ];
    
    return (
        <div className="w-full max-w-screen-lg mx-auto p-4">
            <DataTable
                noDataComponent={NoDataConst}
                columns={columns}
                data={tasks}
                pagination
                paginationServer
                onChangePage={setPage}
                paginationTotalRows={totalTasks}
            />
        </div>
    );
};

export default ListView;

