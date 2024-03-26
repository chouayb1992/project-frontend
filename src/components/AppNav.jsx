import React, {useEffect, useState} from "react";
import {Nav, Modal, Form, Button} from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/user";
import {addPost, getPost} from "../redux/actions/post"
import { useNavigate } from "react-router-dom";
import './AppNav.css';
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";


const AppNav=()=>{
    
    const isAuth = useSelector((state)=>state.authReducer.isAuth)
    const user= useSelector((state)=>state.authReducer.user)
    // const posts = useSelector((state)=>state.postReducer.myPosts)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
     const [show, setShow] = useState(false);

     const [subject, setSubject] = useState("");
     const [description, setDescription] = useState("");
     const [image, setImage] = useState("");
  console.log(image)
     

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    
   


  

      
     const handleCreate =()=>{
      const formData = new FormData();
      formData.append("image" , image)
      formData.append("description" , description)
      formData.append("subject" , subject)

        //  const newPost = {subject, description, image};
        console.log("add Form : " , formData)
         dispatch(addPost(formData));
         setDescription("")
     }  

    const handleLogout =()=>{
      dispatch(userLogout())
    }

   
    
    return(
        <div className="page">
            <header>
              
            <Nav>
            {isAuth ?(<>
            <Link to="/feed" className="nav-logo">SUPERCHAT</Link>
            <Link to="/feed" className="nav-link"><RiHome4Line /> Feed</Link>
            <Link to="/explore" className="nav-link"><MdOutlineExplore /> Trending</Link>
            <Link to="/users" className="nav-link"><FaUsersViewfinder /> Find</Link>
            {/* <Link to="/notifications" className="nav-link"><RiNotification2Line /> Notifications</Link> */}
            <Link to="/bookmarks" className="nav-link"><CiBookmark /> Bookmarks</Link>
            <Link to="/friends" className="nav-link"><TiGroupOutline /> Followings</Link>
            {/* <Link to="/chat" className="nav-link"><IoChatboxEllipsesOutline /> Community</Link> */}
            {/* <Link to="/leaderboard" className="nav-link"><MdOutlineLeaderboard /> Leaderboard</Link> */}
            <Link to="/profile" className="nav-link"><MdOutlineAccountCircle /> Profile</Link>
            <button onClick={handleShow} className="add-btn">Post</button>
            {/* <Link to="/posts">My Posts({posts.length})</Link> */}
            {/* <Link to="/addpost">Add post</Link> */}
            </> 

            ) : <></>}
            
        
          
           </Nav>
           <div className='sidebar'>
    <div className='content'>
    {
            isAuth ? (
              <>
              <img src={`/../uploads/${user.image}`} className="profile-pic" />
              {!user ? <></> : <span className="username"> {user.name} {user.lastName} </span>} 
              <button className="logout" onClick={handleLogout}><IoLogOutOutline /></button>
              </>
            ):(
              <>
              </>
            )
          }
    </div>
    </div>
  
          </header>
          
       

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setSubject(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" name="image" onChange={(e)=>setImage(e.target.files[0])}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleCreate(); handleClose()}}>
            Add post
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AppNav;