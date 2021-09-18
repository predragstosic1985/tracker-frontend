import ReactDOM from "react-dom";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("index", () => {
  it("should render successfully", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index");
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
  });
});
