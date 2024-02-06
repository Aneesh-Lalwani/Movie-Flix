import React from "react";

const FavoriteMovie = ({movie, RemoveFavoriteMovie, ShowModal}) => {
    
    const handleRemove = (e) => {
        e.stopPropagation();
        RemoveFavoriteMovie(movie);
    }

    const handleShowModal = () => {
        ShowModal(movie);
    }
    return(
        <li className="favourite-movie" onClick={handleShowModal}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="favourite-movie-info">
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
            </div>
            <button className="remove-button" onClick={handleRemove}>Remove Movie</button>
        </li>
    );
}

export default FavoriteMovie;