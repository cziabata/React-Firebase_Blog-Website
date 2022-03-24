import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-congig";

const Login = ({setIsAuth}) => {

    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(()=> {
            localStorage.setItem("isAuth", true)
            setIsAuth(true);
            navigate("/");
        })
    }

    return (
        <div className="loginPage">
            <p>Sign In With Google To Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login;