import axios from 'axios';

export const backendUrl = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});