import React from "react";
import QuizQuestion from "./QuizQuestion";

export default function Quiz() {
  function createQuestions() {
    const questions = [];
    for (let i = 0; i < 3; i++) {
      questions.push(<QuizQuestion key={i} operations={("+", "-")} />);
    }
    return questions;
  }

  return <div>{createQuestions()}</div>;
}
