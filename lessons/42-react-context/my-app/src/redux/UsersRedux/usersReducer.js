import { usersIsLoadingType, setUsersType } from "./actionsUsers";

const initialState = {
  users: [],
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUsersType: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case usersIsLoadingType: {
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

export default usersReducer;
