import React from 'react'
import { shallow } from 'enzyme'
import DiffIndicator from '@/components/Charts/DiffIndicator'

describe('<DiffIndicator />', () => {
  let wrapper, DiffIndicatorComp
  const diff_val = 80

  beforeEach(() => {
    DiffIndicatorComp = <DiffIndicator diffValue={diff_val} />

    wrapper = shallow(DiffIndicatorComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain correct classes', () => {
    expect(wrapper.find('.diff-container')).toHaveLength(1)
    expect(wrapper.find('.break')).toHaveLength(1)
    expect(wrapper.find('.diff')).toHaveLength(1)
  })

  it('should render correct diff value', () => {
    expect(wrapper.find('.diff').text()).toEqual('80%')
  })

  it('should render correct icon', () => {
    expect(wrapper.find('IoArrowUpCircleOutline')).toHaveLength(1)

    const IndicatorWrap = shallow(<DiffIndicator diffValue={-90} />)
    expect(IndicatorWrap.find('IoArrowDownCircleOutline')).toHaveLength(1)
  })
})
