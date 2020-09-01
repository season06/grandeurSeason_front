import axios from 'axios';

const tagRequest = axios.create({
    baseURL: 'https://api/user/'
});

const imageRequest = axios.create({
    baseURL: 'https://api/user/'
});

export const api_tag = data => tagRequest.get('/tag', data);
export const api_image = data => imageRequest.get('/image', data);
