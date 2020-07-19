import React, { useState } from "react";
import math from "mathjs";
import useOperation from "./useOperation";

export default function QuizQuestion({ operations }) {
  const [userResult, setUserResult] = useState(0);
  const [isUserResultCorrect, setIsUserResultCorrect] = useState(false);
  const [isCheckEnabled, setIsCheckEnabled] = useState(true);
  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] = useState(false);

  const operationExpression = useOperation(operations);

  const equalSign = "=";

  function handleUserResult(value) {
    setUserResult(Number(value));
  }

  function checkUserResult(value) {
    setUserHasSubmittedAnswer(Number(true));

    const realResult = math.eval(operationExpression);

    const isResultCorrect = realResult === userResult;
    setIsUserResultCorrect(isResultCorrect);
    setIsCheckEnabled(!isResultCorrect);
  }

  return (
    <div>
      <span>
        <strong>
          {operationExpression} {equalSign}
        </strong>
      </span>
      <input
        type="number"
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
