import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector (store => store.movies)
  return (
    movies.nowPlayingMovies &&  movies.popularMovies && (
      <div className=" bg-black">
        <div className="relative z-20 pl-12 -mt-96">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular"} movies={movies.popularMovies}/>
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;