import React, { useState } from "react";
import "./ClickEvent.css";

export default function ClickEvent() {
  const [message, setMessage] = useState("Hello! Click the button below.");

  const handleClick = () => {
    setMessage("🎉 Button clicked! Event handling works!");
  };

  return (
    <div className="event-container">
      <h2>{message}</h2>
      <button className="click-btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
