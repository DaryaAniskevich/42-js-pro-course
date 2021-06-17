import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  showDoneTodos,
  showActiveTodos,
  showAllTodos,
} from "../../store/actions";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label>Show </label>
      <Button type="primary" onClick={() => dispatch(showAllTodos())}>
        All
      </Button>
      <Button onClick={() => dispatch(showActiveTodos())}>Active</Button>
      <Button onClick={() => dispatch(showDoneTodos())}>Done</Button>
    </>
  );
};

export default Filter;
