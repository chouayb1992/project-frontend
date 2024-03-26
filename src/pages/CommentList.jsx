import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "./CommentCard";

function CommentList() {
    const post = useSelector((state)=>state.postReducer.postId)
    const { comments } = post

    const dispatch = useDispatch();
   
    // useEffect(()=>{
    //     dispatch(())
    // ,[]}
    // )
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", width: "30rem", margin: "0 auto"}}>
      {
        comments.length === 0 ? ("No comments") : ( comments.map
        ((el)=>
           <CommentCard comment={el} key={el._id}/>)
        )
      }
    </div>
  );
}

export default CommentList;
