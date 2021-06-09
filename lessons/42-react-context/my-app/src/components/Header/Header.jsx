import { useContext } from "react";
import { themeContext } from "../themeContext/ThemeContext";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import style from "./Header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div className={`${style.headerBlock} ${theme} `}>
      <header className={`${style.header} ${theme}`}>
        <NavLink
          to="/users"
          activeClassName={style.selected}
          className={`${style.headerItem} ${theme}`}
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          activeClassName={style.selected}
          className={`${style.headerItem} ${theme}`}
        >
          Posts
        </NavLink>
      </header>
      <Button onClick={toggleTheme} className={style.button_change}>
        Try {theme === "light" ? "dark" : "light"} theme
      </Button>
    </div>
  );
};

export default Header;
