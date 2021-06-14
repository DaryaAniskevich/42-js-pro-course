import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import postDetailsReducer from "./postDetailsReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  themeReducer,
  postsReducer,
  usersReducer,
  postDetailsReducer,
});

export default rootReducer;
