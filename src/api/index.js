const API_BASE_URL = 'http://localhost:8000'; // Gateway URL

const fetchAPI = async (endpoint, method = 'GET', body = null, token = null) => {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return response.json();
};

// export const loginUser = (data) => fetchAPI('/users/login', 'POST', data);
// export const registerUser = (data) => fetchAPI('/users/api/register', 'POST', data);
export const fetchTasks = (token) => fetchAPI('/tasks/tasks', 'GET', null, token);
export const createTask = (data, token) => fetchAPI('/tasks/tasks', 'POST', data, token);
export const updateTask = (id, data, token) => fetchAPI(`/tasks/tasks/${id}`, 'PUT', data, token);
export const deleteTask = (id, token) => fetchAPI(`/tasks/tasks/${id}`, 'DELETE', null, token);
