import React, { useState } from "react";
import math from "mathjs";

export default function QuizQuestion({ operations }) {
  const [userResult, setUserResult] = useState(0);
  const [operationDetails] = useState({
    firstNumber: getRandomNumber(),
    sign: getRandomSign(),
    secondNumber: getRandomNumber()
  });
  const [isUserResultCorrect, setIsUserResultCorrect] = useState(false);
  const [isCheckEnabled, setIsCheckEnabled] = useState(true);
  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] = useState(false);

  const equalSign = "=";

  function getRandomSign() {
    let randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function handleUserResult(value) {
    setUserResult(Number(value));
  }

  function checkUserResult() {
    setUserHasSubmittedAnswer(true);

    const realResult = math.eval(
      `${operationDetails.firstNumber} ${operationDetails.sign} ${
        operationDetails.secondNumber
      }`
    );

    const isResultCorrect = realResult === userResult;
    setIsUserResultCorrect(isResultCorrect);
    setIsCheckEnabled(!isResultCorrect);
  }

  return (
    <div>
      <span>
        <strong>
          {operationDetails.firstNumber}
          {operationDetails.sign}
          {operationDetails.secondNumber}
          {equalSign}
        </strong>
      </span>
      <input
        className={
          isUserResultCorrect
            ? "bg-success"
            : userHasSubmittedAnswer
            ? "bg-danger"
            : "bg-light"
        }
        onChange={event => handleUserResult(event.target.value)}
      />
      <button
        className="btn btn-dark"
        disabled={!isCheckEnabled}
        onClick={checkUserResult}
      >
        Check
      </button>
    </div>
  );
}
