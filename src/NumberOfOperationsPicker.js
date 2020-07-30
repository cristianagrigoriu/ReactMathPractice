import React from "react";

export default function NumberOfOperationsPicker({ onChange }) {
  let numberOfOperations = ["", 2, 5, 10, 15];

  return (
    <div>
      <label>
        Pick the number of operations:
        <select
          className="dropdown"
          required
          onChange={event => onChange(event.target.value)}
        >
          {numberOfOperations.map((x, y) => (
            <option key={y}>{x}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
