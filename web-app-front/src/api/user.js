import axios from 'axios'

export const createUser = (data) => {
    return axios.post('/api/user', data)
}