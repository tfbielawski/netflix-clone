import React from "react";
import "../styles/SignupScreen.css"

function SigupScreen() {
    return (
        <div className="signupScreen">
            <form>
                <h1> Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit">Sign Up</button>
                <h4>
                    <span className="signupScreen_gray">New to Netflix? </span> 
                    <span className="signupScreen_link">Sign up now!</span>
                </h4>
            </form>
        </div>
    )
}

export default SigupScreen