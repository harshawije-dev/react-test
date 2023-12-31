import {  useRef, useState } from "react";

const StopWatch = () => {
  const input = useRef();
  const [time, setTime] = useState(0);

  const startCounter = () => {
    input.current = setInterval(() => setTime((prev) => prev + 1), 1000);
  };

  return (
    <div>
      <h2>Start timer</h2>
      <h5>{time}</h5>

      <hr />
      <button type="button" onClick={startCounter} className="btn-dark">
        Start
      </button>
      <button type="button">Stop</button>
    </div>
  );
};

export default StopWatch;
