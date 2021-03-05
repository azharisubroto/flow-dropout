import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import styles from './VerticalBarChart.module.scss'

const VerticalBarChart = ({ label, barValue, item, type, adjList }) => {
  const [renderTooltip, setRenderTooltip] = useState(false)

  useEffect(() => {
    setRenderTooltip(true)
  }, [])

  return (
    <div className={styles.VerticalBarChart}>
      <div
        className={`${styles['hor-bar-chart']} ${styles[[type]]}`}
        style={{
          height: `${barValue ? barValue + '%' : 'auto'}`
        }}
        data-for={item.id}
        data-tip={`Type: ${type}<br/>Branch: ${item.id}<br/>adjList: ${adjList}`}>
        <div className={styles['hbc-label']}>{label}</div>
      </div>

      {/* Tool Tip */}
      {renderTooltip && <ReactTooltip id={item.id} place="top" type="dark" effect="float" multiline={true} />}

      <div className={styles['hbc-value']}>{barValue}%</div>
    </div>
  )
}

VerticalBarChart.propTypes = {
  adjList: PropTypes.array,
  background: PropTypes.string,
  barValue: PropTypes.number,
  item: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string
}

export default VerticalBarChart
