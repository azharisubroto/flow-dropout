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
  const items = jsonData
  const keys = Object.keys(items).sort()

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
      {Object.entries(items).map(([item, val], i) => {
        const diff = getDiff(item, val.value)

        return (
          <React.Fragment key={`bar-${i}`}>
            <VerticalBarChart
              label={val.label}
              item={item}
              barValue={val.value}
              type={val.type}
              adjList={val.adjList}
            />

            {/* Value Diff */}
            {diff != null && <DiffIndicator diffValue={parseInt(diff)} />}
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
