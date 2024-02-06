import React from "react";
import ReactModal from "react-modal";

const MovieModal = ({ movie, isModalOpen, CloseModal }) => {
  return (
    <>
      <ReactModal
        className="modal"
        overlayClassName="modal-overlay"
        isOpen={isModalOpen}
        onRequestClose={CloseModal}
        contentLabel={movie.Title}
      >
        <div className="modal-content">
            <span className="close" onClick={CloseModal}>
                &times;
            </span>
            <div className="modal-header">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="modal-tile">
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                </div>
            </div>
            <div className="modal-body">
                <p> <strong>Genre: </strong> {movie.Genre}</p>
                <p> <strong>Rating: </strong> {movie.imdbRating}</p>
                <p> <strong>Runtime: </strong> {movie.Runtime}</p>
                <p> <strong>Cast: </strong> {movie.Actor}</p>
                <p>
                    {movie.Plot}
                </p>
            </div>
        </div>
      </ReactModal>
    </>
  );
};
export default MovieModal;
