import React from 'react'
import { shallow } from 'enzyme'
import Select from '@/components/Select'

describe('<Select />', () => {
  let wrapper, SelectComp

  beforeEach(() => {
    SelectComp = (
      <Select>
        <option>My Option</option>
      </Select>
    )

    wrapper = shallow(SelectComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain <select> element', () => {
    expect(wrapper.find('select')).toBeTruthy()
  })

  it('should contain contain correct text', () => {
    expect(wrapper.find('select').html()).toEqual('<select><option>My Option</option></select>')
  })
})
