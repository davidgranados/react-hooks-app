import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export const AboutScreen = () => {
  const { appContext, setAppContext } = useContext(AppContext);

  const handleClick = () => {
    setAppContext({});
  };

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <pre>{JSON.stringify(appContext, null, 3)}</pre>

      <button className="btn btn-warning" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
