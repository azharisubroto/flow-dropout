import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

const VerticalBarChart = ({ background, label, barValue, item, type, adjList }) => {
  const [renderTooltip, setRenderTooltip] = useState(false)

  useEffect(() => {
    setRenderTooltip(true)
  }, [])

  return (
    <div className="hor-bar-char-wrapper">
      <div
        className={`hor-bar-chart ${type}`}
        data-for={item}
        data-tip={`Type: ${type}<br/>Branch: ${item}<br/>adjList: ${adjList}`}>
        <div className="hbc-label">{label}</div>
      </div>

      {/* Tool Tip */}
      {renderTooltip && <ReactTooltip id={item} place="top" type="dark" effect="float" multiline={true} />}

      <div className="hbc-value">{barValue}%</div>
      <style jsx>{`
        .hor-bar-char-wrapper {
          width: 80px;
          display: flex;
          flex-wrap: wrap;
          flex: 0 0 1;
          margin: 0 15px;
          position: relative;
          align-items: center;
          height: 80%;
          flex-flow: row wrap;
        }

        /* Colored bar */
        .hor-bar-chart {
          background: ${background ? background : '#d7ebff'};
          border-radius: 10px;
          padding: 20px;
          display: flex;
          min-height: 68px;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: ${`${barValue}%`};
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
          &.BASIC {
            background: #d4eeea;
            border: 1px solid #d4eeea;
            &:hover {
              background: lighten(#d4eeea, 4%);
              border: 1px solid darken(#d4eeea, 4%);
            }
          }
          &.SERVICE {
            background: #afe7c8;
            border: 1px solid #afe7c8;
            &:hover {
              background: lighten(#afe7c8, 4%);
              border: 1px solid darken(#afe7c8, 4%);
            }
          }
        }

        .hbc-label {
          transform: translateX(-50%) translateY(-50%) rotate(-90deg);
          height: 18px;
          line-height: 18px;
          font-size: 18px;
          color: #323a44;
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          width: auto;
          white-space: nowrap;
        }

        .hbc-value {
          margin-top: auto;
          font-size: 18px;
          font-weight: 500;
          text-align: center;
          width: 100%;
          bottom: -40px;
          position: absolute;
        }
      `}</style>
    </div>
  )
}

VerticalBarChart.propTypes = {
  adjList: PropTypes.array,
  background: PropTypes.string,
  barValue: PropTypes.number,
  item: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}

export default VerticalBarChart
