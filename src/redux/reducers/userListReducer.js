import {GET_USERS_LOAD, GET_USERS_SUCCESS, GET_USERS_FAIL, GET_USER} from "../constants/actionTypes";

const initialState = {
    users: [],
    user: {},
    loadUser: false,
    errors: [],
    editUser: ""

}

const userListReducer = (state= initialState, {type , payload}) => {
    switch (type) {
        case GET_USERS_LOAD:
            return  {...state, loadUser: true}
        case GET_USERS_SUCCESS:
            return {...state, loadUser: false, users: payload}
        case GET_USERS_FAIL:
            return {...state, errors: payload, loadUser: false}
        case GET_USERS_FAIL:
            return {...state, errors: payload}
        case GET_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}

export default userListReducer;