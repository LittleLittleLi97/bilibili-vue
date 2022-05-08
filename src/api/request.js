import axios from 'axios'

axios.defaults.withCredentials = true;

export const requests = axios.create({
    baseURL:'/api',
});

export const requestsSearch = axios.create({
    baseURL:'/search',
});

// 用于登录
export const requestsLogin = axios.create({
    baseURL:'/login',
});

// nodejs
export const requestsNodejs = axios.create({
    baseURL:'/nodejs',
})