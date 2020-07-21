import React, { useState, useEffect, useCallback } from "react";
import QuizQuestion from "./QuizQuestion";

export default function Quiz(settings) {
  const [areAllAnswersCorrect, setAreAllAnswersCorrect] = useState(false);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const questions = [];

  function checkAnswer(key, isCorrect) {
    const answers = [...questionAnswers];
    answers[key] = isCorrect;
    setQuestionAnswers(answers);
    //call method to check if all are correct
  }

  function createQuestions() {
    for (let i = 0; i < Number(settings.numberOfOperations); i++) {
      questions.push(
        <QuizQuestion
          key={i}
          operations={settings.operationsType}
          onQuizQuestionAnswered={checkAnswer}
        />
      );
    }
    return questions;
  }

  return (
    <div>
      {createQuestions()}
      {/* {[...Array(settings.numberOfOperations)].map((x, i) => (
        <QuizQuestion
          key={i}
          operations={settings.operationsType}
          onQuizQuestionAnswered={checkAnswer}
        />
      ))} */}
      <button className="btn btn-dark" disabled={!areAllAnswersCorrect}>
        Finish
      </button>
    </div>
  );
}
