// Function to filter recent tasks
export const getRecentTasks = (tasks, limit = 5) => {
    return tasks
        .filter(task => new Date(task.dueDate.endDate) < new Date())
        .slice(0, limit);
};

// Function to calculate completed and pending tasks
export const getTaskStats = (tasks) => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;
    return { completedTasks, pendingTasks };
};

// Function to generate weekly activity data
export const getWeeklyActivityData = (tasks) => {
    return tasks.reduce((acc, task) => {
        const date = new Date(task.createdAt);
        const week = date.toLocaleDateString("en-US", { weekday: "short" });
        acc[week] = (acc[week] || 0) + 1;
        return acc;
    }, {});
};
