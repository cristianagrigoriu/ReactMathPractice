import { useState } from "react";

function useOperation(operations) {
  const [firstNumber] = useState(getRandomNumber());
  const [secondNumber] = useState(getRandomNumber());
  const [sign] = useState(getRandomSign());

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function getRandomSign() {
    let randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
  }
  return `${firstNumber} ${sign} ${secondNumber}`;
}
//generate x random question details

export default useOperation;
