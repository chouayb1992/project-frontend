import {USER_LOADING, USER_REGISTER, USER_LOGIN, GET_AUTH_USER, USER_LOGOUT} from "../constants/actionTypes";

const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuth: false,
    isLoading: false

}

const authReducer = (state= initialState, {type , payload}) => {
    switch (type) {
        case USER_LOADING:
            return  {...state, isLoading: true}
        case USER_REGISTER:
        case USER_LOGIN:
            localStorage.setItem('token', payload.token)
            return {...state, isLoading: false, isAuth: true, ...payload}
        case GET_AUTH_USER:
            return {...state, isLoading: false, isAuth: true, ...payload}
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return {...state, isLoading: false, isAuth: false, token: null, user: null}
        default:
            return state;
    }
}

export default authReducer;