import React from "react";
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice";
import { auth } from "../helpers/firebase";
import Nav from "../components/Nav";
import WIT5 from "../assets/wit5.png";
import "../styles/ProfileScreen.css";
import { signOut } from "firebase/auth";
import PlansScreen from "./PlansScreen";


function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div>
            <div className="profileScreen">
                <Nav />
                <div className="profileScreen_body">
                    <h1>Edit Profile</h1>
                    <div className="profileScreen_info">
                        <img 
                            src={WIT5} 
                            alt="witcher profile pic"
                        />
                        <div className="profileScreen_details">
                            <h2>{user.email}</h2>
                            <div className="profileScreen_plans">
                                <h3>PLANS</h3>
                                <PlansScreen />
                                <button 
                                onClick={() => signOut(auth)}
                                className="profileScreen_signOut"
                                >
                                    SIGN OUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
//Corrected auth syntax errors using this stack article
//https://stackoverflow.com/questions/70831954/auth-signout-or-signoutauth-is-there-any-difference-or-major-advantage-with