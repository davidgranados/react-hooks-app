import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import { heavyProcess } from "../../helpers/heavyProcess";

import "../02-useEffect/Effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  // const heavyProccess = heavyProcess(counter);
  const memoHeavyProccess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>{" "}
      </h3>
      <hr />

      {/*<p> {heavyProccess} </p>*/}
      <p> {memoHeavyProccess} </p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
