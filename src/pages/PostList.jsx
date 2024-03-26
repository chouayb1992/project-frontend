import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";

function PostList() {
    const posts = useSelector((state)=>state.postReducer.myPosts)
    const loadPosts = useSelector((state)=>state.postReducer.loadPosts)

    const dispatch = useDispatch();
   
    // useEffect(()=>{
    //     dispatch(myPosts())
    // ,[]}
    // )
  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "30rem", margin: "0 30rem"}}>
      <h3>Posts({posts.length})</h3>
      {
        loadPosts ? (<h3>Loading...</h3>) : posts.length === 0 ? ("No posts") : ( posts.map
        ((el)=>
           <PostCard post={el} key={el._id}/>)
        )
      }
    </div>
  );
}

export default PostList;
