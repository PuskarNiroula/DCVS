import axios from 'axios';
import {API_URL} from './api.js';

//registering form
export const registerUser=async (userData)=>{
    return await axios.post(`${API_URL}/register`,userData);
};
export const loginUser=async (userData)=>{
    return await axios.post(`${API_URL}/login`,userData);
};
export const setToken=(token)=>{
    localStorage.setItem('jwtToken',token);
};
export const getToken=()=>{
    return localStorage.getItem('jwtToken');
}
export const removeToken=()=>{
    localStorage.removeItem('jwtToken');
}