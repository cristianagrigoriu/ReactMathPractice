import React, { useState } from "react";
import "./styles.css";
import Greeting from "./Greeting";
import Settings from "./Settings";
import Quiz from "./Quiz";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  function handleShowSettings() {
    setShowSettings(true);
  }

  function startQuiz(settings) {
    setShowSettings(false);
    setShowQuiz(true);
    const { numberOfOperations, operationsType, displayAllAtOnce } = settings;
    console.log(numberOfOperations);
  }

  return (
    <div className="App">
      <h1>Welcome to Math Practice</h1>
      <Greeting submitHandler={handleShowSettings} />
      {showSettings ? <Settings onSettingsSelected={startQuiz} /> : null}
      {showQuiz ? <Quiz /> : null}
    </div>
  );
}
