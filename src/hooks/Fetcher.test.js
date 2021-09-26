import useFetching from "./Fetcher";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";

describe("useCustomHook - useFetching", () => {
  it("changes state on GET service call", () => {
    let fakeProp = {
      name: "",
      code: "",
      description: "",
    };
    const { result } = renderHook(() => useFetching(fakeProp));
    const state = {};
    expect(result.current[0]).toEqual(null);
    expect(state).toEqual({});
  });
  it("acting calls and returned values", () => {
    let fakeProp = [
      {
        name: "",
        code: "",
        description: "",
        deleted: true,
      },
      {
        name: "",
        code: "",
        description: "",
        deleted: false,
      },
    ];
    const fetchFn = jest.fn();
    const { result } = renderHook(() => useFetching(fetchFn));

    act(async () => {
      await fetchFn.mockReturnValueOnce(fakeProp);
    });

    const state = {};
    expect(result.current[0]).toEqual(null);
    expect(state).toEqual({});
  });
  it("act fetching and returned values with soft delete filter", () => {
    let fakeProp = [
      {
        name: "",
        code: "",
        description: "",
        deleted: true,
      },
      {
        name: "",
        code: "",
        description: "",
        deleted: false,
      },
    ];
    const fetchFn = jest.fn();
    const { result } = renderHook(() => useFetching(fetchFn));

    act(async () => {
      await fetchFn.mockReturnValueOnce({ data: fakeProp });
    });

    const state = {};
    expect(result.current[0]).toEqual(null);
    expect(state).toEqual({});
  });
  it("act fetching and returned values in case of specific deep arrays", () => {
    let fakeProp = [
      {
        name: "",
        code: "",
        description: "",
        deleted: true,
      },
      {
        name: "",
        code: "",
        description: "",
        deleted: false,
      },
    ];
    const fetchFn = jest.fn();
    const { result } = renderHook(() => useFetching(fetchFn));

    act(async () => {
      await fetchFn.mockReturnValueOnce({ data: { data: fakeProp } });
    });

    const state = {};
    expect(result.current[0]).toEqual(null);
    expect(state).toEqual({});
  });
});
