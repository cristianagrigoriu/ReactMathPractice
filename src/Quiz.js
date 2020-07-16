import React from "react";
import QuizQuestion from "./QuizQuestion";

export default function Quiz(settings) {
  function createQuestions() {
    const questions = [];

    for (let i = 0; i < Number(settings.numberOfOperations); i++) {
      questions.push(
        <QuizQuestion key={i} operations={settings.operationsType} />
      );
    }
    return questions;
  }

  return <div>{createQuestions()}</div>;
}
