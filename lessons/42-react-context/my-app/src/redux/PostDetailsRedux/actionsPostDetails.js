export const postDetailsIsLoadingType = "POST_DETAILS_IS_LOADING";
export const setPostDetailsType = "SET_POST_DETAILS";
export const postDetailsIsLoading = (bool) => ({
  type: postDetailsIsLoadingType,
  payload: bool,
});

export const setPostDetails = (postDetails) => ({
  type: setPostDetailsType,
  payload: postDetails,
});

export const postDetailsGetData = (postId) => async (dispatch) => {
  dispatch(postDetailsIsLoading(true));
  const postDetails = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments`
  ).then((res) => res.json());
  dispatch(postDetailsIsLoading(false));
  dispatch(setPostDetails(postDetails));
};
