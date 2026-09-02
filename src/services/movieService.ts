import axios from "axios";
import type { Movie } from "../types/movie";

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchMovies = async (query: string): Promise<TMDBResponse> => {
  const response = await moviesApi.get<TMDBResponse>("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return response.data;
};
