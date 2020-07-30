import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import Timer from "./Timer.js";
import useOperation from "./useOperation";

export default function Quiz(settings) {
  const [areAllAnswersCorrect, setAreAllAnswersCorrect] = useState(false);
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  const questions = useOperation(settings);

  function checkAnswer(key, isCorrect) {
    if (isCorrect && settings.displayAllAtOnce === false) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    const answers = questionAnswers;
    answers[key] = isCorrect;
    setQuestionAnswers(answers);
    setAreAllAnswersCorrect(checkIfAllAnswersAreCorrect(questionAnswers));
  }

  function checkIfAllAnswersAreCorrect(answers) {
    return answers.every(x => x === true);
  }

  function getQuizQuestionsUntil(numberOfDisplayedQuestions) {
    return questions
      .slice(0, numberOfDisplayedQuestions)
      .map((x, i) => (
        <QuizQuestion
          key={i}
          id={i}
          questionDetails={x}
          onQuizQuestionAnswered={checkAnswer}
        />
      ));
  }

  useEffect(() => {
    if (currentQuestionIndex === settings.numberOfOperations) {
      setAreAllAnswersCorrect(true);
    }
  }, [currentQuestionIndex]);

  return (
    <div>
      {settings.displayAllAtOnce === true
        ? getQuizQuestionsUntil(settings.numberOfOperations)
        : getQuizQuestionsUntil(currentQuestionIndex)}
      <button className="btn btn-dark" disabled={!areAllAnswersCorrect}>
        Finish
      </button>
      <Timer areAllAnswersCorrect={areAllAnswersCorrect} />
    </div>
  );
}
