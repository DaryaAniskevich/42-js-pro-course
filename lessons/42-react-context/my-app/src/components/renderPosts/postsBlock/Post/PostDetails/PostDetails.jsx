import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./PostDetails.module.css";
import { useContext } from "react";
import { themeContext } from "../../../../themeContext/ThemeContext";

const PostDetails = () => {
  const { theme } = useContext(themeContext);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    Promise.all(
      [
        `http://jsonplaceholder.typicode.com/posts/${postId}`,
        `http://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      ].map((url) => fetch(url))
    )
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((results) => {
        setComments(results[1]);
        setPost(results[0]);
      });
  }, [postId]);

  return post ? (
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
              <div className={style.commentsItem}>
                <p className={style.commentsItem_name}>{comment.name}</p>

                <p className={style.commentsItem_body}>{comment.body}</p>
                <p className={style.commentsItem_email}>{comment.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
};

export default PostDetails;
