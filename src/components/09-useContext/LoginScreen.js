import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export const LoginScreen = () => {
  const { setAppContext } = useContext(AppContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setAppContext((prevContext) => {
            return {
              ...prevContext,
              user: {
                id: 123,
                name: "Fernando",
              },
            };
          })
        }
      >
        Login
      </button>
    </div>
  );
};
