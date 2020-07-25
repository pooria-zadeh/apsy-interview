import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosInstance.interceptors.request.use((request) => {
  
  return request;
});

export default function getInstance() {
  return axiosInstance;
}
