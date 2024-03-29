import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from "../hooks/usePoplularMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from './SecondaryContainer';
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchView = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearchView 
        ? <GptSearch/> 
        : <>
            <MainContainer/>
            <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse