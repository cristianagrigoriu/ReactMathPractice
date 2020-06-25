import React, { useState, useEffect } from "react";

export default function QuizQuestion({ operations }) {
  const [userResult, setUserResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(getRandomNumber());

  //useEffect
  //const firstNumber = useEffect()

  //const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const sign = getRandomOperation();
  const equalSign = "=";

  function getRandomOperation() {
    let randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function handleUserResult(value) {
    setUserResult(value);
  }

  function checkUserResult() {
    const realResult = eval(`${firstNumber} ${sign} ${secondNumber}`);
    console.log(realResult === userResult);
    return realResult === userResult;
  }

  return (
    <div>
      <span>{firstNumber}</span>
      <span>{sign}</span>
      <span>{secondNumber}</span>
      <span>{equalSign}</span>
      <input onChange={event => handleUserResult(event.target.value)} />
      <button onClick={checkUserResult}>Check</button>
    </div>
  );
}
