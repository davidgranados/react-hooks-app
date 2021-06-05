import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Tests on useForm", () => {
  const initialForm = {
    name: "fernando",
    email: "fernando@gmail.com",
  };

  it("should return an default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  it("should change the value of an input", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Melissa" });
  });

  it("should reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });

      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
