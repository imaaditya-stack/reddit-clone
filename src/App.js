import React from "react";
import Header from "../src/components/Navbar";
import Sidebar from "../src/containers/sidebar";
import Widgets from "../src/containers/widgets";
import "./index.css";
import Posts from "../src/containers/posts";
import { ThemeProvider } from "styled-components";
import { MainWrapper } from "./theme/Wrapper";
import { LightTheme, DarkTheme } from "./theme/config";
import { useSelector } from "react-redux";

function App() {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <ThemeProvider theme={!darkThemeEnabled ? LightTheme : DarkTheme}>
      <Header />
      <MainWrapper className="app-wrapper">
        <Sidebar />
        <Posts />
        <Widgets />
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
