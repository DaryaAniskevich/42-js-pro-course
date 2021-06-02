import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../../App.css";

const ModalWindow = (props) => {
  const [show, setShow] = useState(props.show);
  return (
    <Modal show={props.show} onHide={props.handleModal}>
      <Modal.Header closeButton className={`${props.styleTheme}`}>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Address: {props.address}</p>
        <p>
          Email: {props.email}, Phone: {props.phone}
        </p>
      </Modal.Body>

      <Modal.Footer className={`${props.styleTheme}`}>
        <Button variant={props.styleTheme} onClick={props.handleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
