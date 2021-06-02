import Post from "./post/Post";
import style from "./PostsBlock.module.css";

const PostsBlock = (props) => {
  return (
    <div className={style.postsBlock}>
      {props.posts.map((post) => {
        return (
          <Post
            post={post}
            key={post.id}
            author={props.authors.find((author) => author.id === post.userId)}
            styleTheme={props.styleTheme}
          />
        );
      })}
    </div>
  );
};

export default PostsBlock;
