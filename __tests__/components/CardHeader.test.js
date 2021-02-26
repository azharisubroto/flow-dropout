import React from 'react'
import { shallow } from 'enzyme'
import CardHeader from '@/components/CardHeader'

describe('<CardHeader />', () => {
  let wrapper, CardHeaderComp

  beforeEach(() => {
    CardHeaderComp = <CardHeader>My CardHeader</CardHeader>

    wrapper = shallow(CardHeaderComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain contain correct class', () => {
    expect(wrapper.find('.ra-card-header')).toBeTruthy()
  })

  it('should contain contain .headline class', () => {
    expect(wrapper.find('.headline')).toBeTruthy()
  })
})
