import { List, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../../store/actions";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    state.todoReducer.filter === "All"
      ? state.todoReducer.todos
      : state.todoReducer.filteredTodos
  );

  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const onToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <List
      dataSource={todos}
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
