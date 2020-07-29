import { useState } from "react";
import QuestionDetails from "./QuestionDetails";

function useOperation(settings) {
  const [questions] = useState(createQuestions());

  function createQuestions() {
    let createdQuestions = [];
    for (let i = 0; i < settings.numberOfOperations; i++) {
      let firstNumber = getRandomNumber();
      let sign = getRandomSign();
      let secondNumber = getRandomNumber();

      let expression = `${firstNumber} ${sign} ${secondNumber}`;
      let newQuestion = new QuestionDetails(expression);

      createdQuestions.push(newQuestion);
    }
    return createdQuestions;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function getRandomSign() {
    let randomIndex = Math.floor(
      Math.random() * settings.operationsType.length
    );
    return settings.operationsType[randomIndex];
  }

  return questions;
}

export default useOperation;
