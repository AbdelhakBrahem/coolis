import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import postReducer from "./postReducer";

export default combineReducers({ auth: AuthReducer ,post:postReducer});
