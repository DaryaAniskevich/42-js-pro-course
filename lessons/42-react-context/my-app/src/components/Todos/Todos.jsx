import { List, Typography, Button } from "antd";
import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../../store/todoActions";
import { getTodos, getFilter } from "../../store/selector";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const filter = useSelector(getFilter);

  const filteredTodos = useMemo(() => {
    if (filter === "Active") {
      return todos.filter((item) => !item.isDone);
    } else if (filter === "Done") {
      return todos.filter((item) => item.isDone);
    } else {
      return todos;
    }
  }, [todos, filter]);

  const onRemoveTodo = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );
  const onToggleTodoStatus = useCallback(
    (id) => {
      dispatch(toggleTodoStatus(id));
    },
    [dispatch]
  );

  return (
    <List
      dataSource={filteredTodos}
      bordered
      renderItem={(item) => (
        <List.Item>
          <Typography.Text delete={item.isDone}>{item.name}</Typography.Text>
          <div>
            <Button onClick={() => onToggleTodoStatus(item.id)}>
              {item.isDone ? "Undo" : "Done"}
            </Button>
            <Button onClick={() => onRemoveTodo(item.id)} danger>
              Delete
            </Button>
          </div>
        </List.Item>
      )}
    />
  );
};

export default Todos;
