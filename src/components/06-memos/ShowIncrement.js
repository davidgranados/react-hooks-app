import React from "react";

export const ShowIncrement = React.memo(({ onClick }) => {
  console.log(" Me volví a generar :( ");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        onClick(5);
      }}
    >
      Incrementar
    </button>
  );
});
