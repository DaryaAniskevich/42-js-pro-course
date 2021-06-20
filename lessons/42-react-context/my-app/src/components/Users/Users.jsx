import { useEffect } from "react";
import style from "./Users.module.css";
import { useContext } from "react";
import { themeContext } from "../themeContext/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { usersGetData } from "../../redux/UsersRedux/actionsUsers";
import { usersSelector, usersIsLoadingSelector } from "../../redux/selectors";
import MyLoader from "../MyLoader/MyLoader";

const Users = () => {
  const { theme } = useContext(themeContext);

  const dispatch = useDispatch();

  const users = useSelector(usersSelector);
  const loading = useSelector(usersIsLoadingSelector);

  useEffect(() => {
    dispatch(usersGetData());
  }, [dispatch]);

  return (
    <div className={theme}>
      {loading ? <MyLoader /> : null}
      <div className={style.block}>
        {users.map((user) => (
          <div key={user.id} className={style.item}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
