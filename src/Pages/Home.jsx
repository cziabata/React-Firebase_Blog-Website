import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, {useEffect, useState} from "react";
import { auth, db } from "../firebase-congig";

const Home = ({isAuth}) => {
    const [postItems, setPostItems] = useState([]);
    const postCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postRef = doc(db, "posts", id);
        await deleteDoc(postRef);
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostItems(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        getPosts();
    }, [deletePost])

    return (
        <div className="homePage">
            {postItems.map(post => {
                return (
                    <div className="post" key={post.id}>
                        <div className="postHeader">
                            <div className="title">
                                <h1>{post.postTitle}</h1>
                            </div>
                            { isAuth && post.author.id === auth.currentUser.uid && <div className="deletePost">
                                <button onClick={()=>{deletePost(post.id)}}>&#128465;</button>
                            </div>}
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