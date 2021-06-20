import { postsIsLoadingType, setPostsType } from "./actionsPosts";

const initialState = {
  posts: [],
  isLoading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case setPostsType: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case postsIsLoadingType: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
