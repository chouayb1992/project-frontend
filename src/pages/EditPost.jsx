// import React, {useState} from "react";
// import {Nav, Modal, Form, Button} from "react-bootstrap";
// import Register from "./Register";
// import Login from "./Login";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { userLogout } from "../redux/actions/user";
// import {addPost, updatePost} from "../redux/actions/post"
// import { useNavigate } from "react-router-dom";
// import './AppNav.css';
// import { RiHome4Line } from "react-icons/ri";
// import { MdOutlineExplore } from "react-icons/md";
// import { RiNotification2Line } from "react-icons/ri";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { TiGroupOutline } from "react-icons/ti";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { MdOutlineLeaderboard } from "react-icons/md";
// import { BiMessageAltDots } from "react-icons/bi";


// const EditPost=()=>{
    
    
//     const post = useSelector((state)=>state.postReducer.updatedPost)
//     const dispatch = useDispatch();

//     const navigate = useNavigate();
    
//      const [showForm, setFormShow] = useState(false);

//      const [subject, setSubject] = useState("");
//      const [description, setDescription] = useState("");
//      const [image, setImage] = useState("");
     

//      const handleFormClose = () => setShow(false);
//      const handleFormShow = () => setShow(true);
    
//      const handleCreate =()=>{
//       const formData = new FormData();
//       formData.append("image" , image)
//       formData.append("description" , description)
//       formData.append("subject" , subject)

        
//          dispatch(updatePost(post._id, formData));
//      }  


   

//     return(
//         <div className="page">
        
//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Save post</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>

//         <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Subject</Form.Label>
//         <Form.Control type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Description</Form.Label>
//         <Form.Control type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Image</Form.Label>
//         <Form.Control type="file" name="image" value={image} onChange={(e)=>setImage(e.target.files[0])}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

      
//     </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={()=>{handleCreate(); handleFormClose()}}>
//             Add post
//           </Button>
//         </Modal.Footer>
//       </Modal>
//         </div>
//     )
// }

// export default EditPost;