import React from "react";

export default function Settings(props) {
  const showSettings = props.showSettings;
  let numberOfOperations = [5, 10, 15];
  let typeOfOperations = [
    "addition",
    "subtraction",
    "multiplication",
    "division"
  ];

  return showSettings ? (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Pick the number of operations:
          <select>
            {numberOfOperations.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </label>
      </div>
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
      <div>
        <label>
          Print one operation at a time:
          <input type="checkbox" />
        </label>
      </div>
    </div>
  ) : null;
}
