import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedCard from "./FeedCard";
import { timelinePosts } from "../redux/actions/post"; 

function FeedList() {
    const posts = useSelector((state)=>state.postReducer.timeline)
    console.log(posts)

    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(timelinePosts())
    },[]
    )
  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "30rem", margin: "2rem 30rem"}}>
      <h3>Timeline posts:</h3>
      <h6>Discover new posts from your friends in this page.</h6>
      
      {
        
        posts.length === 0 ? ("You are following anyone") : ( posts.map
        ((el)=>
           <FeedCard post={el} key={el._id}/>)
        )
      }
    </div>
  );
}

export default FeedList;