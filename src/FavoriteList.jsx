import React from "react";
import FavoriteMovie from "./FavoriteMovie";

const FavoriteList = (props) => {
  return (
    <>
      <div className="favourites-container">
        <h3>Favorite Movies</h3>
        {props.favoriteMovies.length > 0 ? (
          <ul className="favourites-list">
            {props.favoriteMovies.map((movie) => (
              <FavoriteMovie
                movie={movie}
                RemoveFavoriteMovie={props.RemoveFavoriteMovie}
                ShowModal={props.ShowModal} 
              />
            ))}
          </ul>
        ) : (
          <p>You have no favorite movies.</p>
        )}
      </div>
    </>
  );
};

export default FavoriteList;
