import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Headers from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";







const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
  

  return (
    <div>
      <Headers />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
