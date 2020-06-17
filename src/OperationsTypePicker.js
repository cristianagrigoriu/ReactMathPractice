import React from "react";

export default function OperationsTypePicker() {
  let typeOfOperations = [
    "addition",
    "subtraction",
    "multiplication",
    "division"
  ];

  return (
    <div>
      <label>
        Pick the type of operations:
        <select multiple={true}>
          {typeOfOperations.map((x, y) => (
            <option key={y}>{x}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
