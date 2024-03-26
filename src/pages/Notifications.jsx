import React from "react";
import { useSelector } from "react-redux";


function Notifications() {

  const user = useSelector((state)=> state.authReducer.user)
  return (
    <div className="App">
      <h1>Notifications page</h1>
      <h4>Connected userID is {user._id}</h4>
    </div>
  );
}

export default Notifications;

