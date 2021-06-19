import { combineReducers, createStore, applyMiddleware } from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";
import { localStorageMiddleware } from "../store/middleware";

const reducers = combineReducers({ todo: todoReducer, filter: filterReducer });
const getItemsFromStore = () => {
  return JSON.parse(localStorage.getItem("state")) || undefined;
};
const store = createStore(
  reducers,
  getItemsFromStore(),
  applyMiddleware(localStorageMiddleware)
);

export default store;
