import React, { useState } from "react";

export default function Greeting(props) {
  const [username, setUsername] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  function submitHandler() {
    setShowGreeting(true);
    props.submitHandler();
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  return showGreeting ? (
    <div>Hello, there, {username}!</div>
  ) : (
    <div>
      <label htmlFor="username">Name</label>
      <input id="username" maxLength="20" onChange={updateUsername} />

      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}
