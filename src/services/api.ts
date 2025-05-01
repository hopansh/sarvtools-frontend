// services/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.sarvtools.in/v1', // Replace with actual backend
  timeout: 10000,
});

// Add interceptors for auth/errors if needed
api.interceptors.response.use(
  (response) => response,
  (error) => {
    alert('API Error: ' + error.message);
    return Promise.reject(error);
  }
);