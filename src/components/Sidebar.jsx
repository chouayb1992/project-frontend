// import React from 'react'
// import './Sidebar.css'
// import Register from "./Register";
// import Login from "./Login";
// import { useDispatch, useSelector } from "react-redux";
// import {Nav, Modal, Form, Button} from "react-bootstrap";
// import { userLogout } from "../redux/actions/user";


// const Sidebar = () => {

//   const dispatch = useDispatch();

//   const isAuth = useSelector((state)=>state.authReducer.isAuth)
//   const user= useSelector((state)=>state.authReducer.user)

//   const handleLogout =()=>{
//     dispatch(userLogout())
//   }
//   return (
//     <div className='sidebar'>
//     <div className='content'>
//     {
//             isAuth ? (
//               <>
//               {!user ? <></> : <span> {user.name} </span>} 
//               <Button onClick={handleLogout}>Logout</Button>
//               </>
//             ):(
//               <>
//               <Register/>
//               <Login/>
//               </>
//             )
//           }
//     </div>
//     </div>
//   )
// }

// export default Sidebar