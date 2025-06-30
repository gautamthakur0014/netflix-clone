import { createSlice } from "@reduxjs/toolkit";

const moviesSlice =createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        playMovies : null,
        recommendedMovies: null,
        similarMovies: null,
        searchedMovies: null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state, action) =>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state, action) =>{
            state.UpcomingMovies = action.payload
        },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo =action.payload
        },
        addPlayMovies : (state, action) =>{
            state.playMovies =action.payload
        },
        addRecommendedMovies : (state, action) =>{
            state.recommendedMovies =action.payload
        },
        addSimilarMovies : (state, action) =>{
            state.similarMovies =action.payload
        },
        addSearchedMovies : (state, action) =>{
            state.searchedMovies =action.payload
        },
    }
});


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addPlayMovies, addRecommendedMovies, addSimilarMovies, addSearchedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
