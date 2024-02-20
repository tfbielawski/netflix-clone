import React from "react";
import NETB2 from "../assets/netb2.jpeg"
import "../styles/Banner.css";

function Banner() {
    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${NETB2})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">PLAY</button>
                    <button className="banner_button">MY LIST</button>
                </div>
                <h1 className="banner_description">TEST DESCRIPTION</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
