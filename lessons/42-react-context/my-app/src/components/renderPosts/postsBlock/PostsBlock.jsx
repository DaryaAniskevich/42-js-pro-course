import Post from "./Post/Post";
import style from "./PostsBlock.module.css";

const PostsBlock = (props) => {
  return (
    <div className={style.postsBlock}>
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            author={post.user}
            id={post.id}
          />
        );
      })}
    </div>
  );
};

export default PostsBlock;
