import React from "react";
import Header from "../src/components/Navbar";
import Sidebar from "../src/containers/sidebar";
import Widgets from "../src/containers/widgets";
import "./index.css";
import Posts from "../src/containers/posts";

function App() {
  return (
    <>
      <Header />
      <div className="app-wrapper">
        <Sidebar />
        <Posts />
        <Widgets />
      </div>
    </>
  );
}

export default App;
