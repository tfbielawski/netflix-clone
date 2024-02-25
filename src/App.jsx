import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./helpers/firebase"
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        console.log(userAuth);
      }
      else{

      }
    })

    //Cleanup function to log out users
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}/>
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
