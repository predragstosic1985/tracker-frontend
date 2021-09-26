import axios from "axios";
import { getTrackerData, updateMeasurement, loginUser } from "./services";

jest.mock("axios");

const baseLink = "http://localhost:5000/api";
const fakeToken = undefined;

describe("services", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should fetch data", async () => {
    const mockedAxios = axios.get;
    const resp = {
      firstName: "test",
      lastName: "fake",
      measurements: [],
    };
    mockedAxios.mockReturnValue(Promise.resolve(resp));

    const result = await getTrackerData();

    expect.assertions(3);
    expect(axios.get).toHaveBeenCalledWith(`${baseLink}/tracker/read`);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toBe(resp);
  });
  it("should update measurement", async () => {
    const user = {
      id: 1,
      measurement: ["test"],
    };
    const updated = {
      id: 1,
      measurement: ["test123"],
    };

    const mockedAxios = axios.put;
    const resp = {
      data: Promise.resolve(),
    };
    mockedAxios.mockReturnValue(Promise.resolve(resp));

    const result = updateMeasurement(user.id, updated);

    expect.assertions(3);
    expect(axios.put).toHaveBeenCalledWith(
      `${baseLink}/tracker/update/${user.id}`,
      updated
    );
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(result).toEqual(resp.data);
  });
});
