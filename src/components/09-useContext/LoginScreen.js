import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const { setAppContext } = useContext(AppContext);
  const [formValues, handleInputChange, formReset] = useForm({
    name: "",
    password: "",
  });

  const { name, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    setAppContext((prevContext) => {
      return {
        ...prevContext,
        user: {
          id: 123,
          name,
        },
      };
    });

    formReset();
  };
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
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
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
