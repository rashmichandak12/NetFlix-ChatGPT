import { MOVIE_URL, API_options} from '../utils/constants'
import { useDispatch } from "react-redux"
import { addNowPlayingMovies} from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      getNowPlayingMovies();
    }, [])
    
    const getNowPlayingMovies = async () => {
      const data = await fetch(MOVIE_URL, API_options);
      const movies = await data.json();
      console.log(movies);
      dispatch(addNowPlayingMovies(movies.results));
    }
}

export default useNowPlayingMovies
