import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Tests on useCounter", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useCounter());

    console.log(result.current);

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  it("should set counter equal to initial state", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  it("should increment counter by 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  it("should decrement counter by 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(98);
  });

  it("should reset value to iniitalState", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
