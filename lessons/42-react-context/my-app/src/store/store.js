import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

const store = createStore(combineReducers({ todoReducer, filterReducer }));

export default store;
