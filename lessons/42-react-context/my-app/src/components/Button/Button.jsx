import "./Button.css";
import { useContext } from "react";
import { themeContext } from "../themeContext/ThemeContext";

const Button = (props) => {
  const { theme } = useContext(themeContext);
  return (
    <button
      onClick={props.onClick}
      className={`button ${theme} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
