import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import Timer from "./Timer.js";
import useOperation from "./useOperation";

export default function Quiz(settings) {
  const [areAllAnswersCorrect, setAreAllAnswersCorrect] = useState(false);
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const questions = useOperation(settings);

  function checkAnswer(key, isCorrect) {
    const answers = questionAnswers;
    answers[key] = isCorrect;
    setQuestionAnswers(answers);
    setAreAllAnswersCorrect(checkIfAllAnswersAreCorrect(questionAnswers));
  }

  function checkIfAllAnswersAreCorrect(answers) {
    return answers.every(x => x === true);
  }

  function createQuizQuestions() {
    return questions.map((x, i) => (
      <QuizQuestion
        key={i}
        id={i}
        questionDetails={x}
        onQuizQuestionAnswered={checkAnswer}
      />
    ));
  }

  return (
    <div>
      {createQuizQuestions()}
      <button className="btn btn-dark" disabled={!areAllAnswersCorrect}>
        Finish
      </button>
      <Timer areAllAnswersCorrect={areAllAnswersCorrect} />
    </div>
  );
}
