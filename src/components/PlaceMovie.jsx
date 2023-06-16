import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Search.css';
import MovieDetails from './MoviesDetails';
// import MovieDetailsPage from "./MoviesDetailsPage";

const PlaceMovie = ({ movie }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <div className='movie'>
        {/* <Link to={`/movies/${movie.imdbID}`} > */}
            <div onMouseEnter={openPopup} onMouseLeave={closePopup}>
                <div>
                    <h2>{movie.Title}</h2>
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
                </div>
                {showPopup && (
                    <div className="popup">
                        <MovieDetails movie={movie} />
                        <Link to={`/movies/${movie.imdbID}`}>Go to Details</Link>
                    </div>
                )}
            </div>
      
        </div>
    );
}

export default PlaceMovie;