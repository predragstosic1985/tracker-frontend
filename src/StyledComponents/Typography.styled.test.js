import React from "react";
import { shallow } from "enzyme";
import { StyledTypography } from "./Typography.styled";

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
};

describe("<StyledTypography />", () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render successfully StyledTypography", async () => {
    const wrapper = shallow(<StyledTypography configuration={configuration} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
