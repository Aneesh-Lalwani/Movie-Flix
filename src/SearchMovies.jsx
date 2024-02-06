import React from "react";
import { useState } from "react";

const SearchMovies = (props) => {
  const [movieTitle, setMovieTitle] = useState('');
  
  // function for searching movie
  const SearchMovie = async (e) => {
       e.preventDefault()
       const apiKey = "72aae5ab";
       const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${movieTitle}`;
       
       try{
            const response = await fetch(url);
            const data = await response.json();
            props.AddFavoriteMovies(data);
            // console.log(data);
       }catch (err){
            console.log(err);
       }
  }  
   // return statment for rendering component 
  return (
    <>
      <div className="search-movies">
        <form onSubmit={SearchMovie}>
          <label htmlFor="query">Movie Title </label>
          <input
            type="text"
            name="query"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            placeholder="Enter a movie title"
            role="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchMovies;
