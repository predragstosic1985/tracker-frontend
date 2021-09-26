import useIsMounted from "./isMounted";
import { renderHook } from "@testing-library/react-hooks";

describe("useCustomHook - isMounted", () => {
  let fakeProp = {
    name: "",
    code: "",
    description: "",
  };
  const setFakeFunction = jest.fn();

  it("changes state on call", () => {
    const { result } = renderHook(() =>
      useIsMounted(setFakeFunction(), fakeProp)
    );
    const state = {};

    expect(result.error).toEqual(undefined);
    expect(state).toEqual({});
  });
});
