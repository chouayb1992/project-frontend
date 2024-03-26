import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import BookmarkCard from "./BookmarkCard";
import { useEffect } from "react";
import { bookmarkedPosts } from '../redux/actions/post';


const BookmarkList = () => {
  
    const bookmarks = useSelector((state)=>state.postReducer.bookmarks) 
    console.log("bookmarks", bookmarks)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(bookmarkedPosts())
   } ,[]
    )
   
  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "30rem", margin: "2rem 30rem"}}>
      <h3>Bookmarks: ({bookmarks.length})</h3>
      <h6>Bookmark posts to easily find them again in the future.</h6>
      {
        bookmarks.length === 0 ? ("No bookmarks") : bookmarks.map(el => <BookmarkCard post={el[0]} key={el[0]._id}/>)
        // ( bookmarks.map
        //   ((el)=>
        //    <BookmarkCard post={el} key={el._id}/>)
        // )
      }
    </div>
  );
}



export default BookmarkList


