import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKVoazT1mMaYf1Ysm5w_pjhj5KRglOhGQ",
    authDomain: "react-firebase-blog-web-site.firebaseapp.com",
    projectId: "react-firebase-blog-web-site",
    storageBucket: "react-firebase-blog-web-site.appspot.com",
    messagingSenderId: "360250213382",
    appId: "1:360250213382:web:c1ff00b362b92055bdaf87",
    measurementId: "G-TFF4CHEH9J"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();