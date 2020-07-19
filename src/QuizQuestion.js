import React, { useState, useEffect } from "react";
import math from "mathjs";
import useOperation from "./useOperation";

export default function QuizQuestion(
  { operations },
  { isUserResultCorrectForQuestion }
) {
  const [userResult, setUserResult] = useState("");
  const [isUserResultCorrect, setIsUserResultCorrect] = useState(false);

  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] = useState(false);

  const operationExpression = useOperation(operations);

  const equalSign = "=";

  function handleUserResult(value) {
    setUserResult(Number(value));
    setUserHasSubmittedAnswer(Number(true));
  }

  //use check user result
  useEffect(() => {
    const realResult = math.eval(operationExpression);
    const isResultCorrect = realResult === userResult;

    setIsUserResultCorrect(isResultCorrect);
  }, [userResult, operationExpression, isUserResultCorrectForQuestion]);

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
    </div>
  );
}
