import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); // 10

  const reset = () => {
    setCounter(initialState);
  };

  const increment = (number = 1) => {
    setCounter((prevCounter) => prevCounter + number);
  };

  const decrement = (number = 1) => {
    setCounter((prevCounter) => prevCounter - number);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
