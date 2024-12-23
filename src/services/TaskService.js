// TaskService.js - Frontend Service to Handle CRUD Operations
import axios from 'axios';

const API_URL = 'https://gateway-rbze.onrender.com/api/tasks';

export const createTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL, taskData);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
    }
};

export const updateTask = async (taskId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/${taskId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
    }
};

export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${API_URL}/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};
