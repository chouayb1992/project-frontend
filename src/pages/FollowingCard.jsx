import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Modal, Form, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { getUser } from "../redux/actions/userList";
import { useParams } from "react-router-dom";
import './FollowingCard.css'
import { unfollowUser } from "../redux/actions/follow";


function FollowingCard({following}) {
    console.log(following)
    
    const dispatch = useDispatch()
    const deleteFollowing = () =>{
       dispatch(unfollowUser(following._id))
  }
 


  return (
    <>

    

    <Card style={{ width: '28rem', margin: '1rem'}}>
      {/* <Card.Img variant="top" src={`/../uploads/${post.image}`} alt={post.subject} /> */}
      <Card.Body className="follower">
        <img className="following-pic" src={`/../uploads/${following.image}`}/>
        <h3>{following.name} {following.lastName}</h3>
        <button variant="secondary" onClick={deleteFollowing}>Unfollow</button> 
      </Card.Body>
    </Card>
    </>
  );
}

export default FollowingCard;

