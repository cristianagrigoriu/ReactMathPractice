import React from "react";

export default function OperationDisplayType({ onChange }) {
  return (
    <div>
      <label>
        Print one operation at a time:
        <input
          type="checkbox"
          onChange={event => onChange(event.target.checked)}
        />
      </label>
    </div>
  );
}
