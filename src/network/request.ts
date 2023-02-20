import axios from "axios";

const instance = axios.create({
    baseURL:'https://163-misic-api.vercel.app/',
    timeout: 30000
});

// 错误处理

instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    }
);

export default instance