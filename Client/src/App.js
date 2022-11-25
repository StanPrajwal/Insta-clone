// import React, { useEffect,useState } from 'react';

// import Axios from 'axios';
import {Routes,Route} from "react-router-dom"

import LandingPage from './Components/LandPage/LandPage';
import PostView from './Components/PostView/postView';
import PostUpload from './Components/PostView/PostUpload';


function App() {
  // const [posts,getPosts] = useState()
  // useEffect(()=>{
  //   Axios.get("http://localhost:4000/post/fetch").then(res=>getPosts(res.data.posts)).catch(err=>console.log(err))
  //   console.log(posts)
   
  // },[posts])
  
  
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<LandingPage />}/>
        <Route path="/postview" element={<PostView/>}></Route>
        <Route path="/postupload" element={<PostUpload />} />
      </Routes>
    </div>
  );
}

export default App;
