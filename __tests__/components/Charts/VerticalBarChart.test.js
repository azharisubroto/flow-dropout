import React from 'react'
import { shallow } from 'enzyme'
import VerticalBarChart from '@/components/Charts/VerticalBarChart'

describe('<VerticalBarChart />', () => {
  let wrapper, VerticalBarChartComp

  beforeEach(() => {
    VerticalBarChartComp = (
      <VerticalBarChart
        label={`Label`}
        item={'Item Name'}
        barValue={70}
        type={'Type Name'}
        adjList={['node1', 'node2']}
      />
    )

    wrapper = shallow(VerticalBarChartComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain correct classes', () => {
    expect(wrapper.find('.hor-bar-char-wrapper')).toHaveLength(1)
    expect(wrapper.find('.hor-bar-chart')).toHaveLength(1)
    expect(wrapper.find('.hbc-label')).toHaveLength(1)
    expect(wrapper.find('.hbc-value')).toHaveLength(1)
  })

  it('should render correct percentage value', () => {
    expect(wrapper.find('.hbc-value').text()).toEqual('70%')
  })

  it('should render correct label', () => {
    expect(wrapper.find('.hbc-label').text()).toEqual('Label')
  })
})
