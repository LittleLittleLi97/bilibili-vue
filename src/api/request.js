import axios from 'axios'

const requests = axios.create({
    timeout: 5000,
});

export default requests;