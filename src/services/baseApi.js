import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:3000/e-commerce/api', 
});

export default baseApi;
 