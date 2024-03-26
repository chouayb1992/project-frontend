import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Modal, Form} from "react-bootstrap";
import {userRegister} from "../redux/actions/user";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register=()=>{
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [show, setShow] = useState(false);

     const [name, setName] = useState("");
     const [lastName, setlastName] = useState("");
     const [age, setAge] = useState(0);
     const [email, setEmail] = useState("");
     const [bio, setBio] = useState("");
     const [password, setPassword] = useState("");
     const [image, setImage] = useState("");

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);


     const handleRegister=()=>{
        //  const newUser = {name, lastName, age, email, password, image};
        const formData = new FormData();
        formData.append("image" , image)
        formData.append("name" , name)
        formData.append("lastName" , lastName)
        formData.append("age" , age)
        formData.append("email" , email)
        formData.append("password" , password)
        formData.append("bio" , bio)
         dispatch(userRegister(formData, navigate));
         setName("")
         setlastName("")
         setAge("")
         setEmail("")
         setPassword("")
     }  
    return(
        <>
      <button className="btn-register" onClick={handleShow}>
        Register
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" onChange={(e)=>setlastName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your last name" onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Bio</Form.Label>
        <Form.Control type="text" placeholder="Bio" onChange={(e)=>setBio(e.target.value)}/>
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
          <Button variant="primary" onClick={()=>{handleRegister(); handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Register;