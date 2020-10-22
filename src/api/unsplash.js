import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vNylDEy03Bz6NbhIeAW6AunBKva31JTutKEWIWTJBcI'
    }
});