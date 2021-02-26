import React from 'react'
import { shallow } from 'enzyme'
import Button from '@/components/Button'

describe('<Button />', () => {
  let wrapper, ButtonComp

  beforeEach(() => {
    ButtonComp = <Button>My Button</Button>

    wrapper = shallow(ButtonComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain <button> element', () => {
    expect(wrapper.find('button')).toBeTruthy()
  })

  it('should contain contain correct text', () => {
    expect(wrapper.find('button').text()).toEqual('My Button')
  })
})
