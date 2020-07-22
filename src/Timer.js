import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeEllapsed, setTimeEllapsed] = useState(0);

  function calculateTimeLeft() {
    return timeEllapsed + 1;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeEllapsed(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h3 className="text-info">Timer: {timeEllapsed}</h3>
    </div>
  );
}
