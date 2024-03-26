import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { myPosts } from "../redux/actions/post";
import { useDispatch} from "react-redux";
import PostList from "./PostList";
import UserInfo from "./UserInfo";


function Profile() {
    const user = useSelector((state)=> state.authReducer.user)
    const isLoading = useSelector((state)=> state.authReducer.isLoading)
    // const { name, lastName, email} = user

    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(myPosts())
   } ,[]
    )

  return (
    <>
       <div className="user-info">
       <UserInfo/>
       </div>
      <div >
        <PostList/>
    </div>
    </>
  );
}

export default Profile;