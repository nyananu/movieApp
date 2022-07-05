import {createSlice} from '@reduxjs/toolkit';

// setting initial state
const initialState = {
    movies: {},
}

const movieSlice = createSlice({
    // name of slice
    name: 'movies',
    initialState,
    // add actions within reducer
    reducers: {
        addMovies:(state, {payload}) => {
            state.movies = payload;
        },
    },
});

// to import actions in home component
export const { addMovies } = movieSlice.actions;
// if need to fetch value from store, this is gonna give the state
// then go to the state slice (movies) -> and get movie property
export const getAllMovies = (state) => state.movies.movies;
// to import reducer into the store
export default movieSlice.reducer;