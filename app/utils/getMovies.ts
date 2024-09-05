import { json } from "@remix-run/react";
import { movieData } from "../api/data";
export const getMovie = (query: string) => {
  const data = movieData;

  if (!query) {
    return json(data); // Return all data if no query
  }

  const filtered = data.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return json(filtered);
};
