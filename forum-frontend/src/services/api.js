import axios from "axios";

// Replace with yourg  SprinBoot backend's actual URL
const API_BASE_URL =  "http://localhost:8080/api"; // Example: http://localhost:8080/api

const api = axios.create({
    baseURL: API_BASE_URL,
});

export default api;
