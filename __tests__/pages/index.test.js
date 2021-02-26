import React from 'react'
import { shallow } from 'enzyme'
import Home from '@/pages/index'

describe('<Home/>', () => {
  let wrapper, HomeComp

  beforeEach(() => {
    HomeComp = <Home />

    wrapper = shallow(HomeComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should has Container component', () => {
    expect(wrapper.find('Container')).toHaveLength(1)
  })
  it('should has Card component', () => {
    expect(wrapper.find('Card')).toBeTruthy()
  })
  it('should has CardHeader component', () => {
    expect(wrapper.find('CardHeader')).toBeTruthy()
  })
  it('should has Select component', () => {
    expect(wrapper.find('Select')).toBeTruthy()
  })
  it('should has CardBody component', () => {
    expect(wrapper.find('CardBody')).toBeTruthy()
  })
})
