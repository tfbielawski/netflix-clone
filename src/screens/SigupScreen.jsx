import React, {useRef} from "react";
import { auth } from "../helpers/firebase.jsx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; //imported to resolve errors ( createUserWithEmailAndPassword )
import "../styles/SignupScreen.css";

function SigupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //Create an account with user/pw
    const register = (e) => {
        // Prevent default refreshing form on click
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log("LOOk 1--->", authUser)
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    const signIn = (e) =>{
        // Prevent default refreshing form on click
        e.preventDefault(); 
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log("LOOk 2--->", authUser)
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    return (
        <div className="signupScreen">
            <form>
                <h1> Sign In</h1>
                <input 
                    ref={emailRef} 
                    placeholder="Email" 
                    type="email"
                />
                <input 
                    ref={passwordRef} 
                    placeholder="Password" 
                    type="password"
                />
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