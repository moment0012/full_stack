import axios from "axios";

export const getHello = async () => {
    return axios.get('/api/hello/123')
};