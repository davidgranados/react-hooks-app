import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../02-useEffect/Effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter((prevState) => prevState + 1);
  // };

  const increment = useCallback(
    (num) => {
      setCounter((prevState) => prevState + num);
    },
    [setCounter]
  );

  useEffect(() => {
    console.log("me disparé");
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement onClick={increment} />
    </div>
  );
};
