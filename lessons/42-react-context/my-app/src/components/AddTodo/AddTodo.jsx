import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoActions";
import { useState } from "react";
import { useCallback } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const getTodoValue = useCallback((event) => {
    setTodoValue(event.target.value);
  }, []);
  const addTodoItem = useCallback(() => {
    dispatch(addTodo(todoValue));
    setTodoValue("");
  }, [dispatch, todoValue]);

  return (
    <Form layout="inline">
      <Form.Item label="Add todo for today">
        <Input value={todoValue} onChange={getTodoValue} />
      </Form.Item>
      <Button onClick={addTodoItem} type="primary">
        Add
      </Button>
    </Form>
  );
};

export default AddTodo;
