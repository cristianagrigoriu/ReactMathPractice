import React from "react";
import NumberOfOperationsPicker from "./NumberOfOperationsPicker";
import OperationsTypePicker from "./OperationsTypePicker";
import OperationDisplayTypePicker from "./OperationsDisplayTypePicker";

export default function Settings(props) {
  const showSettings = props.showSettings;
  console.log(showSettings);

  return showSettings ? (
    <div>
      <h2>Settings</h2>
      <NumberOfOperationsPicker />
      <OperationsTypePicker />
      <OperationDisplayTypePicker />
    </div>
  ) : null;
}
