import React, { useState, useEffect, useCallback } from "react";
import QuizQuestion from "./QuizQuestion";

export default function Quiz(settings) {
  const [isFinishEnabled, setIsFinishEnabled] = useState(false);
  const [areAllAnswersCorrect, setAreAllAnswersCorrect] = useState(false);

  const questions = [];

  // const isUserResultCorrectForQuestion = useCallback(
  //   isCorrect => {
  //     setAreAllAnswersCorrect(areAllAnswersCorrect && isCorrect);
  //   },
  //   [areAllAnswersCorrect]
  // );

  function checkAnswer(isCorrect) {
    setAreAllAnswersCorrect(areAllAnswersCorrect && userResult);
    console.log(isCorrect);
    console.log(`from function ${areAllAnswersCorrect} && ${isCorrect}`);
    console.log(`from function ${areAllAnswersCorrect && isCorrect}`);
    console.log(`from function ${areAllAnswersCorrect}`);
  }

  function createQuestions() {
    for (let i = 0; i < Number(settings.numberOfOperations); i++) {
      questions.push(
        <QuizQuestion
          key={i}
          operations={settings.operationsType}
          isUserResultCorrectForQuestion={checkAnswer}
        />
      );
    }
    return questions;
  }

  useEffect(() => {
    setAreAllAnswersCorrect(true);
    questions.map(checkAnswer); //flatten array
    setIsFinishEnabled(areAllAnswersCorrect);
    console.log(`from useEffect ${areAllAnswersCorrect}`);
  }, [setAreAllAnswersCorrect, questions, checkAnswer, areAllAnswersCorrect]);

  return (
    <div>
      {createQuestions()}
      <button className="btn btn-dark" disabled={!isFinishEnabled}>
        Finish
      </button>
    </div>
  );
}
