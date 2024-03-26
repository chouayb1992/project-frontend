import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Form, FloatingLabel, Button} from "react-bootstrap";
import { addChat } from "../redux/actions/chat";

const ChatForm=()=>{
     const dispatch = useDispatch();

     const [text, setText] = useState("");
     console.log(text)

     const handlePost=()=>{
        dispatch(addChat(text));
        setText("")
    } 
    
return(
    <>
        <Form>
        <FloatingLabel controlId="floatingTextarea2" label="Enter Question Here...">
        <Form.Control
          as="textarea"
          style={{ height: '100px', width: '350px'}}
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        </FloatingLabel>
        <Button variant="primary" onClick={handlePost}>
            Post
          </Button>
        </Form>
    </>
    )
}

export default ChatForm;
