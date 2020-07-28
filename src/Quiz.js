import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import Timer from "./Timer.js";

export default function Quiz(settings) {
  const [areAllAnswersCorrect, setAreAllAnswersCorrect] = useState(false);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const questions = [];

  function checkAnswer(key, isCorrect) {
    const answers = questionAnswers;
    answers[key] = isCorrect;
    setQuestionAnswers(answers);
    setAreAllAnswersCorrect(checkIfAllAnswersAreCorrect(questionAnswers));
  }

  function checkIfAllAnswersAreCorrect(answers) {
    return answers.every(x => x === true);
  }

  function createQuestions() {
    for (let i = 0; i < Number(settings.numberOfOperations); i++) {
      //for prin intrebari gata generate
      questions.push(
        <QuizQuestion
          key={i}
          id={i}
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
      <Timer areAllAnswersCorrect={areAllAnswersCorrect} />
    </div>
  );
}
