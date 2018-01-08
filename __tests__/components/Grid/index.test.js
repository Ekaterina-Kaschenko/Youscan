import React from 'react'
import { shallow } from 'enzyme'

import Grid from '../../../src/components/Grid'

describe('<Grid />', () => {
  it('renders <Grid /> component', () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper).toHaveLength(1);
  })

  it('renders children when passed in', () => {
    const element = <div className='test'>Hello Waverley!</div>
    const wrapper = shallow((
      <Grid>
        <div className='test'>Hello Waverley!</div>
      </Grid>
    ))
    expect(wrapper.contains(element)).toEqual(true);
  })
})
