import { collection, getDocs } from "firebase/firestore";
import React, {useEffect, useState} from "react";
import { db } from "../firebase-congig";

const Home = () => {
    const [postItems, setPostItems] = useState([]);
    const postCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostItems(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        getPosts();
    })

    return (
        <div className="homePage">
            {postItems.map(post => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1>{post.postTitle}</h1>
                            </div>
                        </div>
                        <div className="postTextContainer">{post.postText}</div>
                        <h3>@{post.author.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;