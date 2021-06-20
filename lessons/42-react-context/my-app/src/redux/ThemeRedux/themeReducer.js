import { changeThemeType } from "./actionsTheme";

const themeReducer = (state = { theme: "light" }, action) => {
  switch (action.type) {
    case changeThemeType: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
