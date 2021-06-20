import { combineReducers } from "redux";
import postsReducer from "./PostsRedux/postsReducer";
import usersReducer from "./UsersRedux/usersReducer";
import postDetailsReducer from "./PostDetailsRedux/postDetailsReducer";
import themeReducer from "./ThemeRedux/themeReducer";

const rootReducer = combineReducers({
  themeReducer,
  postsReducer,
  usersReducer,
  postDetailsReducer,
});

export default rootReducer;
