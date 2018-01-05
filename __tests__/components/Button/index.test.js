import React from 'react'
import { shallow } from 'enzyme'

import Button from '../../../src/components/Button'

describe('<Button />', () => {
  it('renders <Button /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });
})
