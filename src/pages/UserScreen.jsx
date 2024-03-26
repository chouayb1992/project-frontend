import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/userList";
import { useParams } from "react-router-dom";



function UserScreen() {
     
    const {id} = useParams()
    const user = useSelector((state)=> state.userListReducer.user)
    const isLoading = useSelector((state)=> state.userListReducer.loadUser)

    
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getUser(id))
      
    }, [])
    console.log(user);
    console.log(user.posts);

  return (
    <div style={{marginLeft: "30rem", width: "30rem"}}>
        <h1>User profile:</h1>
        {
            isLoading ? (<h3>Loading...</h3>) :
        (
        <>
        <h4>{user.name}</h4>
        <h4>{user.lastName}</h4>
        <h4>{user.age}</h4>
        <h4>{user.email}</h4>
        {user.posts?.map(post => <h4>{post.subject}</h4>)}
        </>
        )}
        
        
    </div>
  );
}

export default UserScreen;