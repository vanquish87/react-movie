import React, { useState } from 'react';
import { useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

// 53a128df

const API_URL = 'http://www.omdbapi.com/?apikey=53a128df';

const movie1 = {
    Title: 'Pathaan',
    Year: '2023',
    imdbID: 'tt12844910',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg',
};

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search[0]);
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('pathaan');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" value="superman" onChange={() => {}}></input>
                <img src={SearchIcon} alt="search" onClick={() => {}} />
            </div>

            <div className="container">
                <MovieCard movie1={movies[0]} />
            </div>
        </div>
    );
};

export default App;

// resume at 1:03
