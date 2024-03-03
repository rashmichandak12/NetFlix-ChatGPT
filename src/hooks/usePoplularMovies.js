import { POPULAR_MOVIE_URL, API_options} from '../utils/constants'
import { useDispatch } from "react-redux"
import { addPopularMovies} from '../utils/movieSlice'
import { useEffect } from 'react'

const usePoplularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      getPoplularMovies();
    }, [])
    
    const getPoplularMovies = async () => {
      const data = await fetch(POPULAR_MOVIE_URL, API_options);
      const movies = await data.json();
      console.log(movies);
      dispatch(addPopularMovies(movies.results));
    }
}

export default usePoplularMovies
