// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
// import {Button, Modal, Form} from "react-bootstrap";
// import {addPost} from "../redux/actions/post"
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AddPost = () =>{
//      const navigate = useNavigate();
//      const dispatch = useDispatch();
//      const [show, setShow] = useState(false);

//      const [subject, setSubject] = useState("");
//      const [description, setDescription] = useState("");
//      const [image, setImage] = useState("");

     

//      const handleClose = () => setShow(false);
//      const handleShow = () => setShow(true);
    
//      const handleAdd=()=>{
//          const newPost = {subject, description, image};
//          dispatch(addPost(newPost));
//          setDescription("")
//         navigate('/posts')
//      }  

//      const uploadFileHandler = async (e) => {
//       const file = e.target.files[0]
//       const formData = new FormData()
//       formData.append('image', file)
  
//       try {

//                 //headers
//       const config = {
//         headers: {
//            "x-auth-token": localStorage.getItem('token')
//         }
//      }
//         const { data } = await axios.post('/api/upload', formData, config)
  
//         setImage(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     return(
//         <>
//       <Button variant="primary" onClick={handleShow}>
//         Add post
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add new post</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>

//         <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Subject</Form.Label>
//         <Form.Control type="text" placeholder="Enter subject" onChange={(e)=>setSubject(e.target.value)}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Description</Form.Label>
//         <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
    
//       <Form.Group controlId='image'>
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter image url'
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               ></Form.Control>
//               <Form.File
//                 id='image-file'
//                 label='Choose File'
//                 custom
//                 onChange={uploadFileHandler}
//               ></Form.File>
//             </Form.Group>

//     </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={()=>{handleAdd(); handleClose()}}>
//             Add post
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//     )
// }

// export default AddPost;