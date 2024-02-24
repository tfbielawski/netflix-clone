import React, {useState} from "react";
import "../styles/LoginScreen.css";
import NET3 from "../assets/net3.png";

function LoginScreen() {
    const [signIn, setSignIn] =  useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img 
                    className="loginScreen_logo"
                    src={NET3} 
                    alt="Netflix Logo" 
                />
                <button
                    className="loginScreen_button"
                    onClick={() => setSignIn(true)} 
                >SIGN IN                 
                </button>
                <div className="loginScreen_gradient" />
            </div>
            <div className="loginScreen_body">
                {SignUpScreen ? (
                    <SignIn />
                ) : (
                    <>
                    <h1>Unlimited Films, TV programs, and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email 
                        to create or restart your membership</h3>

                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="email address" />
                            <button 
                                className="loginScreen_getStarted"
                                onClick={() => setSignIn(true)}
                            >
                                GET STARTED
                            </button>
                        </form>
                    </div>   
                </>
                )
            }    
            </div>
        </div>
    )
}

export default LoginScreen