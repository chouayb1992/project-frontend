import React, { useEffect } from "react";
import './App.css';
import FollowingsList from "./FollowingsList";

function Friends() {
   
//   useEffect(()=>{
//     dispatch(getFollowings())
// } ,[]
// )

  return (
    <div className="App">
      <FollowingsList/>
    </div>
  );
}

export default Friends;