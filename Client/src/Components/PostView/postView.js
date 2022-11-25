import { useState,useEffect } from "react";
import Axios from "axios"
import Navbar from "../Header/Navbar";
import "../styles/postview.css"

function PostView(){
  
    const [post,getPost] = useState([])
    
    console.log(post)
    useEffect(()=>{
        
         Axios.get("https://instaclone-backend-prajwal.herokuapp.com/post/fetch").then(res=>getPost(res.data.posts)).catch(err=>console.log(err))
        console.log(post)
           
       
   
    //   console.log(post.length,"useef")
     
    },[post])
    
    return <div className="postview-body">
        <Navbar />
        <div className="postFlex">
            {post? 
                (post.map((post, index) => {
                    console.log(post.name);
                    return (<div className="post-container" key={index}>
                        <div className="user">
                            <div className="title">
                                <p>{post.name}</p>
                                <p>{post.location}</p>
                            </div>
                            <div className="more">...</div>
                        </div>
                        <div className="post-body">
                            <img src={post.imageUrl.imageUrl} alt="Nature" />
                        </div>
                        <div className="post-info">
                            <div>
                                <img src="/like.png" alt="Heart" />
                                <img src="/share.png" alt="Share post" />
                                <span>date</span>
                            </div>
                        </div>
                        <p><span>20</span> likes</p>
                        <p>{post.description}</p>

                    </div>)

                })) :( <h1>No Posts</h1>)}
            
        </div>

    </div>
}

export default PostView;