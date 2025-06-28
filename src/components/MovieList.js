import MovieCard from "./MovieCard";
import "../index.css";
import { Link } from "react-router-dom";
import MovieCardShimmer from "./Shimmer/MovieCardShimmer";
import MovieTitleShimmer from "./Shimmer/MovieTitleShimmer";
// import { addPlayMovies } from "../utils/moviesSlice";

const MovieList = ({ title, movies }) => {
  // const dispatch = useDispatch();
  if (!movies || movies.length === 0) {
    return (
      <div>
        <MovieTitleShimmer/>
        <div className="flex flex-nowrap overflow-x-scroll hide-scrollbar w-full scroll-smooth">
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
          <MovieCardShimmer />
        </div>
      </div>
    ); 
  }

  return (
    <div className="mx-1 md:mx-3 my-0 text-white relative z-30 scroll-smooth">
      <h1 className="mx-3 text-2xl my-0 md:my-2 md:mx-4 md:text-3xl">
        {title}
      </h1>
      <div className="flex overflow-x-scroll hide-scrollbar scroll-smooth">
        <div className="flex justify-between">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/play/${movie.id}`}>
              <MovieCard posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
