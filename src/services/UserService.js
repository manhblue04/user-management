import axios from 'axios';  

const fetchAllUser = () => {
    return axios.get('https://dummyjson.com/users');

};

export { fetchAllUser };