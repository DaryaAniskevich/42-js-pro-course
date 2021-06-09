import { useState, useEffect } from "react";
import style from "./Users.module.css";
import { useContext } from "react";
import { themeContext } from "../themeContext/ThemeContext";

const Users = () => {
  const { theme } = useContext(themeContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUsers(result));
  }, []);

  return (
    <div className={theme}>
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
