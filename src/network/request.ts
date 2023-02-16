import axios from "axios";

const request = axios.create({
    baseURL:'https://163-misic-api.vercel.app/',
    timeout: 30000
});

export default request