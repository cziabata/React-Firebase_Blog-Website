import React from "react";
import { auth, provider } from "../firebase-congig";

const Login = () => {
    return (
        <div className="loginPage">
            <p>Sign In With Google To Continue</p>
            <button className="login-with-google-btn">Sign in with Google</button>
        </div>
    )
}

export default Login;