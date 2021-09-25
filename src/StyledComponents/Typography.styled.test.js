import React from 'react';
import { shallow } from 'enzyme';
import { StyledTypography } from './Typography.styled';
import configuration from '../configuration.json';

jest.mock('../configuration.json');

describe('<StyledTypography />', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render successfully StyledTypography', async () => {
    const wrapper = shallow(
      <StyledTypography configuration={configuration.SYBIT} />
    );
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
