import React from 'react'
import { shallow } from 'enzyme'
import Card from '@/components/Card'

describe('<Card />', () => {
  let wrapper, CardComp

  beforeEach(() => {
    CardComp = <Card>My Card</Card>

    wrapper = shallow(CardComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain contain correct text', () => {
    expect(wrapper.find('.ra-card').text()).toEqual('My Card')
  })
})
