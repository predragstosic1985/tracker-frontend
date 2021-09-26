import React from "react";
import { shallow } from "enzyme";
import { CustomFooter, CustomHeader } from "./AppBar.styled";

const configuration = {
  mainBackground: "#b51783",
  button: {
    btnBackground: "#0067df",
    fontColor: "#F6F6F6",
    fontFamily: "Roboto",
  },
  typography: {
    fontColor: "#F6F6F6",
    fontFamily: "Roboto",
  },
  header: {
    background: "#009fdf",
    fontColor: "#F6F6F6",
    fontFamily: "Roboto",
  },
  footer: {
    background: "#009fdf",
    fontColor: "#F6F6F6",
    fontFamily: "Roboto",
  },
};
describe("<AppBar.styled />", () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render successfully CustomFooter", async () => {
    const wrapper = shallow(<CustomFooter configuration={configuration} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it("should render successfully CustomHeader", async () => {
    const wrapper = shallow(<CustomHeader configuration={configuration} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
