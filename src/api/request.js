import axios from 'axios'

export const requests = axios.create({
    baseURL:'/api',
});

export const requestsSearch = axios.create({
    baseURL:'/search',
});