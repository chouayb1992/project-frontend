import axios from "axios";
import {GET_USERS_LOAD, GET_USERS_SUCCESS, GET_USERS_FAIL, GET_USER, EDIT_USER, FOLLOW_UNFOLLOW_USER} from "../constants/actionTypes";

export const getUsers = () => async(dispatch) => {
       try {
          dispatch({type: GET_USERS_LOAD})
          const result = await axios.get("/api/users");
          dispatch({type: GET_USERS_SUCCESS, payload: result.data.response})
       } catch (error) {
          dispatch({type: GET_USERS_FAIL, payload: error})
       }
}

export const getUser = (id) => async(dispatch) => {
    try {
       const result = await axios.get(`/api/users/${id}`);
       dispatch({type: GET_USER, payload: result.data.response})
    } catch (error) {
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try {
       await axios.delete(`/api/users/${id}`);
       dispatch(getUsers())
    } catch (error) {
    }
}

export const editUser = (id, formData) => async(dispatch) => {
    try {
       const result = await axios.put(`/api/users/${id}`, formData);
       dispatch({type: EDIT_USER, payload: result.data.response})
    } catch (error) {
    }
}


