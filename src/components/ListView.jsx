import { useState } from 'react';
import DataTable from 'react-data-table-component';

const ListView = ({ tasks }) => {
    const [sortKey, setSortKey] = useState('dueDate');

    const sortedTasks = [...[...tasks].sort((a, b) => {
        if (sortKey === 'priority') return b.priority - a.priority;
        if (sortKey === 'status') return a.status.localeCompare(b.status);
        return new Date(a.dueDate.startDate) - new Date(b.dueDate.startDate);
    })];

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

        },
    ];
    console.log(sortedTasks, "sortedTasks");

    return (
        <div>

            <select onChange={(e) => setSortKey(e.target.value)} className="mb-4">
                <option value="dueDate">Due Date</option>
                <option value="priority">Priority</option>
                <option value="status">Status</option>
            </select>
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

            <DataTable columns={columns} data={sortedTasks} />
        </div>
    );
};
export default ListView;
