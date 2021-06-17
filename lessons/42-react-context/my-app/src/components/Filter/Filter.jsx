import { Button } from "antd";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/filterActions";

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

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
