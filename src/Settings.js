import React, { useState } from "react";
import NumberOfOperationsPicker from "./NumberOfOperationsPicker";
import OperationsTypePicker from "./OperationsTypePicker";
import OperationDisplayTypePicker from "./OperationsDisplayTypePicker";

export default function Settings({ onSettingsSelected }) {
  const [numberOfOperations, setNumberOfOperations] = useState(0);
  const [operationsType, setOperationsType] = useState([]);
  const [displayAllAtOnce, setDisplayAllAtOnce] = useState(false);

  function areSettingsValid() {
    return numberOfOperations !== 0 && operationsType.length !== 0;
  }

  function handleSettingsSelected() {
    const settings = { numberOfOperations, operationsType, displayAllAtOnce };
    onSettingsSelected(settings);
  }

  return (
    <div>
      <h2>Settings</h2>
      <NumberOfOperationsPicker onChange={setNumberOfOperations} />
      <OperationsTypePicker onChange={setOperationsType} />
      <OperationDisplayTypePicker onChange={setDisplayAllAtOnce} />
      <button
        className="btn btn-dark"
        type="submit"
        disabled={!areSettingsValid()}
        onClick={handleSettingsSelected}
      >
        Start
      </button>
    </div>
  );
}
