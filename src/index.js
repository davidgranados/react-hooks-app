import React from 'react';
import ReactDOM from 'react-dom';
import {CounterWithCustomHook} from "./components/01-use-state/CounterWithCustomHook";

ReactDOM.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
