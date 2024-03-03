import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice"

const useTrailerVideo = (movieId) => {
    const dispatcher = useDispatch();

    useEffect(() => {
        getMovieVideos();
      }, []);
    
      const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_options
        );

        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatcher(addTrailerVideo(trailer));
      };
}

export default useTrailerVideo