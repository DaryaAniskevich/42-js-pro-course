import { setUsers, usersIsLoading } from "./actions";

const initialState = {
  users: [],
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "USERS_IS_LOADING": {
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

const usersGetData = () => async (dispatch) => {
  dispatch(usersIsLoading(true));
  const users = await fetch("http://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  dispatch(usersIsLoading(false));
  dispatch(setUsers(users));
};

export default usersReducer;
