import axios from 'axios';

const instance = axios.create({
    baseURL:'https://my-burger-app-810de.firebaseio.com/'
});

export default instance;