import { useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import PlayMoviesHeader from "./PlayMoviesHeader";
import MovieList from "./MovieList";
import useFindPlayMovies from "../hooks/useFindPlayMovies";
import useSimilarMovies from "../hooks/useSimilarMovies";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
import MovieCardShimmer from "./Shimmer/MovieCardShimmer";

const PlayMovies = () => {
  const { Id: movieId } = useParams();
  // console.log("movie id ==== " ,movieId);

  const movie = useSelector((state) => state.movies.playMovies);
  const recommendations = useSelector(
    (state) => state.movies.recommendedMovies
  );
  const similar = useSelector((state) => state.movies.similarMovies);
  useFindPlayMovies(movieId);
  useRecommendedMovies(movieId);
  useSimilarMovies(movieId);

  if (!movie) {
    return <p></p>;
  }

  return (
    <div className="mb-7">
      <PlayMoviesHeader />
      <VideoBackground movieId={movieId} controls={1} />
      <div className="text-white font-semibold text-xl ml-3 md:text-2xl md:ml-7 mt-5">
        <span className="font-normal">Movie :</span> {movie.title}
      </div>
      <div className="text-white text-sm m-3 md:text-xl md:m-7">
        <span className="text-sm font-semibold md:text-2xl mb-2 md:mb-4 block">overview :</span>
        {movie.overview}
      </div>
      <div className=" text-white m-3 text-sm md:text-base lg:text-lg md:ml-7 space-y-2 mb-4 hide-scrollbar">
        <div>
          <span className="font-semibold">Genres:</span>{" "}
          <span>{movie.genres?.map((genre) => genre.name).join(", ")}</span>
        </div>

        <div>
          <span className="font-semibold">Spoken Languages:</span>{" "}
          <span>
            {movie.spoken_languages
              ?.map((lang) => lang.english_name)
              .join(", ")}
          </span>
        </div>

        <div>
          <span className="font-semibold">Original Language:</span>{" "}
          <span className="uppercase">{movie.original_language}</span>
        </div>

        <div>
          <span className="font-semibold">Original Title:</span>{" "}
          <span>{movie.original_title}</span>
        </div>

        <div>
          <span className="font-semibold">Origin Country:</span>{" "}
          <span>{movie.origin_country?.join(", ")}</span>
        </div>

        <div>
          <span className="font-semibold">Popularity:</span>{" "}
          <span>{movie.popularity}</span>
        </div>

        <div>
          <span className="font-semibold">Release Date:</span>{" "}
          <span>{movie.release_date}</span>
        </div>

        <div>
          <span className="font-semibold">Runtime:</span>{" "}
          <span>{movie.runtime} mins</span>
        </div>

        <div>
          <span className="font-semibold">Status:</span>{" "}
          <span>{movie.status}</span>
        </div>

        <div>
          <span className="font-semibold">Vote Average:</span>{" "}
          <span>⭐ {movie.vote_average}</span>
        </div>
      </div>

      {!recommendations || recommendations.length === 0 ? (
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
      ) : (
        <MovieList title="Recommended" movies={recommendations} />
      )}

      {!similar || similar.length === 0 ? (
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
      ) : (
        <MovieList title="Similar Movies" movies={similar} />
      )}
    </div>
  );
};

export default PlayMovies;
