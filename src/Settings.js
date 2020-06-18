import React, { useState } from "react";
import NumberOfOperationsPicker from "./NumberOfOperationsPicker";
import OperationsTypePicker from "./OperationsTypePicker";
import OperationDisplayTypePicker from "./OperationsDisplayTypePicker";

export default function Settings({ onSettingsSelected }) {
  const [numberOfOperations, setNumberOfOperations] = useState(0);
  const [operationsType, setOperationsType] = useState([]);
  const [displayAllAtOnce, setDisplayAllAtOnce] = useState(false);

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
      <button type="submit" onClick={handleSettingsSelected}>
        Start
      </button>
    </div>
  );
}
