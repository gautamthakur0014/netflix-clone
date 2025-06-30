import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addRecommendedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/const";
import { useEffect } from "react";

const useRecommendedMovies = (movieId) => {
    // const movieId = useSelector((state) => state.movies.playMovies);
    // console.log("movie id == ",movieId.id);
    
    const dispatch = useDispatch();
    const getRecommendedMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addRecommendedMovies(json.results));
    };
    useEffect(() => {
      getRecommendedMovies();
    }, [movieId, dispatch]);
}

export default useRecommendedMovies
