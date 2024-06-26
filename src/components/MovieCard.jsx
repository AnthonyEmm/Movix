import React from "react";

const MovieCard = ({ movie, selectMovie, scrollToTop }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  const handleClick = () => {
    selectMovie(movie); // Calling  selectMovie to handle movie selection
    scrollToTop(); // Scroll to top after selecting the movie
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      {movie.poster_path ? (
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt={movie.title}
          className="movie-cover"
        />
      ) : (
        <div className="movie-replacement">No Image Found</div>
      )}
      <h4 className="movie-title">{movie.title}</h4>
      <h5 className="movie-language">
        Original Language: {movie.original_language}
      </h5>
      <h5 className="movie-date"> Release Date: {movie.release_date}</h5>
      <h5 className="movie-vote"> Vote Count: {movie.vote_count} Votes</h5>
      <h5 className="movie-vote">
        Average Popularity Vote: {movie.vote_average}%
      </h5>
    </div>
  );
};

export default MovieCard;
