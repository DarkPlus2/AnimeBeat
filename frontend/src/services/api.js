import axios from "axios";

// For production, point to Render backend
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getAnimeList = (page=1) => axios.get(`${API_URL}/anime?page=${page}`);
export const getAnimeDetail = (id) => axios.get(`${API_URL}/anime/${id}`);
export const getWatchlist = (email) => axios.get(`${API_URL}/watchlist/${email}`);
export const addToWatchlist = (email, animeId) => axios.post(`${API_URL}/watchlist/add`, { email, animeId });
