export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
export const ALL_FILTER = "ALL_FILTER";
export const DONE_FILTER = "DONE_FILTER";
export const ACTIVE_FILTER = "ACTIVE_FILTER";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodoStatus = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: id,
});

export const showAllTodos = () => {
  return {
    type: ALL_FILTER,
    filter: "All",
  };
};

export const showDoneTodos = () => {
  return {
    type: DONE_FILTER,
    filter: "Done",
  };
};

export const showActiveTodos = () => {
  return {
    type: ACTIVE_FILTER,
    filter: "Active",
  };
};
