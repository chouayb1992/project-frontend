import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Modal, Form, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { deletePost, likePost, commentPost, updatePost, getPost, savePost } from '../redux/actions/post';
import { LiaCommentDots } from "react-icons/lia";
import { GrLike } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
import './PostCard.css'
import CommentList from "./CommentList";
import { CiBookmark } from "react-icons/ci";


function BookmarkCard({post}) {
  // console.log("comments : " , post)
    const dispatch = useDispatch();
    const post_found = useSelector((state)=> state.postReducer.postId)
    // console.log('post_found : ' , post_found)
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const [comment, setComment] = useState("");
    useEffect(()=>{
      if (post_found) {
        setSubject(post_found.subject)
        setDescription(post_found.description)
      }
    },[post_found])
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

console.log('subject ;' ,subject)
    const handleCloseEdit = () => setLgShow(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const commentOnePost=()=>{
      // const newComment = {comment};
      dispatch(commentPost(post._id, comment));
      setComment("")
     // navigate('/posts')
  } 
  
    const deleteOnePost = () =>{
        dispatch(deletePost(post._id))
    }

   
    const getOnePost = () => {
      dispatch(getPost(post._id))
}

    const updateOnePost =()=>{
    const formData = new FormData();
    // formData.append("image" , image)
    formData.append("description" , description)
    formData.append("subject" , subject)

      console.log("form data : " , formData)
       dispatch(updatePost(post_found._id, {subject , description}));
   }  
   
    const likeOnePost = () =>{
       dispatch(likePost(post._id))
  }

   const saveOnePost = () =>{
    dispatch(savePost(post._id))
}
    
  const listItems = post.comments.map((comment) =>
  <li key={comment._id}>
    {/* <img src={`/../uploads/${comment.author.image}`}/> */}
    {comment.author.name}
    {comment.comment}
  </li>
);



  return (
    <>
      <Modal
        // size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        // aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Save post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

<Form.Group className="mb-3" controlId="formBasicName">
<Form.Label>Subject</Form.Label>
<Form.Control type="text" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicName">
<Form.Label>Description</Form.Label>
<Form.Control type="text" name="description" value={description}  onChange={(e)=>setDescription(e.target.value)}/>
</Form.Group>

{/* <Form.Group className="mb-3" controlId="formBasicName">
<Form.Label>Image</Form.Label>
<Form.Control type="file" name="image" value={Post.image} onChange={(e)=>setImage(e.target.files[0])}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}


</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{updateOnePost() ; handleCloseEdit()}}>
            Save post
          </Button>
        </Modal.Footer>
      </Modal>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="text" placeholder="Enter comment" onChange={(e)=>setComment(e.target.value)}/>
        </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{commentOnePost(); handleClose()}}>
            Add comment
          </Button>
        </Modal.Footer>
      </Modal>

      
        
      

    <Card style={{ width: '28rem', margin: '1rem'}}>
      <Card.Img variant="top" src={`/../uploads/${post.image}`} alt={post.subject} />
      <Card.Body>
        {/* <Card.Title className="author">{post.author.name} {post.author.lastName} </Card.Title> */}
        <Card.Title className="subject">{post.subject}</Card.Title>
        <Card.Title className="description">{post.description}</Card.Title>
        <Card.Title className="time">{new Date(post.createdAt).toLocaleString('en-US')}</Card.Title>
        {/* <Card.Title>{post.author.name}</Card.Title> */}
      
        <div className="post-btn">
        <button  onClick={likeOnePost}><GrLike /> {post.likes.length}</button>
        <button onClick={handleShow}><LiaCommentDots /> {post.comments.length}</button>
        {/* <button onClick={() => {setLgShow(true); getOnePost()}}><FaExchangeAlt /></button> */}
        <button  onClick={saveOnePost}><CiBookmark /></button>
        
        
        </div>
        <ul className="comments">{listItems}</ul>

      </Card.Body>
    </Card>
    </>
  );
}




export default BookmarkCard;