// API reference: https://rapidapi.com/forlucas27/api/random-recipes
import axios from "axios";
export const instance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });