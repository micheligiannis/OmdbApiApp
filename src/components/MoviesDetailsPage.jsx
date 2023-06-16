import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './DetailPage.css';
const API_URL = "http://www.omdbapi.com/?apikey=ad404589";

const MoviesDetailsPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}&i=${id}&plot=full`);
                const data = await response.json();
                setMovieDetails(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        if (id) {
            fetchMovieDetails();
        } else {
            navigate("/movies");
        }
    }, [id, navigate]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }
    return (
        <div className="movies-details-page">
            <h2>Movie Details Page</h2>
            <p>Movie ID: {id}</p>
            <p>Title: {movieDetails.Title}</p>
            <p>Release Year: {movieDetails.Year}</p>
            <p>Plot: {movieDetails.Plot}</p>
        </div>
    );
};

export default MoviesDetailsPage;
