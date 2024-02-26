import React, {useState, useEffect} from "react";
// import {useHistory} from "react-router-dom"; // Replaced by useNavigate
import { useNavigate, useNavigation } from "react-router-dom";
import NET3 from "../assets/net3.png";
import WIT5 from "../assets/wit5.png";
import "../styles/Nav.css";

function Nav() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        //Scroll over 100 items on screen, show nav bar
        if(window.scrollY > 100){
            setShow(true)
        }
        else { 
            setShow(false);
        }
    }

    useEffect(() => {
        //When there's a scroll event, call transitionNavBar
        window.addEventListener("scroll", transitionNavBar);
        //cleanup func
        return () => {
            window.addEventListener("scroll", transitionNavBar)
        }
    }, [])
    
    return (
        //Render style conditionally
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img 
                    className="nav_logo"
                    src={NET3} 
                    alt="Netflix" 
                    onClick={()=>navigate("/")}                   
                />
                <img 
                    className="nav_avatar"
                    src={WIT5}
                    alt="Netflix"
                    // onClick={()=>navigate.push("/profile")}
                    onClick={()=>navigate("/profile")}
                />
            </div>
        </div>
    )
}

export default Nav

//useHistory replaced by useNavigate
//https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom