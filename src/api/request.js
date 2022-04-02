import axios from 'axios'

const requests = axios.create({
    baseURL:'/api',
});

export default requests;