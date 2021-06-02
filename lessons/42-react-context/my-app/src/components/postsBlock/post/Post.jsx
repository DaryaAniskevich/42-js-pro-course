import style from "./Post.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ModalWindow from "../../modalWindow/ModalWindow";
import "../../../App.css";
let classNames = require("classnames");

const Post = (props) => {
  const address =
    props.author.address.city +
    ", " +
    props.author.address.street +
    ", " +
    props.author.address.suite;

  const [show, setShow] = useState(false);
  const handleModal = () => {
    return show ? setShow(false) : setShow(true);
  };
  return (
    <Card className={style.cardItem}>
      <Card.Body className={props.styleTheme}>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted" onClick={handleModal}>
        Author: <Card.Subtitle href="">{props.author.name}</Card.Subtitle>
        {show && (
          <ModalWindow
            name={props.author.name}
            email={props.author.email}
            phone={props.author.phone}
            address={address}
            handleModal={handleModal}
            show={show}
            styleTheme={props.styleTheme}
          />
        )}
      </Card.Footer>
    </Card>
  );
};

export default Post;
