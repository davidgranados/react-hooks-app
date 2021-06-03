import React from "react";

export const Child = React.memo(({ number, onClick }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
});
