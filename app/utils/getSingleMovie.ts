import { movieData } from "../api/data";
export const getSingleMovie = (movieId: number) => {
    console.log(movieData);
    return movieData.find((movie) => movie.id === Number(movieId));
}