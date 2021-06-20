import {
  postDetailsIsLoadingType,
  setPostDetailsType,
} from "./actionsPostDetails";

const initialState = {
  postDetails: [],
  isLoading: false,
};

const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case setPostDetailsType: {
      return {
        ...state,
        postDetails: action.payload,
      };
    }
    case postDetailsIsLoadingType: {
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

export default postDetailsReducer;
