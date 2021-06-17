import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS } from "./todoActions";

const initialState = {
  todos: [],
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
    default: {
      return state;
    }
  }
};

export default todoReducer;
