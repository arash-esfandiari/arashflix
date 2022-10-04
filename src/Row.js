import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://images.tmdb.org/t/p/original/";
    // a snippet of code which runs based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads and don't run it again
        // if [movies], run everytime movies changes
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2> {title} </h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}

            </div>
            {/* container -> posters */}

        </div>
    )
}

export default Row;
