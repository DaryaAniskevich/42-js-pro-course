import { Button } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/filterActions";
import { getFilter } from "../../store/selector";
import { filterStatus } from "../values";

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = useCallback(
    (filter) => {
      dispatch(changeFilter(filter));
    },
    [dispatch]
  );

  const filter = useSelector(getFilter);
  console.log(typeof filterStatus.done);
  return (
    <>
      <label>Show </label>
      <Button
        type={filter === filterStatus.all ? "primary" : "default"}
        onClick={() => onChangeFilter(filterStatus.all)}
      >
        All
      </Button>
      <Button
        type={filter === filterStatus.active ? "primary" : "default"}
        onClick={() => onChangeFilter(filterStatus.active)}
      >
        Active
      </Button>
      <Button
        type={filter === filterStatus.done ? "primary" : "default"}
        onClick={() => onChangeFilter(filterStatus.done)}
      >
        Done
      </Button>
    </>
  );
};

export default Filter;
