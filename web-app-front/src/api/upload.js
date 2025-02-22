import axios from "axios";

export const uploadFile = (file) => {
    return axios.post('/api/upload/upload-single-file', file, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};
