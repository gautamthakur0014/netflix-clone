import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    // Reset trailer first
    dispatch(addTrailerVideo(null));

    const getMoviesVideo = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
        

        const filterData = json.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer || null));
      } catch (err) {
        console.error("Error fetching trailer:", err);
        dispatch(addTrailerVideo(null));
      }
    };

    getMoviesVideo();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
