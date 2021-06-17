import { List, Typography, Button } from "antd";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../../store/todoActions";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const filter = useSelector((state) => state.filterReducer.filter);

  const filteredTodos = useMemo(() => {
    if (filter === "Active") {
      return todos.filter((item) => !item.isDone);
    } else if (filter === "Done") {
      return todos.filter((item) => item.isDone);
    } else {
      return todos;
    }
  }, [todos, filter]);

  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const onToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

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
