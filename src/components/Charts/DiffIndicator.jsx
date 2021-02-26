import PropTypes from 'prop-types'
import IconButton from '@/components/IconButton'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from 'react-icons/io5'

/**
 * Diff Indicator
 * @param {Number} diffValue - Number of differential value
 */
const DiffIndicator = ({ diffValue }) => {
  return (
    <div className="diff-container">
      <div>
        <IconButton size={50}>
          {parseInt(diffValue) >= 0 ? <IoArrowUpCircleOutline size={25} /> : <IoArrowDownCircleOutline size={25} />}
        </IconButton>
      </div>

      <div className="break"></div>

      {/* Diff number */}
      <div className="diff">{diffValue ? diffValue : 0}%</div>

      <style jsx>{`
        .diff-container {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 50px;
          flex-flow: row wrap;
        }

        .break {
          width: 100%;
        }

        .diff {
          color: #9b9b9b;
          text-align: center;
          font-size: 14px;
          position: relative;
          bottom: -10px;
        }
      `}</style>
    </div>
  )
}

DiffIndicator.propTypes = {
  /** - Value number of diff */
  diffValue: PropTypes.number
}

export default DiffIndicator
