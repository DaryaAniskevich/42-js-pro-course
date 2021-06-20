export const changeThemeType = "CHANGE_THEME";

export const changeTheme = (newTheme) => ({
  type: changeThemeType,
  payload: newTheme,
});
