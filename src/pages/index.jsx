import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Card from '@/components/Card'
import CardHeader from '@/components/CardHeader'
import CardBody from '@/components/CardBody'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Select from '@/components/Select'
import { IoSettingsOutline } from 'react-icons/io5'
import DropOutGraph from '@/components/Charts/DropOutGraph'

// Node Map Data
/*
        node1
         !
        node2
    _____!________
   !            !
  node3       nodeBranch2
                  !
              nodeBranch3
*/

let NodeMap = {
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

/**
 * Home Page
 */
export default function Home() {
  const [branch, setBranch] = useState('')
  const [dropdown, setDropdown] = useState([])
  const [items, setItems] = useState({})

  // Restructure Data
  useEffect(() => {
    // Set Object data
    setItems(NodeMap)

    // Setup dropdown filter
    const list = Object.keys(NodeMap).map((key) => ({ key, value: NodeMap[key] }))
    setDropdown(list)
  }, [])

  // Handle change
  const handleChange = (val) => {
    setBranch(val)

    if ('all' == val) {
      setItems(NodeMap)
    } else {
      let criteria = []
      criteria.push(val)

      // Adjust List
      let adjList = NodeMap[val].adjList

      criteria = criteria.concat(adjList)

      const filtered = Object.keys(NodeMap)
        .filter((key) => criteria.includes(key))
        .reduce((obj, key) => {
          obj[key] = NodeMap[key]
          return obj
        }, {})

      setItems(filtered)
    }
  }

  return (
    <>
      <Head>
        <title>Flow Chart Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* Main Card App */}
        <Card>
          {/* Card Header */}
          <CardHeader
            headline="Flow dropout per step and service"
            tooltipText="Bar chart based on the dropout amount which is a real value (float/double) in percentage">
            {/* Toolbox */}
            <div className="d-flex">
              <Select
                value={branch}
                onChange={(e) => {
                  handleChange(e.target.value)
                }}>
                <option value="" disabled>
                  Choose branches
                </option>
                <option value="all">All</option>
                {dropdown.map((item, i) => (
                  <option key={`option-${i}`} value={item.key}>
                    {item.value.label}
                  </option>
                ))}
              </Select>

              <Button height={30} width={30}>
                <IoSettingsOutline size={16} />
              </Button>
            </div>
          </CardHeader>

          {/* Data */}
          <CardBody py={0}>{NodeMap && <DropOutGraph rootNode={NodeMap} jsonData={items} height={550} />}</CardBody>
        </Card>
      </Container>
      <style jsx>{`
        .d-flex {
          display: flex;
          gap: 10px;
        }

        option {
          padding: 10px;
          font-size: 14px;
        }
      `}</style>
    </>
  )
}
