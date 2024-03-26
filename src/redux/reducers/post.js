import {ADD_POST, GET_POSTS_LOAD, GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_MY_POSTS_SUCCESS, LIKE_POST_SUCCESS, ADD_COMMENT, UPDATE_POST, GET_POST, GET_BOOKMARKED_POSTS_SUCCESS, GET_FOLLOWING_POSTS_SUCCESS} from "../constants/actionTypes";

const initialState = {
    post: null,
    updatedPost: {},
    topPosts: [],
    loadPosts: false,
    errors: [],
    myPosts: [],
    bookmarks: [],
    likes: null,
    success: false,
    postId: {},
    timeline: []


}

const postReducer = (state= initialState, {type , payload}) => {
    switch (type) {
        case ADD_POST:
            return  {...state, post: payload}
        case GET_POSTS_LOAD:
            return  {...state, loadPosts: true}
        case GET_POSTS_SUCCESS:
            return {...state, loadPosts: false, topPosts: payload}
        case GET_POSTS_FAIL:
            return {...state, errors: payload}
        case GET_MY_POSTS_SUCCESS:
            return {...state, loadPosts: false, myPosts: payload}
        case UPDATE_POST:
            return { ...state, updatedPost: payload }
        case GET_POST:
            return { ...state, postId: payload }
        case LIKE_POST_SUCCESS:
            return {...state, loadPost: false, likes: payload}
        case GET_BOOKMARKED_POSTS_SUCCESS:
            return {...state, loadPost: false, bookmarks: payload}
        case GET_FOLLOWING_POSTS_SUCCESS:
            return {...state, loadPost: false, timeline: payload}
        case ADD_COMMENT:
            return {...state, success: true}
        default:
            return state;
    }
}

export default postReducer;