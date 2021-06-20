import { createContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../../redux/selectors";
import { changeTheme } from "../../redux/ThemeRedux/actionsTheme";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const toggleTheme = useCallback(() => {
    theme === "light"
      ? dispatch(changeTheme("dark"))
      : dispatch(changeTheme("light"));
  }, [theme, dispatch]);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
