import React, { useState, useEffect } from "react";
import math from "mathjs";

export default function QuizQuestion({ operations }) {
  const [userResult, setUserResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(getRandomNumber());
  const [secondNumber, setSecondNumber] = useState(getRandomNumber());
  const [sign, setSign] = useState(getRandomOperation());

  //useEffect
  //const firstNumber = useEffect()

  useEffect(() => {
    setFirstNumber(getRandomNumber());
    setSecondNumber(getRandomNumber());
    setSign(getRandomOperation());
  }, []);

  //const firstNumber = getRandomNumber();
  //const secondNumber = getRandomNumber();

  const equalSign = "=";

  function getRandomOperation() {
    let randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function handleUserResult(value) {
    setUserResult(Number(value));
  }

  function checkUserResult() {
    const realResult = math.eval(`${firstNumber} ${sign} ${secondNumber}`); //);
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
