import React from 'react'
import { useParams } from 'react-router-dom'
import useSearchMovie from '../hooks/useSearchMovie';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import PlayMoviesHeader from './PlayMoviesHeader';

const SearchPage = () => {
  const { keyword } = useParams();
  useSearchMovie(keyword);

  const searchResult =useSelector((state)=>state.movies.searchedMovies);
  
  
  
  return (
    <div className="">
      <PlayMoviesHeader />
      <div className="h-16 md:h-32"></div>
      <MovieList title="Search Result :" movies={searchResult} />
    </div>
  );
}

export default SearchPage
