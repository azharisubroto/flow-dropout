import React from 'react'
import { shallow } from 'enzyme'
import Container from '@/components/Container'

describe('<Container />', () => {
  let wrapper, ContainerComp

  beforeEach(() => {
    ContainerComp = (
      <Container>
        <div>Test</div>
      </Container>
    )

    wrapper = shallow(ContainerComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain contain correct html', () => {
    expect(wrapper.find('.container').html()).toEqual('<div class="container "><div>Test</div></div>')
  })
})
