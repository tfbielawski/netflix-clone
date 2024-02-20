import React, {useState, useEffect} from "react";
import NETB2 from "../assets/netb2.jpeg"
import axios from "../helpers/Axios";
import requests, { IMAGE_BASE } from "../helpers/Requests";
import "../styles/Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios
            .get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]) // empty dep array, ensures only one call

    console.log(movie)

    //Shorten the descriptin text, string and num of chars
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${IMAGE_BASE}${movie?.backdrop_path})`,
                // backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">PLAY</button>
                    <button className="banner_button">MY LIST</button>
                </div>
                {/* Truncate long descr */}
                <h1 className="banner_description">
                {truncate(movie?.overview, 150
                    )}
                </h1>
            </div>
            {/* empty div to style bottom fade/blur */}
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
