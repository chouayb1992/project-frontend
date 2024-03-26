import React from "react";
import './Home.css';
import Register from "../components/Register";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import {Nav, Modal, Form, Button} from "react-bootstrap";
import { userLogout } from "../redux/actions/user";


function Home() {


  const dispatch = useDispatch();

  const isAuth = useSelector((state)=>state.authReducer.isAuth)
  const user= useSelector((state)=>state.authReducer.user)

  const handleLogout =()=>{
    dispatch(userLogout())
  }


  return (
    <div className="App">
      <div className="logo">
      <img src="https://i.pngimg.me/thumb/f/720/comvecteezy639617.jpg"/>
      </div>
      <div className="form">
      <div className="content">
      {/* <p className="title1">It's happening now</p> */}
      <p className="title2">Sign Up for SUPCHAT now</p>
      <p className="title4">to stay connected with all your friends.</p>
      
    {
            isAuth ? (
              <>
              {/* {!user ? <></> : <span> {user.name} </span>} 
              <button onClick={handleLogout}>Logout</button> */}
              </>
            ):(
              <>
              <Register/>
              <p className="title3">Already have an account?</p>
              <Login/>
              </>
            )
          }
        </div>
    </div>
      </div>
  
  );
}

export default Home;
