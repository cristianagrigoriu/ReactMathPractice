import React, { useState } from "react";
import "./styles.css";
import Greeting from "./Greeting";
import Settings from "./Settings";
import Quiz from "./Quiz";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const [settings, setSettings] = useState({
    numberOfOperations: 0,
    operationsType: ["+", "-"],
    displayAllAtOnce: false
  });

  function handleShowSettings() {
    setShowSettings(true);
  }

  function startQuiz(settings) {
    setShowSettings(false);
    setShowQuiz(true);
    setSettings(settings);
  }

  return (
    <div className="App">
      <h1 className="text-info">Welcome to Math Practice</h1>
      <Greeting submitHandler={handleShowSettings} />
      {showSettings ? <Settings onSettingsSelected={startQuiz} /> : null}
      {showQuiz ? <Quiz {...settings} /> : null}
    </div>
  );
}
