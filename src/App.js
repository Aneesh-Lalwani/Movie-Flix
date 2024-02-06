import { useState } from "react";
import "./App.css";
import "./style.css";
import SearchMovies from "./SearchMovies";
import FavoriteList from "./FavoriteList";
import MovieModal from "./MovieModal";

const App = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // function for adding favorite movies in components
  const AddFavoriteMovies = (movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };
  // function for deleting movies from favorite list
  const RemoveFavoriteMovie = (movie) => {
    setFavoriteMovies(favoriteMovies.filter((f) => f.imdbID !== movie.imdbID));
  };
  console.log(favoriteMovies);
  // function for Modal function to check extra details of movies
  const ShowModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  // function for closing modal
  const CloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  }
  
  return (
    <>
      <div className="App">
        <SearchMovies AddFavoriteMovies={AddFavoriteMovies} />
        <FavoriteList
          favoriteMovies={favoriteMovies}
          RemoveFavoriteMovie={RemoveFavoriteMovie}
          ShowModal={ShowModal}
        />
        { selectedMovie && (
        <MovieModal isModalOpen={isModalOpen} CloseModal={CloseModal} movie={selectedMovie} />
        )}
        </div>
    </>
  );
};

export default App;
