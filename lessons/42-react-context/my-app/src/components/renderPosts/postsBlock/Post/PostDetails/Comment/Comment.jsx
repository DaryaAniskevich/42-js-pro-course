import style from "./Comment.module.css";

const Comment = (props) => {
  return (
    <div className={style.item}>
      <p className={style.name}>{props.name}</p>

      <p className={style.body}>{props.body}</p>
      <p className={style.email}>{props.email}</p>
    </div>
  );
};

export default Comment;
