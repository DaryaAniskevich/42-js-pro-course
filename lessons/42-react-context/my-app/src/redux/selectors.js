export const usersSelector = (state) => state.usersReducer.users;
export const usersIsLoadingSelector = (state) => state.usersReducer.isLoading;
export const themeSelector = (state) => state.themeReducer.theme;
export const postsSelector = (state) => state.postsReducer.posts;
export const postsIsLoadingSelector = (state) =>
  state.postsReducer.postsIsLoading;
export const postDetailsSelector = (state) =>
  state.postDetailsReducer.postDetails;
export const postDetailsIsLoadingSelector = (state) =>
  state.postDetailsReducer.isLoading;
