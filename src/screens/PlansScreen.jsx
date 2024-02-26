import React from "react";
import "../styles/PlansScreen.css"

function PlansScreen() {
    //TO DO: Connect Stripe Payment st
    // const [products, setProducts] = useState([]);
    return (
        <div className="plansScreen_plan">
            <div className="plansScreen_info">
                <h3>Select your plan (in development) </h3>
                <h5>Netflix Standard 720p </h5>
                <h5>Netflix Basic 1080p  </h5>
                <h5>Netflix Premium 4k HDR </h5>
            </div>
            <button>SUBSCRIBE</button>            
        </div>
    )
}

export default PlansScreen;