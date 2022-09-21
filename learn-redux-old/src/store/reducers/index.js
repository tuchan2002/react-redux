import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  myTodos: todoReducer,
});

export default rootReducer;
