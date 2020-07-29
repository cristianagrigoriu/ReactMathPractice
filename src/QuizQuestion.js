import React, { useState, useEffect } from "react";

export default function QuizQuestion({
  id,
  questionDetails,
  onQuizQuestionAnswered
}) {
  const [userResult, setUserResult] = useState("");
  const [isUserResultCorrect, setIsUserResultCorrect] = useState(false);

  const [userHasSubmittedAnswer, setUserHasSubmittedAnswer] = useState(false);

  const equalSign = "=";

  function handleUserResult(value) {
    setUserResult(Number(value));
    setUserHasSubmittedAnswer(Number(true));
  }

  //use check user result
  useEffect(() => {
    const isResultCorrect = questionDetails.correctResult === userResult;

    setIsUserResultCorrect(isResultCorrect);
    onQuizQuestionAnswered(id, isResultCorrect);
  }, [userResult, id]);

  return (
    <div>
      <span>
        <strong>
          {questionDetails.operationExpression} {equalSign}
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
