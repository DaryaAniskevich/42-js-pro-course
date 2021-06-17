export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";

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
