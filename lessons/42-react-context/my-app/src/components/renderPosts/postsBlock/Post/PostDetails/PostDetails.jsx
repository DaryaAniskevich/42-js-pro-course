import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./PostDetails.module.css";
import { useContext } from "react";
import { themeContext } from "../../../../themeContext/ThemeContext";
import MyLoader from "../../../../MyLoader/MyLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  postDetailsSelector,
  postDetailsIsLoadingSelector,
} from "../../../../../redux/selectors";
import { postDetailsGetData } from "../../../../../redux/PostDetailsRedux/actionsPostDetails";
import Comment from "./Comment/Comment";

const PostDetails = () => {
  const { theme } = useContext(themeContext);
  const { postId } = useParams();

  const dispatch = useDispatch();
  const post = useSelector(postDetailsSelector);
  const loading = useSelector(postDetailsIsLoadingSelector);
  useEffect(() => {
    dispatch(postDetailsGetData(postId));
  }, [dispatch, postId]);
  const comments = post.comments || [];

  return loading ? (
    <MyLoader />
  ) : (
    <div className={theme}>
      <div className={style.block}>
        <div className={style.post}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className={style.comments}>
          <h3 className={style.comments_header}>Comments</h3>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                body={comment.body}
                name={comment.name}
                email={comment.email}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
