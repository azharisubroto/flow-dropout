import React from 'react'
import { shallow } from 'enzyme'
import CardBody from '@/components/CardBody'

describe('<CardBody />', () => {
  let wrapper, CardBodyComp

  beforeEach(() => {
    CardBodyComp = <CardBody>My CardBody</CardBody>

    wrapper = shallow(CardBodyComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain contain correct text', () => {
    expect(wrapper.find('.ra-card-body').text()).toEqual('My CardBody')
  })
})
