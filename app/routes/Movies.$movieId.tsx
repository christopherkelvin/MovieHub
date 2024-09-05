import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSingleMovie } from "~/utils/getSingleMovie";
import alternativeImage from "../assets/Images/HomeImage.jpg";
import type { Movie } from "~/data/movieTypes";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const movieId = params.movieId;

  if (movieId !== undefined) {
    const movie = getSingleMovie(parseInt(movieId, 10));
    return movie;
  } else {
    throw new Error("Movie ID is missing");
  }
};
const Movie = () => {
  const movie: Movie = useLoaderData<typeof movie>();
  return (
    <div className="relative">
      <img
        className="h-screen w-full"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : alternativeImage
        }
        alt=""
      />
      <div className="absolute top-0 h-screen bg-gradient-to-r from-black/90 to-transparent w-full">
        <div className="m-20">
          <h2 className="text-4xl uppercase font-serif">
            {movie.original_title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Movie;
