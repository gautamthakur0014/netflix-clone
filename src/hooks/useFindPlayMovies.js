import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { addPlayMovies } from "../utils/moviesSlice";
import useSimilarMovies from "./useSimilarMovies";
import useRecommendedMovies from "./useRecommendedMovies";

const useFindPlayMovies = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    // Reset playMovies first
    dispatch(addPlayMovies(null));

    const getMoviesData = async () => {
      try {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}`,
          API_OPTIONS
        );
        const json = await data.json();
        // console.log("json data == ", json);
  
        dispatch(addPlayMovies(json));
      } catch (err) {
        console.error("Error fetching Details:", err);
        // dispatch(addTrailerVideo(null));
      }
    };

    getMoviesData();
  }, [movieId, dispatch]);

  
};

export default useFindPlayMovies;;