import React, { useState } from "react";

export default function Greeting({ submitHandler }) {
  const [username, setUsername] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  function submitNameHandler() {
    setShowGreeting(true);
    submitHandler();
  }

  //ToDo if no name, show message, don't show settings
  //on enter, submit
  return showGreeting ? (
    <div>Hello, there, {username}!</div>
  ) : (
    <div>
      <label htmlFor="username">Name</label>
      <input
        id="username"
        maxLength="20"
        onChange={event => setUsername(event.target.value)}
      />

      <button type="submit" onClick={submitNameHandler}>
        Submit
      </button>
    </div>
  );
}
