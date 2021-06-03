import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); // 10

  const reset = () => {
    setCounter(initialState);
  };

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
