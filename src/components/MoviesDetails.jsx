import React from "react";

const MovieDetails = ({ movie ,onClose }) => {
    return (
        <div className="movie-details">
           <h2>{movie.Title}</h2>
            <p>Release Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            <p>Plot: {movie.Plot}</p>
            <p>Rated:  {movie.Rated}</p>
            <p>ID : {movie.imdbID}</p>
            {/* <button onClick={onClose}>Click for more details</button> */}
        </div>
    );
};

export default MovieDetails;
