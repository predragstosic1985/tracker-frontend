import React from 'react';
import { shallow } from 'enzyme';
import { CustomFooter, CustomHeader } from './AppBar.styled';
import configuration from '../configuration.json';

jest.mock('../configuration.json');

describe('<AppBar.styled />', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render successfully CustomFooter', async () => {
    const wrapper = shallow(
      <CustomFooter configuration={configuration.SYBIT} />
    );
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
  it('should render successfully CustomHeader', async () => {
    const wrapper = shallow(
      <CustomHeader configuration={configuration.SYBIT} />
    );
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
