import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { myPosts } from "../redux/actions/post";
import { useDispatch} from "react-redux";
import PostList from "./PostList";
import './UserInfo.css'


function UserInfo() {
    const user = useSelector((state)=> state.authReducer.user)
    console.log(user)

  return (
    <>
       <div className="user-info">
        {/* <h6>Profile page</h6>
         {/* {
            isLoading ? (<h3>Loading...</h3>) :
        ( */}
        <> 
        <img src={`/../uploads/${user.image}`}/>
        <h4>{user.name}  {user.lastName}</h4>
        <h6>{user.email}</h6>
        <div className="info">
        <h6 className="followings">{user.followings.length} Followings</h6>
        <h6>{user.followers.length} Followers</h6>
        </div>
        <h6 className="bio">Bio: {user.bio}</h6>

        </>
        {/* )} */}
        </div> 
      
    </>
  );
}

export default UserInfo;