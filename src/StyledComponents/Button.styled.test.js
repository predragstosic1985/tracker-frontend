import React from "react";
import { shallow } from "enzyme";
import {
  StyledButtonPlain,
  StyledButton,
  StyledFab,
  StyledIconButton,
} from "./Button.styled";

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

describe("<Button.styled />", () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render successfully StyledButtonPlain", async () => {
    const wrapper = shallow(<StyledButtonPlain />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it("should render successfully StyledButton", async () => {
    const wrapper = shallow(<StyledButton configuration={configuration} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it("should render successfully StyledFab", async () => {
    const wrapper = shallow(<StyledFab configuration={configuration} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it("should render successfully StyledIconButton", async () => {
    const wrapper = shallow(<StyledIconButton configuration={configuration} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
