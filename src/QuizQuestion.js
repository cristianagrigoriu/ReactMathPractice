import React, { useState, useEffect } from "react";
import math from "mathjs";

export default function QuizQuestion({ operations }) {
  const [userResult, setUserResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(getRandomNumber());
  const [secondNumber, setSecondNumber] = useState(getRandomNumber());
  const [sign, setSign] = useState(getRandomOperation());
  const [isUserResultCorrect, setIsUserResultCorrect] = useState(false);
  const [isCheckEnabled, setIsCheckEnabled] = useState(true);
  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] = useState(false);

  useEffect(() => {
    setFirstNumber(getRandomNumber());
    setSecondNumber(getRandomNumber());
    setSign(getRandomOperation());
  }, []);

  const equalSign = "=";

  function getRandomOperation() {
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

    const realResult = math.eval(`${firstNumber} ${sign} ${secondNumber}`); //);

    const isResultCorrect = realResult === userResult;
    setIsUserResultCorrect(isResultCorrect);
    setIsCheckEnabled(!isResultCorrect);
  }

  return (
    <div>
      <span>
        <strong>
          {firstNumber} {sign} {secondNumber} {equalSign}
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
