import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getRecipeById = (id: number)=> {
    return axios.get(`${API_URL}/get?rId=${id}`);
}

export const getRecipeByQuery = (q: string)=> {
    return axios.get(`${API_URL}/search?q=${q}`);
}