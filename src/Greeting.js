import React, { useState } from "react";

export default function Greeting() {
  const [username, setUsername] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  function submitHandler() {
    setShowGreeting(true);
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  return showGreeting ? (
    <div>Welcome, {username}!</div>
  ) : (
    <div>
      <label for="username">Name</label>
      <input id="username" maxLength="20" onChange={updateUsername} />

      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}
