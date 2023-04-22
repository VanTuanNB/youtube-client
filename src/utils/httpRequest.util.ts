import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: { Accept: 'application/json, text/plain, /","Content-Type": "multipart/form-data' },
});

export const get = async (
    path: string,
    options = {
        method: 'GET',
    },
) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
