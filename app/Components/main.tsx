import type { Movie } from "../data/MovieTypes";
import alternativeImage from "../assets/Images/HomeImage.jpg";
import { FaLanguage } from "react-icons/fa";
import { Link } from "@remix-run/react";
interface MainProp {
  movies: Movie[];
}
const Main: React.FC<MainProp> = ({ movies }: MainProp) => {
  return (
    <div id="movie">
      <div className="flex justify-center my-4">
        <input
          name="Search"
          type="text"
          placeholder=" Search for movies here ..."
          className="relative h-10 w-3/4 lg:w-1/3 pl-4 font-serif placeholder:text-white bg-[#282828]/40 rounded-xl"
        />
      </div>
      <div className="flex flex-wrap gap-3 justify-center mb-6 mx-0 lg:mx-2">
        {movies.map((movie, index) => (
          <Link
            to={`Movies/${movie.id}`}
            key={index}
            className="rounded-lg bg-white/10 max-w-40 md:max-w-80 overflow-hidden "
          >
            <div className="relative h-44 overflow-hidden">
              <img
                className=" hover:scale-125 transition-all duration-500 cursor-pointer"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : alternativeImage
                }
                alt=""
              />
              <div
                className={
                  movie.spoken_languages
                    ? "absolute text-xs font-serif top-3 left-3 flex items-center gap-2 bg-[#282828]/70 py-1 px-3 rounded-xl"
                    : "hidden"
                }
              >
                <FaLanguage />
                {movie.spoken_languages}
              </div>
            </div>
            <div className="p-3">
              <h2 className=" font-serif hover:underline">{movie.title}</h2>
              <p className=" text-gray-700 text-sm">{movie.release_date}</p>
              <p className=" line-clamp-2 font-lora pt-3 text-sm">
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
