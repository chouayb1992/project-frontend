import axios from "axios";
import { FOLLOW_UNFOLLOW_USER, UNFOLLOW_USER } from "../constants/actionTypes";

export const followUser = (id) => async(dispatch) => {
   try {

       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      // console.log(config)

      // const test = config.headers

      await axios.post(`/api/usersfollowUnfollow/${id}`, null , config);
      dispatch({type: FOLLOW_UNFOLLOW_USER})
   } catch (error) {
      console.log(error);
   }
}

export const unfollowUser = (id) => async(dispatch) => {
   try {

       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      // console.log(config)

      // const test = config.headers

      await axios.put(`/api/unfollow/${id}`, {}, config);
      dispatch({type: UNFOLLOW_USER})
   } catch (error) {
      console.log(error);
   }
}
