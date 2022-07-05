import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import {addMovies} from "../../features/movies/movieSlice";
import {useDispatch} from "react-redux";

const Home = () => {
    const movieText = 'Harry';
    // whenever I want to get the values from the api, I want to
    // dispatch an action, so that this goes to the reducer and the reducer
    // updates the state.
    const dispatch = useDispatch();
    // need to fetch movie data and render it on home page under MovieListing
    useEffect(()=> {

        const fetchMovies = async () =>{
            const response = await movieApi
                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log('Error: ', err);
                });
            dispatch(addMovies(response.data));
        };
        fetchMovies();
    },[]);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
};

export default Home;
