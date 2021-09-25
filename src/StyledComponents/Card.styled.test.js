import React from 'react';
import { shallow } from 'enzyme';
import { CustomCard } from './Card.styled';
import configuration from '../configuration.json';

jest.mock('../configuration.json');

describe('<Card.styled />', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render successfully CustomCard', async () => {
    const wrapper = shallow(<CustomCard configuration={configuration.SYBIT} />);
    expect.assertions(1);
    expect(wrapper).toHaveLength(1);
  });
});
