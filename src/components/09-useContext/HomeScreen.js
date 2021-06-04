import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export const HomeScreen = () => {
  const { appContext } = useContext(AppContext);

  // console.log( appContext );

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />

      <pre>{JSON.stringify(appContext, null, 3)}</pre>
    </div>
  );
};
