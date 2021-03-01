import PropTypes from 'prop-types'
import IconButton from '@/components/IconButton'
import styles from './DiffIndicator.module.scss'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from 'react-icons/io5'

/**
 * Diff Indicator
 * @param {Number} diffValue - Number of differential value
 */
const DiffIndicator = ({ diffValue }) => {
  return (
    <div className={styles['diff-container']}>
      <div>
        <IconButton size={50}>
          {parseInt(diffValue) >= 0 ? <IoArrowUpCircleOutline size={25} /> : <IoArrowDownCircleOutline size={25} />}
        </IconButton>
      </div>

      {/* Break line */}
      <div className={styles.break}></div>

      {/* Diff number */}
      <div className={styles.diff}>{diffValue ? diffValue : 0}%</div>
    </div>
  )
}

DiffIndicator.propTypes = {
  /** - Value number of diff */
  diffValue: PropTypes.number
}

export default DiffIndicator
