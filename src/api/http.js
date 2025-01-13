import axios from "axios";

export const http = axios.create({
    baseURL: 'https://api.mercadolibre.com/',
    timeout: 10000,
})