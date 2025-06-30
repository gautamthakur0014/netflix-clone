import { useDispatch} from "react-redux";
import { addSimilarMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/const";
import { useEffect } from "react";

const useSimilarMovies = (movieId) => {
  // const movieId = useSelector((state) => state.movies.playMovies);
//   console.log("movie id == ",movieId.id);

  const dispatch = useDispatch();
  const getSimilarMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addSimilarMovies(json.results));
  };
  useEffect(() => {
    getSimilarMovies();
//   }, [movieId?.id, dispatch]);
  }, [movieId, dispatch]);
};

export default useSimilarMovies;
