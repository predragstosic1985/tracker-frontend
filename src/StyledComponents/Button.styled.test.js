import React from 'react';
import { shallow } from 'enzyme';
import {
  StyledButtonPlain,
  StyledButton,
  StyledFab,
  StyledIconButton
} from './Button.styled';
import configuration from '../configuration.json';

jest.mock('../configuration.json');

describe('<Button.styled />', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render successfully StyledButtonPlain', async () => {
    const wrapper = shallow(<StyledButtonPlain />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it('should render successfully StyledButton', async () => {
    const wrapper = shallow(
      <StyledButton configuration={configuration.SYBIT} />
    );
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it('should render successfully StyledFab', async () => {
    const wrapper = shallow(<StyledFab configuration={configuration.SYBIT} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it('should render successfully StyledIconButton', async () => {
    const wrapper = shallow(
      <StyledIconButton configuration={configuration.SYBIT} />
    );
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
