export const changeTheme = (newTheme) => ({
  type: "CHANGE_THEME",
  payload: newTheme,
});

export const postsIsLoading = (bool) => ({
  type: "POSTS_IS_LOADING",
  payload: bool,
});

export const setPosts = (posts) => ({
  type: "SET_POSTS",
  payload: posts,
});

export const usersIsLoading = (bool) => ({
  type: "USERS_IS_LOADING",
  payload: bool,
});

export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

export const postDetailsIsLoading = (bool) => ({
  type: "POST_DETAILS_IS_LOADING",
  payload: bool,
});

export const setPostDetails = (postDetails) => ({
  type: "SET_POST_DETAILS",
  payload: postDetails,
});
