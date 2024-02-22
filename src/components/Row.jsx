import React, {useState, useEffect} from "react";
import axios from "../helpers/Axios";
import IMAGE_BASE from "../helpers/Requests";
import "../styles/Row.css"

function Row({title, fetchUrl, isLargeRow=false}) {
    const [movieData, setMovieData] = useState([]);

    //Why doesn't this work with IMAGE_BASE imported?
    const BASE= "https://image.tmdb.org/t/p/original";

    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovieData(request.data.results);
            return request;
        }
        fetchData();
    },[]);

    console.log("MOVIES -->",  movieData);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
            {movieData.map(
                (movieItem) => 
                // Code to prevent rendering dead links
                    ((isLargeRow && movieItem.poster_path) || 
                    (!isLargeRow && movieItem.backdrop_path)) && (
                        <img
                            key={movieItem.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                            src={`${BASE}${
                                isLargeRow ? movieItem.poster_path : movieItem.backdrop_path    
                            }`} 
                            alt={movieItem.name}
                        />
                    )
            )}
            </div>
        </div>
    )
}

export default Row