import axios from "axios";
import {USER_LOADING, USER_REGISTER, USER_LOGIN, USER_LOGOUT, GET_AUTH_USER} from "../constants/actionTypes";

export const userRegister = (formData, navigate)=>async(dispatch)=> {
   dispatch(userLoading())
       try {
          const result = await axios.post("/api/register", formData);
          dispatch({type: USER_REGISTER, payload: result.data})
          navigate("/feed")
       } catch (error) {
        
       }
}

export const userLogin = (formData, navigate)=>async(dispatch)=> {
   dispatch(userLoading())
    try {
       const result = await axios.post("/api/login", formData);
       dispatch({type: USER_LOGIN, payload: result.data})
       navigate("/feed")
    } catch (error) {
     
    }
}

export const getAuthUser = ()=>async(dispatch)=> {
   dispatch(userLoading())
   try {
      //headers
      const config = {
         headers: {
            "x-auth-token": localStorage.getItem('token')
         }
      }
      const res = await axios.get('/api/user', config)
      dispatch({
           type: GET_AUTH_USER,
           payload: res.data
      })
   } catch (error) {
    
   }
}

export const userLogout = ()=>async(dispatch)=> {
   try {
      dispatch({ type: USER_LOGOUT})
   } catch (error) {
    
   }
}

export const userLoading = ()=>async(dispatch)=> {
   try {
      dispatch({ type: USER_LOADING})
   } catch (error) {
    
   }
}




