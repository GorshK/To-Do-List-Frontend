import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.authorization = token;
  return req;
});

export const register = (userData) => API.post('/auth/register', userData);
export const login = (data) => API.post('/users/login', data);
export const getTasks = () => API.get('/tasks');
export const addTask = (data) => API.post('/tasks', data);
