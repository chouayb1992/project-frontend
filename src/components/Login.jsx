import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Modal, Form} from "react-bootstrap";
import {userLogin} from "../redux/actions/user";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login=()=>{
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [show, setShow] = useState(false);

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    
     const handleLogin=()=>{
         const loggedUser = {email, password};
         dispatch(userLogin(loggedUser, navigate));
         setEmail("")
         setPassword("")
        //  navigate('/feed');
     }  
    return(
        <>
      <button className="btn-login" onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
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
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleLogin(); handleClose()}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Login;