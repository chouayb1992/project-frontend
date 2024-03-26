import { ADD_CHAT } from "../constants/actionTypes";


const initialState = {
    chat: null,
    chats: [],
    loadPosts: false,
    errors: [],


}

const chatReducer = (state= initialState, {type , payload}) => {
    switch (type) {
        case ADD_CHAT:
            return  {...state, chat: payload}
        default:
            return state;
    }
}

export default chatReducer;