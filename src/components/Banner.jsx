import React from "react";
import NETB2 from "../assets/netb2.jpeg"
import "../styles/Banner.css";

function Banner() {
    //Shorten the descriptin text, string and num of chars
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

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
                {/* Trunate long descr */}
                <h1 className="banner_description">TEST DESCRIPTION
                {truncate(
                    `Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.`, 150
                    )}
                </h1>
            </div>
            {/* empty div to style bottom fade/blur */}
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
