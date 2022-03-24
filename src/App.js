import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import CreatePost from "./Pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-congig";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(()=> {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname= "/login"
    })
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        { !isAuth 
            ? <Link to="/login">Login</Link> 
            : <><Link to="/createpost">Create Post</Link><button onClick={signUserOut}>Log Out</button></>
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
