import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-react-b0a50-default-rtdb.firebaseio.com/'
});

export default instance;