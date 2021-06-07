import { useContext } from "react";
import Button from "../Button/Button";
import { themeContext } from "../themeContext/ThemeContext";
import "./Modal.css";

const Modal = (props) => {
  const { theme } = useContext(themeContext);
  return (
    <div
      show={props.show}
      className={props.show ? "modal modal_active" : "modal"}
      onClick={props.handleModal}
    >
      <div
        className={`modal__content ${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal__header ${theme}`}>
          <h3 className="modal__header_head ">{props.name}</h3>
          <Button
            className={`modal__button_close ${theme}`}
            onClick={props.handleModal}
          >
            x
          </Button>
        </div>

        <div className={`modal__body ${theme}`}>
          <p>Address: {props.address}</p>
          <p className="modal__body_links">
            Email: {props.email}, Phone: {props.phone}
          </p>
        </div>
        <div className={`modal__footer ${theme}`}>
          <Button
            className={`modal__footer-button ${theme}`}
            onClick={props.handleModal}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
