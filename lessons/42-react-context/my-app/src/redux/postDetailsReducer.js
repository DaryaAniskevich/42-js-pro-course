import { bindActionCreators } from "redux";
import { postDetailsIsLoading, setPostDetails } from "./actions";

const initialState = {
  postDetails: [],
  isLoading: false,
};

const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST_DETAILS": {
      return {
        ...state,
        postDetails: action.payload,
      };
    }
    case "POST_DETAILS_IS_LOADING": {
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

const postDetailsGetData = () => async (dispatch) => {
  dispatch(postDetailsIsLoading(true));
  const postDetails = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments`
  ).then((res) => res.json());
  dispatch(postDetailsIsLoading(false));
  dispatch(setPostDetails(postDetails));
};

export default postDetailsReducer;
