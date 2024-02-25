import React from "react";
import "../styles/SignupScreen.css"

function SigupScreen() {

    const register = (e) => {
        // Prevent default refreshing form on click
        e.preventDefault();
    };

    const signIn = (e) =>{
        // Prevent default refreshing form on click
        e.preventDefault();
    }

    return (
        <div className="signupScreen">
            <form>
                <h1> Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen_gray">New to Netflix? </span> 
                    <span className="signupScreen_link" onClick={register}>Sign up now!</span>
                </h4>
            </form>
        </div>
    )
}

export default SigupScreen