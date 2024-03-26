import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import {Row, Col, Button, Form} from 'react-bootstrap';


function UserList() {
    const users = useSelector((state)=>state.userListReducer.users)
    const loadUser = useSelector((state)=>state.userListReducer.loadUser)

    const [searchText, setSearchText] = useState('')
    console.log(users)
    console.log(searchText)

  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "35rem", margin: "2rem 30rem"}}>
      <div>
      <h6>Find new friends:</h6>
      <Form inline style={{marginLeft:'25px'}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e)=>setSearchText(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>

        </Row>
      </Form>
      </div>
      
      {
        loadUser ? (<h3>Loading...</h3>) : users.length === 0 ? ("No users") : ( 
        
        users
        // .filter(user => user.name.includes(value))
        .filter((el)=>(el.name.toLowerCase()).includes(searchText.toLowerCase().trim()))
        .map((el)=>
           <UserCard user={el} key={el._id}/>)
        )
      }
    </div>
  );
}

export default UserList;
