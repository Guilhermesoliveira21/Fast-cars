import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://webcars.potencialweb.com/',
    timeout: 10000,
})