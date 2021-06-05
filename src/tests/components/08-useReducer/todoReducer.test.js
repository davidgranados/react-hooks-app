import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";

describe("Tests on todoReducer", () => {
  it("should return the initialState", () => {
    const state = todoReducer(demoTodo, {});
    expect(state).toEqual(demoTodo);
  });

  it("should add a TODO", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Express",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(demoTodo, action);
    expect(state).toHaveLength(demoTodo.length + 1);
    expect(state).toEqual([...demoTodo, newTodo]);
  });

  it("should delete a TODO", () => {

    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodo, action);

    expect(state).toHaveLength(demoTodo.length - 1);
    expect(state).toEqual([demoTodo[1]]);
  });

  it("should TOGGLE a TODO", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const state = todoReducer(demoTodo, action);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodo[1]);
  });
});
