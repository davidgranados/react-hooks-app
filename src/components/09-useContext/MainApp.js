import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { AppContext } from "./AppContext";

export const MainApp = () => {
  const [appContext, setAppContext] = useState({});

  return (
    <AppContext.Provider
      value={{
        appContext,
        setAppContext,
      }}
    >
      <AppRouter />
    </AppContext.Provider>
  );
};
