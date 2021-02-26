import React from 'react'
import { shallow } from 'enzyme'
import DropOutGraph from '@/components/Charts/DropOutGraph'

describe('<DropOutGraph />', () => {
  let wrapper, DropOutGraphComp

  beforeEach(() => {
    const NodeMap = {
      node1: {
        label: 'Contact Info',
        value: 100,
        type: 'BASIC',
        adjList: ['node2']
      },
      node2: {
        label: 'NemID',
        value: 95,
        type: 'SERVICE',
        adjList: ['node3', 'nodeBranch2']
      },
      node3: {
        label: 'Personal Address',
        value: 95,
        type: 'BASIC',
        adjList: []
      },
      nodeBranch2: {
        label: 'Branch 2',
        value: 55,
        type: 'BASIC',
        adjList: ['nodeBranch3']
      },
      nodeBranch3: {
        label: 'Branch 3',
        value: 25,
        type: 'BASIC',
        adjList: []
      }
    }

    DropOutGraphComp = <DropOutGraph jsonData={NodeMap} />

    wrapper = shallow(DropOutGraphComp)
  })

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should contain correct classes', () => {
    expect(wrapper.find('.chartcontainer')).toHaveLength(1)
  })

  it('should contain correct components', () => {
    expect(wrapper.find('VerticalBarChart')).toHaveLength(5)
    expect(wrapper.find('DiffIndicator')).toHaveLength(4)
  })
})
