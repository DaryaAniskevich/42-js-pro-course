import "./Post.css";
import { useState, useContext } from "react";

import { themeContext } from "../../../themeContext/ThemeContext";
import Modal from "../../../Modal/Modal";

/* */
const Post = (props) => {
  const { theme } = useContext(themeContext);
  const address = `${props.author.address.city} ${props.author.address.street} ${props.author.address.suite}`;

  const [show, setShow] = useState(false);
  const handleModal = () => {
    return show ? setShow(false) : setShow(true);
  };
  console.log(show);
  return (
    <div className={`cardItem  ${theme}`}>
      <div className={`cardItem__body`}>
        <h2 className="cardItem__header">{props.post.title}</h2>
        <div className="cardItem__content">{props.post.body}</div>
      </div>
      <div
        onClick={handleModal}
        className={`cadrItem__footer  cadrItem__footer-${theme}`}
      >
        {show ? (
          <Modal
            name={props.author.name}
            email={props.author.email}
            phone={props.author.phone}
            address={address}
            handleModal={handleModal}
            show={show}
          />
        ) : null}
        Author:{" "}
        <span className="cadrItem__footer_link">{props.author.name}</span>
      </div>
    </div>
  );
};

export default Post;
