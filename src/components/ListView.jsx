// import { useState } from 'react';
// import DataTable from 'react-data-table-component';
// import Button from './Button';

// const ListView = ({ tasks, toggleUpdateModal, toggleDeleteModal, setSelectedTask, page, setPage, totalTasks }) => {


//     // const columns = [
//     //     {
//     //         name: 'Title',
//     //         selector: row => row.title,
//     //     },
//     //     {
//     //         name: 'Description',
//     //         selector: row => row.description,
//     //     },
//     //     {
//     //         name: 'Due Date',
//     //         selector: row => row?.dueDate?.startDate,
//     //         cell: (row) => <div className="text-sm text-gray-600 w-[225px]">{new Date(row?.dueDate?.startDate).toDateString()}</div>
//     //     },
//     //     {
//     //         name: 'Status',
//     //         selector: row => row.status,
//     //         cell: (row) => {
//     //             const statusColor = row.status === 'completed' ? 'bg-green-500' : row.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500';
//     //             return (
//     //                 <span className={`px-2 py-1 text-white text-xs font-semibold rounded-full justify-center  ${statusColor}`}>
//     //                     {row.status}
//     //                 </span>
//     //             );
//     //         }
//     //     },
//     //     {
//     //         name: 'Priority',
//     //         selector: row => row.priority,
//     //     },
//     //     { name: "Task Type", selector: row => row.taskType },
//     //     {
//     //         name: 'Action',
//     //         selector: row => row,
//     //         cell: (row, i, column) => {
//     //             return <div className='flex gap-3'>
//     //                 <Button onClick={(e) => { setSelectedTask(row); toggleUpdateModal() }}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
//     //                     <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//     //                 </svg>
//     //                 </Button>
//     //                 <Button color='danger' onClick={(e) => { setSelectedTask(row); toggleDeleteModal() }}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
//     //                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//     //                 </svg>

//     //                 </Button></div>
//     //         }

//     //     },
//     // ];
//     // console.log(sortedTasks, "sortedTasks");

//     // import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

//     const columns = [
//         {
//             name: 'Title',
//             selector: row => row.title,
//             cell: (row) => (
//                 <div className="flex items-center">
//                     <span>{row.title}</span>
//                     {row?.ai_suggestion === true && (
//                         <span className="ml-2 text-green-500">✅</span>
//                     )}
//                     {row?.ai_suggestion === false && (
//                         <span className="ml-2 text-red-500">❌</span>
//                     )}
//                 </div>
//             )

//         },

//         {
//             name: 'Description',
//             selector: row => row.description,
//             cell: (row) => <div className="text-sm text-gray-600">{row.description}</div>
//         },
//         {
//             name: 'Due Date',
//             selector: row => new Date(row?.dueDate?.startDate).toLocaleDateString(),
//             cell: (row) => <div className="text-sm text-gray-500">{new Date(row?.dueDate?.startDate).toDateString()}</div>
//         },
//         {
//             name: 'Status',
//             selector: row => row.status,
//             cell: (row) => {
//                 let statusIcon;
//                 let statusColor;
//                 switch (row.status) {
//                     case 'completed':
//                         statusIcon = '✅';
//                         statusColor = 'bg-green-300';
//                         break;
//                     case 'pending':
//                         statusIcon = '⏳';
//                         statusColor = 'bg-yellow-300';
//                         break;
//                     case 'deferred':
//                         statusIcon = '⛔️';
//                         statusColor = 'bg-orange-300';
//                         break;
//                     default:
//                         statusIcon = '🔒';
//                         statusColor = 'bg-blue-300';
//                         break;
//                 }
//                 return (
//                     <span className={`px-3 py-1 text-gray-700 text-xs font-semibold rounded-full ${statusColor}`}>
//                         {statusIcon}{row.status}
//                     </span>
//                 );
//             }
//         },
//         {
//             name: 'Priority',
//             selector: row => row.priority,
//             cell: (row) => {
//                 let priorityIcon;
//                 let priorityColor;
//                 switch (row.priority) {
//                     case 1:
//                         priorityIcon = '🌟';
//                         priorityColor = 'bg-teal-300';
//                         break;
//                     case 0.5:
//                         priorityIcon = '⚡';
//                         priorityColor = 'bg-yellow-300';
//                         break;
//                     default:
//                         priorityIcon = '🧘';
//                         priorityColor = 'bg-green-300';
//                         break;
//                 }
//                 return (
//                     <span className={`px-3 py-1 text-gray-700 text-xs font-semibold rounded-full ${priorityColor}`}>
//                         {priorityIcon} {row.priority === 1 ? 'High' : row.priority === 0.5 ? 'Medium' : 'Low'}
//                     </span>
//                 );
//             }
//         },
//         {
//             name: 'Task Type',
//             selector: row => row.taskType,
//             cell: (row) => <div className="text-sm text-gray-600">{row.taskType}</div>
//         },
//         {
//             name: 'Action',
//             selector: row => row,
//             cell: (row, i, column) => {
//                 return (
//                     <div className="flex gap-4 items-center">
//                         <Button color="bg-gradient-to-r from-lime-300 to-yellow-300" onClick={() => { setSelectedTask(row); toggleUpdateModal() }} className="text-teal-600 hover:text-teal-800">
//                             ✏️ <span className="sr-only">Edit</span>
//                         </Button>
//                         <Button color="bg-red-300" onClick={() => { setSelectedTask(row); toggleDeleteModal() }} className="text-teal-600 hover:text-teal-800">
//                             🗑️ <span className="sr-only">Delete</span>
//                         </Button>
//                     </div>
//                 );
//             }
//         },
//     ];

//     return (
//         <div className="w-full max-w-screen-lg mx-auto p-4">
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}

//             {/* <table className="table-auto w-full">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Due Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sortedTasks.map((task) => (
//                         <tr key={task._id}>
//                             <td>{task.title}</td>
//                             <td>{task.description}</td>
//                             <td>{new Date(task.dueDate.startDate).toLocaleDateString()}</td>
//                             <td>{task.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table> */}

//             <DataTable columns={columns} data={tasks} pagination paginationServer onChangePage={setPage} paginationTotalRows={totalTasks} />
//             {/* </div> */}
//         </div>
//     );
// };
// export default ListView;

import { useState, useContext } from 'react';
import DataTable from 'react-data-table-component';
import Button from './Button';
import { MoodContext } from '../context/MoodContext';
import { useTheme } from '../context/ThemeContext';
// import { useTheme } from './ThemeContext'; // Assuming useTheme is from ThemeContext
// import { MoodContext } from './MoodContext'; // Assuming MoodContext is available

const ListView = ({ tasks, toggleUpdateModal, toggleDeleteModal, setSelectedTask, page, setPage, totalTasks }) => {
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
                            onClick={() => { console.log(row,"row");;setSelectedTask(row); toggleUpdateModal() }}
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

