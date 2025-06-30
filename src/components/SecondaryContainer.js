import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="mt-2 md:mt-3 ">
      <MovieList
        title={lang[langKey].nowPlaying}
        movies={movies.nowPlayingMovies}
      />
      <MovieList title={lang[langKey].popular} movies={movies.popularMovies} />
      <MovieList
        title={lang[langKey].topRated}
        movies={movies.topRatedMovies}
      />
      <MovieList
        title={lang[langKey].upcoming}
        movies={movies.UpcomingMovies}
      />
      {/* <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} /> */}
    </div>
  );
};

export default SecondaryContainer;
