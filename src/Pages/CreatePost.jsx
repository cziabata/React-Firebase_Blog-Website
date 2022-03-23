import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-congig";


const CreatePost = ({isAuth}) => {

    const [postTitle, setNewPostTitle] = useState("");
    const [postText, setNewPostText] = useState("");

    const navigate = useNavigate();
    const postCollectionRef = collection(db, "posts")

    const createPost = () => {
        addDoc(postCollectionRef, {postTitle, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }});
        setNewPostTitle("");
        setNewPostText("");
        navigate("/");
    }

    useEffect(()=>{
        if(!isAuth) {
            navigate("/");
        }
    })

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create Post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(e)=>{setNewPostTitle(e.target.value)}}/>
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="Post..." onChange={(e)=>{setNewPostText(e.target.value)}}/>
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;