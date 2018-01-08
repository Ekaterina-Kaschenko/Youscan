import React from 'react'
import { shallow } from 'enzyme'

import Button from '../../../src/components/Button'

describe('<Button />', () => {
  it('renders <Button /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  })

  it('renders props <Button /> component', () => {
    const props = {
      name: 'test'
    }

    const wrapper = shallow(<Button {...props} />);
    const instance = wrapper.instance();

    expect(instance).not.toBe(null);
  })
})
