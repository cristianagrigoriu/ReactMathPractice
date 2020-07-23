import React, { useEffect, useReducer } from "react";

class Time {
  constructor(secondsEllapsed, minutesEllapsed) {
    this.secondsEllapsed = secondsEllapsed || 0;
    this.minutesEllapsed = minutesEllapsed || 0;
  }

  updateTimeByOneSecond = () => {
    let updatedSeconds = this.secondsEllapsed + 1;
    let updatedMinutes = this.minutesEllapsed;
    if (updatedSeconds === 60) {
      updatedSeconds = 0;
      updatedMinutes += 1;
    }
    return new Time(updatedSeconds, updatedMinutes);
  };
}

export default function Timer({ areAllAnswersCorrect }) {
  const initialState = new Time();

  function reducer(elapsedTime) {
    return elapsedTime.updateTimeByOneSecond();
  }

  const [elapsedTime, updateElapsedTime] = useReducer(reducer, initialState);

  //when elapsed time changes, the component rerenders and useEffect is called again
  // => displays numbers din 1 in 1
  // => when updating state, create new pbject with new state, don't update the existing object
  useEffect(() => {
    console.log(areAllAnswersCorrect);
    if (areAllAnswersCorrect === true) {
      console.log("DA");
      return;
    }

    const timer = setTimeout(() => {
      updateElapsedTime(elapsedTime);
    }, 1000);
    return () => clearTimeout(timer);
  }, [areAllAnswersCorrect, elapsedTime]);

  return (
    <div>
      <h3 className="text-info">
        Timer: {elapsedTime.minutesEllapsed}:{elapsedTime.secondsEllapsed}
      </h3>
    </div>
  );
}
