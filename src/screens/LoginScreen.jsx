import React from "react";
import "../styles/LoginScreen.css";
import NET3 from "../assets/net3.png";

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img 
                    className="loginScreen_logo"
                    src={NET3} 
                    alt="Netflix Logo" 
                />
                <button 
                    className="loginScreen_button">SIGN IN
                </button>
                <div className="loginScreen_gradient" />
                <div className="loginScreen_body">
                   <>
                    <h1>Unlimited Films, TV programs, and more.</h1>
                   </> 
                </div>
            </div>
        </div>
    )
}

export default LoginScreen