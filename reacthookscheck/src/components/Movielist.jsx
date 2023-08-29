import React from 'react';
import Moviecard from './Moviecard';


const Movielist = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        // <MovieCard key={movie.title} movie={movie} />
        <Moviecard key={movie.title} movie={movie}/>
      ))}
    </div>
  );
};

export default Movielist;