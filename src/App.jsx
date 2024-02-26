import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./helpers/firebase"
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
      if(userAuth) {
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else{
        dispatch(logout());
      }
    })

    //Cleanup function to log out users
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}/>
            <Route path="/profile" element={<ProfileScreen />}/>
          </Routes>
        )}
         {/* <Routes>
            <Route exact path="/" element={<HomeScreen />}/>
          </Routes> */}
      </Router>
    </div>
  );
}

export default App;
