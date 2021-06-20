export const postsIsLoadingType = "POSTS_IS_LOADING";
export const setPostsType = "SET_POSTS";

export const postsIsLoading = (bool) => ({
  type: postsIsLoadingType,
  payload: bool,
});

export const setPosts = (posts) => ({
  type: setPostsType,
  payload: posts,
});

export const postsGetData = () => async (dispatch) => {
  dispatch(postsIsLoading(true));
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_expand=user"
  ).then((res) => res.json());
  dispatch(postsIsLoading(false));
  dispatch(setPosts(posts));
};
