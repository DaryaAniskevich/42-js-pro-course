import { Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/filterActions";

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = useCallback(
    (filter) => {
      dispatch(changeFilter(filter));
    },
    [dispatch]
  );

  return (
    <>
      <label>Show </label>
      <Button type="primary" onClick={() => onChangeFilter("All")}>
        All
      </Button>
      <Button onClick={() => onChangeFilter("Active")}>Active</Button>
      <Button onClick={() => onChangeFilter("Done")}>Done</Button>
    </>
  );
};

export default Filter;
