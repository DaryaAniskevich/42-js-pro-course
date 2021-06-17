import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO_STATUS,
  ALL_FILTER,
  DONE_FILTER,
  ACTIVE_FILTER,
} from "./actions";

const initialState = {
  todos: [],
  filter: "All",
  filteredTodos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: Math.random().toString(16).slice(3),
        name: action.payload,
        isDone: false,
      };
      return {
        ...state,
        todos: [newTodo].concat(state.todos),
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    }
    case TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          } else {
            return item;
          }
        }),
      };
    }
    case ALL_FILTER: {
      return {
        ...state,
        filter: action.filter,
        filteredTodos: state.todos,
      };
    }
    case DONE_FILTER: {
      return {
        ...state,
        filter: action.filter,
        filteredTodos: state.todos.filter((item) => item.isDone),
      };
    }
    case ACTIVE_FILTER: {
      return {
        ...state,
        filter: action.filter,
        filteredTodos: state.todos.filter((item) => !item.isDone),
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
