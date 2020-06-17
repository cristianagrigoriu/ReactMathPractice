import React, { useState } from "react";
import "./styles.css";
import Greeting from "./Greeting";
import Settings from "./Settings";

export default function App() {
  const [showSettings, setShowSettings] = useState("false");

  function handleShowSettings() {
    setShowSettings(true);
  }

  return (
    <div className="App">
      <h1>Welcome to Math Practice</h1>
      <Greeting submitHandler={handleShowSettings} />
      <Settings showSettings={showSettings} />
    </div>
  );
}
