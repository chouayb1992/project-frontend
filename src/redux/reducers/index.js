import {combineReducers} from "redux";
import authReducer from "./user";
import userListReducer from "./userListReducer";
import postReducer from "./post";
import chatReducer from "./chat";

const rootReducer = combineReducers({authReducer, userListReducer, postReducer, chatReducer});



export default rootReducer;