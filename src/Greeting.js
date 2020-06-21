import React, { useState } from "react";

export default function Greeting({ submitHandler }) {
  const [username, setUsername] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function submitNameHandler() {
    if (isOnlyWhiteSpace(username)) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      setShowGreeting(true);
      submitHandler();
    }
  }

  function isOnlyWhiteSpace(text) {
    return text.replace(/\s/g, "").length === 0;
  }

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
        onKeyPress={event => {
          if (event.key === "Enter") {
            setUsername(event.target.value);
            submitNameHandler();
          }
        }}
      />

      <button type="submit" onClick={submitNameHandler}>
        Submit
      </button>

      {showErrorMessage ? <div>Please fill in your name.</div> : null}
    </div>
  );
}
