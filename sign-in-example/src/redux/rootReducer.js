import { combineReducers } from "redux";
import todoReducer from "./reducers";

export default combineReducers({
    todos: todoReducer
})