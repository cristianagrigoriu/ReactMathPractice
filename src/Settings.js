import React, { useState } from "react";
import NumberOfOperationsPicker from "./NumberOfOperationsPicker";
import OperationsTypePicker from "./OperationsTypePicker";
import OperationDisplayTypePicker from "./OperationsDisplayTypePicker";

export default function Settings({ onSettingsSelected }) {
  const [numberOfOperations, setNumberOfOperations] = useState(0);
  const [operationsType, setOperationsType] = useState([]);
  const [displayAllAtOnce, setDisplayAllAtOnce] = useState(false);

  function areSettingsValid() {
    console.log("aaa");
    console.log(`#op: ${numberOfOperations}`);
    return numberOfOperations !== 0;
  }

  function handleSettingsSelected() {
    const settings = { numberOfOperations, operationsType, displayAllAtOnce };
    onSettingsSelected(settings);
  }

  return (
    <div>
      <h2>Settings</h2>
      <NumberOfOperationsPicker onChange={setNumberOfOperations} />
      <OperationsTypePicker />
      <OperationDisplayTypePicker />
      <button
        type="submit"
        disabled={!areSettingsValid()}
        onClick={handleSettingsSelected}
      >
        Start
      </button>
    </div>
  );
}
