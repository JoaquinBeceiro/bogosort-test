import "./App.css";
import React, { useState } from "react";
import { shuffleArray, equalsCheck } from "./helper";
import { Line, Timer } from "./components";

const App = () => {
  const originalLines = Array.from({ length: 100 }, (_, i) => i + 1);
  const suffledLines = shuffleArray(originalLines);

  const [linesState, setLinesState] = useState(suffledLines);
  const [intervalState, setIntervalState] = useState(null);

  const checkSorted = (array) => {
    const equal = equalsCheck(originalLines, array);
    if (equal) {
      handleStop();
      alert("Sorted!");
    }
  };

  const handleStart = () => {
    const interval = setInterval(() => {
      const shuffled = shuffleArray(linesState);
      setLinesState(shuffled);
      checkSorted(shuffled);
    }, 1000);
    setIntervalState(interval);
  };

  const handleStop = () => {
    if (intervalState) {
      clearInterval(intervalState);
      setIntervalState(null);
    }
  };

  const handleClick = () => {
    if (intervalState) {
      handleStop();
    } else {
      handleStart();
    }
  };

  return (
    <div className="App">
      <div className="header-container ">
        <h1>Bogosort</h1>
      </div>
      <div className="lines-container">
        {linesState.map((line, index) => (
          <Line key={`line-${index}`} height={line} />
        ))}
      </div>
      <div className="bottom-container">
        <div>
          <Timer isActive={intervalState !== null} />
        </div>
        <div>
          <button onClick={handleClick}>
            {intervalState ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
