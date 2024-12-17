import axios from 'axios'
import { store } from '../app/store';

const baseUrl = 'https://e-commerce-api-9mnk.onrender.com/api/v1'

const axiosClient = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})


export default axiosClient;