import axios from 'axios'

const requests = axios.create({
    baseURL:'/api',
    timeout:5000,
});

export default requests;