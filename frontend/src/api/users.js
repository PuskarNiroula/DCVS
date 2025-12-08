import axios from 'axios';
import {API_URL,secureApiFetch} from './api.js';

export const getUsers=async (pageNumber)=>{
  return await secureApiFetch(`${API_URL}/all-users?page=${pageNumber}`);
};