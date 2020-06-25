import React from "react";

export default function OperationsTypePicker({ onChange }) {
  let typeOfOperations = ["+", "-", "*", "/"];

  function onOperationChosen(options) {
    onChange([...options].filter(x => x.selected).map(x => x.value));
  }

  return (
    <div>
      <label>
        Pick the type of operations:
        <select
          multiple={true}
          onChange={event => onOperationChosen(event.target.options)}
        >
          {typeOfOperations.map((x, y) => (
            <option key={y}>{x}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
