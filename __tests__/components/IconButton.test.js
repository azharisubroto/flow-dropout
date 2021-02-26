import React from 'react'
import { shallow } from 'enzyme'
import IconButton from '@/components/IconButton'

describe('<IconButton />', () => {
  let wrapper, IconButtonComp

  beforeEach(() => {
    IconButtonComp = <IconButton>+</IconButton>

    wrapper = shallow(IconButtonComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain contain correct node', () => {
    expect(wrapper.find('button')).toBeTruthy()
    expect(wrapper.find('.icon-button')).toBeTruthy()
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should contain contain correct node', () => {
    expect(wrapper.find('button').text()).toEqual('+')
  })
})
