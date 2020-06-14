import React from "react";
import "./styles.css";
import Greeting from "./Greeting";
import Settings from "./Settings";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Math Practice</h1>
      <Greeting />
      <Settings showSettings="true" />
    </div>
  );
}
