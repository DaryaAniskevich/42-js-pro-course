export const usersIsLoadingType = "USERS_IS_LOADING";
export const setUsersType = "SET_USERS";

export const usersIsLoading = (bool) => ({
  type: usersIsLoadingType,
  payload: bool,
});

export const setUsers = (users) => ({
  type: setUsersType,
  payload: users,
});

export const usersGetData = () => async (dispatch) => {
  dispatch(usersIsLoading(true));
  const users = await fetch("http://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  dispatch(usersIsLoading(false));
  dispatch(setUsers(users));
};
