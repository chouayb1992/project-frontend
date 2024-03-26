import axios from "axios";
import {ADD_CHAT} from "../constants/actionTypes";

export const addChat = (formData) =>async(dispatch)=> {
       try {
               //headers
      const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
          const result = await axios.post("/api/chats", formData, config);
          dispatch({type: ADD_CHAT, payload: result.data.response})
       } catch (error) {
        
       }
}


// export const getPosts = () => async(dispatch) => {
//    try {
//       dispatch({type: GET_POSTS_LOAD})
//       const result = await axios.get("/api/posts");
//       dispatch({type: GET_POSTS_SUCCESS, payload: result.data.response})
//    } catch (error) {
//       dispatch({type: GET_POSTS_FAIL, payload: error})
//    }
// }

