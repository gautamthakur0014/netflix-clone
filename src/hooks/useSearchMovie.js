import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/moviesSlice";

const useSearchMovie = (movie) => {
  
 
  const dispatch =useDispatch();

    const getMovie = async () =>{
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +movie+ "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        const movies =json.results;
        

        dispatch(addSearchedMovies(movies));
        
    }

    useEffect(() => {
      
      
        getMovie();
      }, [movie, dispatch]);
};


export default useSearchMovie;