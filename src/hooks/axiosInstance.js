import axios from "axios";
console.log(import.meta.env.REACT_APP_API_URL, "import.meta.env.REACT_APP_API_URL ");

const axiosInstance = axios.create({
    // baseURL: "http://localhost:8000" ,
    baseURL: "https://gateway-rbze.onrender.com", // Default to localhost
    headers: {
        "Content-Type": "application/json",
    },
});
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
