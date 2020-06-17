import React from "react";

export default function NumberOfOperationsPicker() {
  let numberOfOperations = [5, 10, 15];

  return (
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
  );
}
