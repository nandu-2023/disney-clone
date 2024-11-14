import React from 'react';
import PropTypes from 'prop-types';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <img
      src={IMAGE_BASE_URL + movie.poster_path}
      alt={movie.title || "Movie poster"}
      className='w-[110px] md:w-[200px] rounded-lg
                 hover:border-[3px] border-gray-400 cursor-pointer
                 hover:scale-110 transition-all duration-150 ease-in'
    />
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string, // assuming there's a title to display in the alt attribute
  }).isRequired,
};

export default MovieCard;
