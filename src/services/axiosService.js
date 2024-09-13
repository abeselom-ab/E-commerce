import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/e-commerce', 
});

export default axiosInstance;