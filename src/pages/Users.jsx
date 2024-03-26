import React from "react";
import UserList from "./UserList";
import { useEffect } from "react";
import { getUsers } from "../redux/actions/userList";
import { useDispatch } from "react-redux";


function Users() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUsers())
    } ,[]
    )
  return (
    <div>
        <UserList/>
    </div>
  );
}

export default Users;
