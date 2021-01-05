import { createStore } from "redux";
import themeReducer from "./reducer";

const store = createStore(themeReducer);

store.subscribe(() => {
  const isDarkMode = store.getState().darkThemeEnabled;
  isDarkMode
    ? localStorage.setItem("userPreferedTheme", "dark")
    : localStorage.setItem("userPreferedTheme", "light");
});

export { store };
