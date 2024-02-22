import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../helpers/Requests";
import "../styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />
        
        <Banner/>

        <Row 
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row 
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Row 
          title="TopRated"
          fetchUrl={requests.fetchTopRated}
        />
        <Row 
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row 
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />

    </div>

    //banner
    //rows
  )
}

export default HomeScreen