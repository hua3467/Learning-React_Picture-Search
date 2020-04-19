import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2RjVvS4nExBqnoHHH37ABotP5pWydaGU7xd0drESbgw'
    }
});