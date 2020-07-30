import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import Timer from "./Timer.js";
import useOperation from "./useOperation";

export default function Quiz(settings) {
  const [areAllAnswersCorrect, setAreAllAnswersCorrect] = useState(false);
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  function checkAnswerForSingleQuestion(key, isCorrect) {
    if (isCorrect) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  useEffect(() => {
    if (currentQuestionIndex === settings.numberOfOperations) {
      setAreAllAnswersCorrect(true);
    }
  }, [currentQuestionIndex]);

  function getCurrentQuestion() {
    if (currentQuestionIndex === settings.numberOfOperations) {
      return <div>All done!</div>;
    }

    return (
      <QuizQuestion
        key={currentQuestionIndex}
        id={currentQuestionIndex}
        questionDetails={questions[currentQuestionIndex]}
        onQuizQuestionAnswered={checkAnswerForSingleQuestion}
      />
    );
  }

  return (
    <div>
      {settings.displayAllAtOnce === true
        ? createQuizQuestions()
        : getCurrentQuestion()}
      <button className="btn btn-dark" disabled={!areAllAnswersCorrect}>
        Finish
      </button>
      <Timer areAllAnswersCorrect={areAllAnswersCorrect} />
    </div>
  );
}
