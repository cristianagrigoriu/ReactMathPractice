import React, { useState } from "react";
import "./styles.css";
import Greeting from "./Greeting";
import Settings from "./Settings";
import Quiz from "./Quiz";
import QuizQuestion from "./QuizQuestion";

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
    // console.log(numberOfOperations);
    // console.log(operationsType);
    // console.log(displayAllAtOnce);
  }

  return (
    <div className="App">
      <h1>Welcome to Math Practice</h1>
      <QuizQuestion operations={settings.operationsType} />
      <Greeting submitHandler={handleShowSettings} />
      {showSettings ? <Settings onSettingsSelected={startQuiz} /> : null}
      {showQuiz ? <Quiz /> : null}
    </div>
  );
}
