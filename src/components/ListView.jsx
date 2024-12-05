import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Button from './Button';

const ListView = ({ tasks, toggleUpdateModal, setSelectedTask, page, setPage, totalTasks }) => {


    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Due Date',
            selector: row => new Date(row?.dueDate?.startDate).toLocaleDateString()
        },
        {
            name: 'Status',
            selector: row => row.status
        },
        {
            name: 'Action',
            selector: row => row,
            cell: (row, i, column) => {
                return <Button onClick={(e) => { setSelectedTask(row); toggleUpdateModal() }}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </Button>
            }

        },
    ];
    // console.log(sortedTasks, "sortedTasks");

    return (
        <div className="w-full max-w-screen-lg mx-auto p-4">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}

                {/* <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{new Date(task.dueDate.startDate).toLocaleDateString()}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

                <DataTable columns={columns} data={tasks} pagination paginationServer onChangePage={setPage} paginationTotalRows={totalTasks} />
            {/* </div> */}
        </div>
    );
};
export default ListView;
