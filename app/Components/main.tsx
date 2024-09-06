import type { Movie } from "../data/movieTypes";
import alternativeImage from "../assets/Images/HomeImage.jpg";
import { FaLanguage } from "react-icons/fa";
import { useFetcher, Link } from "@remix-run/react";
// import format from "date-fns"
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
            className="relative h-10 w-3/4 lg:w-1/3 pl-4 font-serif placeholder:text-white bg-[#282828]/60 rounded-xl"
          />
        </fetcher.Form>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-6 mx-0 lg:mx-2">
        {displayedMovies.map((movie: Movie, index: number) => (
          <>
            <Link
              to={`movies/${movie.id}`}
              className="w-full max-w-xs bg-gray-800 rounded-lg shadow-lg shadow-gray-700"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h1 className="text-xl font-bold  mb-2 hover:underline">
                  {movie.original_title}
                </h1>
                {/* <p>{format(new Date(movie.release_date), "MMMM dd, yyyy")}</p> */}
                <p className="text-sm mb-2 line-clamp-2">{movie.overview}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
