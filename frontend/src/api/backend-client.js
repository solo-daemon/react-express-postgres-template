const axios = require('axios');
const { baseUrl } = require('../config')
const backendClient = axios.create({
    baseURL: baseUrl ,
    timeout: 1000 ,
    headers: {

    }
});

export default backendClient