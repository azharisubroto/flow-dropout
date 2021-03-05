import React from 'react'
import VerticalBarChart from './VerticalBarChart'
import DiffIndicator from './DiffIndicator'
import PropTypes from 'prop-types'
import styles from './DropOutGraph.module.scss'

/**
 * Render DropOutGraph
 *
 * @author Azhari Subroto <azhari.subroto@gmail.com>
 * @param {Object} props
 * @component
 * @example
 * return (
 *   <DropOutGraph jsonData={json_object} height={450} />
 * )
 */
const DropOutGraph = ({ jsonData, height, className, ...other }) => {
  const [items, setItems] = React.useState([])
  const keys = Object.keys(items).sort()

  React.useEffect(() => {
    var newData = traverseBFS(jsonData)
    var newarray = []
    newData.forEach((el) => {
      newarray.push(jsonData[el])
    })
    // console.log(newarray)
    setItems(newarray)
  }, [jsonData])

  // traverseBFS
  const traverseBFS = (obj) => {
    let queue = Object.entries(obj).map(([item, val]) => ({ id: item, ...val }))

    let res = []
    // console.log(JSON.parse(JSON.stringify(queue)))
    // console.log(queue.length)

    while (queue.length) {
      let curr = queue.shift()
      res.push(curr.id)

      if (typeof curr.adjList !== 'undefined' && curr.adjList.length > 0) {
        curr.adjList.forEach((el) => {
          var newobj = {
            id: el,
            ...obj[[el]]
          }
          //console.log(newobj)
          queue.push(newobj)
        })
      }
    }

    return res
  }

  /**
   * Get Value diff
   * @param {String} item - Item name from Object
   * @param {Object} currentVal - Value of an current item
   */
  const getDiff = (item, currentVal) => {
    const prevVal = currentVal
    const loc = parseInt(keys.indexOf(item) + 1)
    const nextitem = items[keys[loc]]
    const nextVal = nextitem ? nextitem.value : 0
    const diff = parseFloat(Math.abs(prevVal - nextVal).toFixed(2))
    const diffWithSymbol = `${prevVal > nextVal ? '-' : '+'}${diff}`

    if (nextVal == 0) {
      return null
    }

    return `${diff != 0 ? diffWithSymbol : 0}`
  }

  // classes
  let classes = styles.chartcontainer
  if (className) {
    classes += ` ${className}`
  }

  return (
    <div className={classes} {...other} style={{ height: `${height ? height : 500}px` }}>
      {/* Object Looping */}
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      {items.map((item, i) => {
        const diff = getDiff(item.id, item.value)

        return (
          <React.Fragment key={`bar-${i}`}>
            <VerticalBarChart
              label={item.label}
              item={item}
              barValue={item.value}
              type={item.type}
              adjList={item.adjList}
            />

            {diff != null && <DiffIndicator diffValue={diff} />}
          </React.Fragment>
        )
      })}
    </div>
  )
}

// Validate prop types
DropOutGraph.propTypes = {
  /** - Json Data */
  jsonData: PropTypes.object,
  /** - Chart Height */
  height: PropTypes.number
}

DropOutGraph.defaultProps = {
  height: 450
}

export default DropOutGraph
