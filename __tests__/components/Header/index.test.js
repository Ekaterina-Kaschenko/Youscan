import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../../src/components/Header'

describe('<Header />', () => {
  it('renders <Header /> component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  })

  it('renders children when passed in', () => {
    const element = <div className='test'>Hello Waverley!</div>
    const wrapper = shallow((
      <Header>
        <div className='test'>Hello Waverley!</div>
      </Header>
    ))
    expect(wrapper.contains(element)).toEqual(true);
  })
})
