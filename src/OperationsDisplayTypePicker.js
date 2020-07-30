import React from "react";

export default function OperationDisplayType({ onChange }) {
  return (
    <div>
      <label>
        Display all questions at once:
        <input
          type="checkbox"
          onChange={event => onChange(event.target.checked)}
        />
      </label>
    </div>
  );
}
