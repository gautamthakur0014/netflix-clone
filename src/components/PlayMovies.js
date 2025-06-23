import { useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import PlayMoviesHeader from "./PlayMoviesHeader";
import MovieList from "./MovieList";
import useFindPlayMovies from "../hooks/useFindPlayMovies";
import useSimilarMovies from "../hooks/useSimilarMovies";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

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


  // useEffect(() => {
  //   // console.log("Updated similar movies:", similar);
  // }, [similar]);

  if (!movie) {
    return <p>Loading movie...</p>;
  }

  return (
    <div className="mb-7">
      <PlayMoviesHeader />
      <VideoBackground movieId={movieId} controls={1} />
      <div className="text-white font-semibold text-xl ml-3 md:text-2xl md:ml-7 mt-5">
        <span className="font-normal">Movie :</span> {movie.title}
      </div>
      <div className="text-white text-sm m-3 md:text-xl md:m-7">
        {movie.overview}
      </div>

      {!recommendations || recommendations.length === 0 ? (
        <p className="text-white text-4xl ml-7">
          Loading recommended movies...
        </p>
      ) : (
        <MovieList title="Recommended" movies={recommendations} />
      )}

      {!similar || similar.length === 0 ? (
        <p className="text-white text-4xl ml-7 mb-7">
          Loading similar movies...
        </p>
      ) : (
        <MovieList title="Similar Movies" movies={similar} />
      )}
    </div>
  );
};

export default PlayMovies;
