import { postsIsLoading, setPosts } from "./actions";

const initialState = {
  posts: [],
  isLoading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "POSTS_IS_LOADING": {
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

const postsGetData = () => async (dispatch) => {
  dispatch(postsIsLoading(true));
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_expand=users"
  ).then((res) => res.json());
  dispatch(postsIsLoading(false));
  dispatch(setPosts(posts));
};

export default postsReducer;
