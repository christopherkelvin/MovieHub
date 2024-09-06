import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSingleMovie } from "~/utils/getSingleMovie";
import alternativeImage from "../assets/Images/HomeImage.jpg";
import type { Movie } from "~/data/movieTypes";
import {format} from "date-fns"

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
  const styles = {
    imageContainer: {
      borderRadius: "0% 100% 100% 0% / 0% 0% 100% 100%",
    } as React.CSSProperties,
  };
  const formattedDate = format(new Date(movie.release_date), "MMMM dd, yyyy");
  const popularity = Math.floor(parseInt(movie.popularity));
  return (
    <div className="relative">
      <img
        className="h-screen w-full blur"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : alternativeImage
        }
        alt=""
      />
      <div className="absolute top-0 h-screen bg-gradient-to-r from-black/90 to-transparent w-full grid place-content-center justify-center">
        <div className=" h-[420px] min-w-[700px] max-w-[800px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex ">
          <div>
            <img
              className="h-[420px] min-w-[500px] object-fill"
              style={styles.imageContainer}
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                  : alternativeImage
              }
              alt=""
            />
          </div>
          <div className=" flex flex-col items-end pr-5 pt-3">
            <h3 className=" font-lora text-2xl text-center">MOVIE DETAILS</h3>
            <h2 className=" text-3xl text-center mt-8 font-bebas">
              {movie.original_title}
            </h2>
            <div className="text-sm flex flex-col text-white/50 items-end">
              <p>Release Date: {formattedDate}</p>
              <p>Popularity: {popularity} %</p>
            </div>
            <p className="pt-16 text-sm -ml-20 text-right">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
