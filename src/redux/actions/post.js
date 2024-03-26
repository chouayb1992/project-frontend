import axios from "axios";
import {ADD_POST, GET_BOOKMARKED_POSTS_SUCCESS, GET_POSTS_LOAD, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_MY_POSTS_SUCCESS, LIKE_POST_SUCCESS, SAVE_POST_SUCCESS, ADD_COMMENT, GET_POST, GET_FOLLOWING_POSTS_SUCCESS} from "../constants/actionTypes";

export const addPost = (formData)=>async(dispatch)=> {
       try {
               //headers
      const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
          const result = await axios.post("/api/posts", formData ,config);
          dispatch(myPosts())
          dispatch({type: ADD_POST, payload: result.data.reponse})
       } catch (error) {
        
       }
}


export const getTopPosts = () => async(dispatch) => {
   try {
      dispatch({type: GET_POSTS_LOAD})
      const result = await axios.get("/api/posts/top");
      console.log(result.data.response)
      dispatch({type: GET_POSTS_SUCCESS, payload: result.data.response})
   } catch (error) {
      dispatch({type: GET_POSTS_FAIL, payload: error})
   }
}


export const myPosts = () => async(dispatch) => {
   try {
       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      const result = await axios.get(`/api/posts/`, config);
      console.log(result.data.response)
      dispatch({type: GET_MY_POSTS_SUCCESS, payload: result.data.response})
   } catch (error) {
   }
}


export const bookmarkedPosts = () => async(dispatch) => {
   try {
       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      const result = await axios.get(`/api/posts/bookmarks`, config);
      console.log("Bookmarks post.js", result.data.response)
      dispatch({type: GET_BOOKMARKED_POSTS_SUCCESS, payload: result.data.response})
   } catch (error) {
   }
}


export const getPost = (id) => async(dispatch) => {
   try {
       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      const result = await axios.get(`/api/post/${id}`, config);
      console.log(result.data.response)
      dispatch({type: GET_POST, payload: result.data.response})
   } catch (error) {
   }
}

export const likePost = (id) => async(dispatch) => {
   try {
       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      const result = await axios.post(`/api/posts/${id}/like`, null, config);
      dispatch(myPosts())
      dispatch({type: LIKE_POST_SUCCESS, payload: result.data.response})
   } catch (error) {
   }
}

export const savePost = (id) => async(dispatch) => {
   try {
       //headers
       const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      const result = await axios.post(`/api/posts/${id}/save`, null, config);
      dispatch(myPosts())
      dispatch({type: SAVE_POST_SUCCESS, payload: result.data.response})
   } catch (error) {
   }
}


export const deletePost = (id) => async(dispatch) => {
   try {

        //headers
        const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      await axios.delete(`/api/posts/${id}`, config);
      dispatch(myPosts())
   } catch (error) {
   }
}

export const commentPost = (id , comment) => async(dispatch) => {
   // console.log("comment :: " , comment); X
    try {

        //headers
        const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      await axios.post(`/api/posts/${id}/comment`,{comment} , config);
      dispatch(myPosts())
      console.log("res")
      dispatch({type: ADD_COMMENT})
      // dispatch(myPosts())
   } catch (error) {
      console.log(error);
   }
}




export const updatePost = (id, formData) => async (dispatch) => {
   console.log("formDataAction : " , formData)
   try {
      
      //headers
      const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }

      const result = await axios.put(`/api/posts/${id}`, formData ,config);
      // dispatch({type: UPDATE_POST, payload: result.data.response})
      dispatch(myPosts())
   } catch (error) {
      console.log(error);
   }
     
 }
 

 export const timelinePosts = () => async (dispatch) => {
   
   try {
      
      //headers
      const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }

      const result = await axios.get(`/api/timeline`, config);
      dispatch({type: GET_FOLLOWING_POSTS_SUCCESS, payload: result.data})
      // dispatch(myPosts())
   } catch (error) {
      console.log(error);
   }
     
 }
 