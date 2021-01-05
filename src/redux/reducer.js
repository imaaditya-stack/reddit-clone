import { TOOGLE_THEME } from "./actionTypes";

const preferedTheme = localStorage.getItem("userPreferedTheme");

const INIT = { darkThemeEnabled: preferedTheme === "dark" ? true : false };

const themeReducer = (state = INIT, action) => {
  switch (action.type) {
    case TOOGLE_THEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default themeReducer;
