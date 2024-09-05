import type { Movie } from "../data/movieTypes";
import alternativeImage from "../assets/Images/HomeImage.jpg";
import { FaLanguage } from "react-icons/fa";
import { useFetcher, Link } from "@remix-run/react";

interface MainProp {
  movies: Movie[];
}

const Main: React.FC<MainProp> = ({ movies }: MainProp) => {
  const fetcher = useFetcher();

  // Use fetcher.data if fetcher is loading or has data, otherwise use movies from props
  const displayedMovies = fetcher.data || movies;

  return (
    <div id="movie">
      <div>
        <fetcher.Form
          className="flex justify-center my-4"
          method="get"
          onChange={(event) => {
            fetcher.submit(event.currentTarget);
          }}
          role="search"
        >
          <input
            name="Search"
            type="text"
            placeholder=" Search for movies here ..."
            className="relative h-10 w-3/4 lg:w-1/3 pl-4 font-serif placeholder:text-white bg-[#282828]/40 rounded-xl"
          />
        </fetcher.Form>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-6 mx-0 lg:mx-2">
        {displayedMovies.map((movie:Movie, index:number) => (
          <Link
            to={`Movies/${movie.id}`}
            key={index}
            className="rounded-lg bg-white/10 max-w-40 md:max-w-80 overflow-hidden"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                className="hover:scale-125 transition-all duration-500 cursor-pointer"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : alternativeImage
                }
                alt={movie.title}
              />
              {movie.spoken_languages && (
                <div className="absolute text-xs font-serif top-3 left-3 flex items-center gap-2 bg-[#282828]/70 py-1 px-3 rounded-xl">
                  <FaLanguage />
                  {movie.spoken_languages}
                </div>
              )}
            </div>
            <div className="p-3">
              <h2 className="font-serif hover:underline">{movie.title}</h2>
              <p className=" text-sm">{movie.release_date}</p>
              <p className="line-clamp-2 font-lora pt-3 text-sm">
                {movie.overview}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
