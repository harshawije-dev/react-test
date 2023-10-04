import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const input = useRef();

  useEffect(() => {
    const key = (event) => {
      event.key === "\\" ? input.current.focus() : null;
      console.log(event);
    };

    addEventListener("keydown", key);

    return () => {
      removeEventListener("keydown", key);
    };
  }, []);

  return (

  );
};

export default StopWatch;
