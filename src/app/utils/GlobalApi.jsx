import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
})

const getCategory = () => axiosClient.get('/category');

export default{
    getCategory,
}