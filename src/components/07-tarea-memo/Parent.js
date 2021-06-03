import React, { useCallback, useState } from "react";
import { Child } from "./Child";

import "../02-useEffect/Effects.css";

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = ( num ) => {
      setValue( value + num )
  }
  // const increment = useCallback(
  //   (num) => {
  //     setValue((prevState) => prevState + num);
  //   },
  //   [setValue]
  // );

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Child key={n} number={n} onClick={increment} />
      ))}
      {/* <Child /> */}
    </div>
  );
};
