import React, { useState, useEffect } from "react";
import math from "mathjs";
import useOperation from "./useOperation";

export default function QuizQuestion({ operations }) {
  const [userResult, setUserResult] = useState("");
  const [isUserResultCorrect, setIsUserResultCorrect] = useState(false);
  const [isCheckEnabled, setIsCheckEnabled] = useState(true);
  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] = useState(false);

  const operationExpression = useOperation(operations);

  const equalSign = "=";

  function handleUserResult(value) {
    setUserResult(Number(value));
    setUserHasSubmittedAnswer(Number(true));
  }

  function checkUserResult(value) {
    setUserResult(Number(value), () => {
      setUserHasSubmittedAnswer(Number(true));

      const realResult = math.eval(operationExpression);

      const isResultCorrect = realResult === userResult;

      console.log(userResult);
      console.log(realResult);

      setIsUserResultCorrect(isResultCorrect);
      setIsCheckEnabled(!isResultCorrect);
    });
  }

  //use check user result
  useEffect(() => {
    const realResult = math.eval(operationExpression);
    const isResultCorrect = realResult === userResult;

    setIsUserResultCorrect(isResultCorrect);
    setIsCheckEnabled(!isResultCorrect);
  }, [userResult, operationExpression]);

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
        value={userResult}
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
