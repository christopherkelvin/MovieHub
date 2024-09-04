import { movieData } from "../api/data";
export const getMovie = ( movieId :number) => {
    return movieData.find((movie) => movie.id === Number(movieId));
}