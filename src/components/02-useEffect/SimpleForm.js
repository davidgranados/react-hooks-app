import React, { useEffect, useState } from "react";
import { Message } from "./Message";

import "./Effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('formState cambió');
  }, [formState]);

  useEffect(() => {
    // console.log('email cambió');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState(prevState => {
      return {
        ...prevState,
        [target.name]: target.value,
      }
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@example.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
